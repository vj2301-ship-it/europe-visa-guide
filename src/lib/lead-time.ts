import type { Country } from "@/data/types";
import { zoneFor, type Access, type Passport } from "@/data/passports";

/** Largest number of weeks implied by a free-text phrase like "15 calendar days, up to 45". */
function worstCaseWeeks(text: string): number {
  let weeks = 0;
  const re = /(\d+)\s*(?:-|to|–)?\s*(\d+)?\s*(week|day|month|hour|minute)/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const high = Number(m[2] ?? m[1]);
    const unit = (m[3] ?? "").toLowerCase();
    const inWeeks =
      unit === "week" ? high : unit === "month" ? high * 4.4 : unit === "day" ? high / 7 : 0;
    weeks = Math.max(weeks, inWeeks);
  }
  return weeks;
}

export interface LeadTime {
  access: Access;
  /** Weeks to allow from "today" to departure */
  weeks: number;
  waitWeeks: number;
  decisionWeeks: number;
  bufferWeeks: number;
  /** Which passport gives this result */
  passportId: string;
}

const BUFFER_WEEKS = 2;

function accessFor(country: Country, passport: Passport, holds: { schengen: boolean; uk: boolean }) {
  const zone = zoneFor(country);
  let access = passport.rules[zone];
  if (access === "conditional") {
    access = holds.schengen || holds.uk ? "visa-free" : "visa-required";
  }
  if (zone === "schengen" && access === "visa-required" && holds.schengen) access = "visa-free";
  if (zone === "uk" && access === "visa-required" && holds.uk) access = "visa-free";
  if (zone === "cyprus" && access === "visa-required" && holds.schengen) access = "visa-free";
  return access;
}

/** Best (fastest) route to a country across the passports the traveller holds. */
export function leadTime(
  country: Country,
  travellerPassports: Passport[],
  holds: { schengen: boolean; uk: boolean },
): LeadTime {
  const options = travellerPassports.map((p) => {
    const access = accessFor(country, p, holds);
    if (access === "visa-free") {
      return {
        access,
        weeks: 0,
        waitWeeks: 0,
        decisionWeeks: 0,
        bufferWeeks: 0,
        passportId: p.id,
      };
    }
    if (access === "e-visa") {
      return {
        access,
        weeks: 1,
        waitWeeks: 0,
        decisionWeeks: 0.5,
        bufferWeeks: 0.5,
        passportId: p.id,
      };
    }
    const waitWeeks = Math.round(worstCaseWeeks(country.appointmentWait) * 10) / 10;
    const decisionWeeks = Math.round(worstCaseWeeks(country.processingTime) * 10) / 10;
    return {
      access,
      weeks: Math.ceil(waitWeeks + decisionWeeks + BUFFER_WEEKS),
      waitWeeks,
      decisionWeeks,
      bufferWeeks: BUFFER_WEEKS,
      passportId: p.id,
    } as LeadTime;
  });

  options.sort((a, b) => a.weeks - b.weeks);
  return options[0] as LeadTime;
}

export const addWeeks = (from: Date, weeks: number) =>
  new Date(from.getTime() + weeks * 7 * 24 * 60 * 60 * 1000);

export const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export interface PlanStep {
  date: Date;
  title: string;
  detail: string;
}

/** Back-plan a trip from the departure date. */
export function backPlan(country: Country, lt: LeadTime, departure: Date): PlanStep[] {
  if (lt.weeks === 0) {
    return [
      {
        date: departure,
        title: "Travel",
        detail: `No visa to apply for. Carry your passport, I-20 with a valid travel signature and your I-94. ${country.applyWindow}`,
      },
    ];
  }
  if (lt.access === "e-visa") {
    return [
      {
        date: addWeeks(departure, -2),
        title: "Apply online",
        detail: "The permit is usually issued within hours, but leave room for a manual check.",
      },
      { date: departure, title: "Travel", detail: "Carry a printout of the approval." },
    ];
  }
  const submit = addWeeks(departure, -(lt.decisionWeeks + lt.bufferWeeks / 2));
  const book = addWeeks(submit, -lt.waitWeeks);
  const start = addWeeks(book, -1);
  return [
    {
      date: start,
      title: "Start the file",
      detail:
        "Confirm which country gets the most nights, check your consulate jurisdiction, and ask your DSO for an I-20 travel signature.",
    },
    {
      date: book,
      title: "Book the appointment",
      detail: `Slots are the bottleneck. Observed wait: ${country.appointmentWait}.`,
    },
    {
      date: submit,
      title: "Lodge the application and give biometrics",
      detail: `Decision window: ${country.processingTime}.`,
    },
    {
      date: addWeeks(departure, -lt.bufferWeeks / 2),
      title: "Passport back",
      detail: "Check the sticker: entries, validity dates and duration of stay.",
    },
    { date: departure, title: "Departure", detail: "Travel documents in hand luggage." },
  ];
}
