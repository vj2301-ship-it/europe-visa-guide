import type { Country, DocGroup, Step, TimelineItem } from "./types";

export const LAST_REVIEWED = "September 2026";

export const schengenSteps = (opts: {
  center: string;
  bookingHost: string;
}): Step[] => [
  {
    title: "Work out which country you apply to",
    when: "3-4 months before travel",
    detail:
      "You apply to the country where you will spend the most nights. If nights are equal across countries, apply to the country you enter the Schengen area through first. Applying to the wrong country is one of the most common reasons a file is refused at the counter.",
  },
  {
    title: "Check your consulate jurisdiction",
    when: "3-4 months before travel",
    detail:
      "Your US state of residence decides which consulate or visa centre can take your file. As an F-1 student that is normally the state your school is in. Confirm the jurisdiction before you book anything.",
  },
  {
    title: `Create an account and book the ${opts.center} appointment`,
    when: "As soon as slots open, up to 6 months ahead",
    detail: `Applications in the US are handled through ${opts.center} (${opts.bookingHost}). Slots are the bottleneck, not the decision. Book the appointment first and assemble documents around the date you get.`,
  },
  {
    title: "Fill in the Schengen application form",
    when: "4-6 weeks before the appointment",
    detail:
      "Complete the harmonised Schengen short-stay form online, print it, and sign it. Your purpose of travel is tourism, your sponsor is yourself (or a named sponsor with a letter), and your status in the US is student.",
  },
  {
    title: "Assemble the document pack",
    when: "3-4 weeks before the appointment",
    detail:
      "Book flights and accommodation (refundable or a reservation-only itinerary), buy travel medical insurance covering at least EUR 30,000, gather three to six months of bank statements, and get a fresh enrollment letter from your international student office.",
  },
  {
    title: "Get your I-20 travel signature",
    when: "3-4 weeks before the appointment",
    detail:
      "Ask your DSO to sign page 2 of your I-20 for travel. The signature must still be valid on the day you re-enter the United States — that is what protects your return, separate from the European visa itself.",
  },
  {
    title: "Attend the appointment and give biometrics",
    when: "On the appointment date",
    detail:
      "Bring originals plus one photocopy set. Fingerprints and a photo are taken unless you gave Schengen biometrics in the last 59 months. Pay the visa fee and the centre's service fee at the counter.",
  },
  {
    title: "Track and collect the passport",
    when: "1-4 weeks after submission",
    detail:
      "You can track the file online. Collect in person or pay for courier return. Check the sticker immediately: entries, validity dates, and duration of stay.",
  },
];

export const schengenTimeline = (
  processingWeeks: string,
  waitWeeks: string,
): TimelineItem[] => [
  {
    label: "16 weeks out",
    weeksBefore: 16,
    title: "Decide the trip and the main destination",
    detail: "Sketch the itinerary well enough to know which country gets the most nights.",
  },
  {
    label: "14 weeks out",
    weeksBefore: 14,
    title: "Open the appointment calendar",
    detail: `Slots can be released 6 months ahead. Current observed wait in the US: ${waitWeeks}.`,
  },
  {
    label: "8 weeks out",
    weeksBefore: 8,
    title: "Book flights, stays and insurance",
    detail: "Use refundable bookings or a reservation-only itinerary until the visa is issued.",
  },
  {
    label: "7 weeks out",
    weeksBefore: 7,
    title: "Collect school and bank paperwork",
    detail: "Enrollment letter, I-20 travel signature, and 3-6 months of statements.",
  },
  {
    label: "6 weeks out",
    weeksBefore: 6,
    title: "Submit at the visa centre",
    detail: `Biometrics and fee paid on the day. Official decision window: ${processingWeeks}.`,
  },
  {
    label: "3 weeks out",
    weeksBefore: 3,
    title: "Passport back",
    detail: "Most files return here. A file sent for extra checks can take up to 45 days.",
  },
  {
    label: "Departure",
    weeksBefore: 0,
    title: "Travel",
    detail:
      "Carry the passport, I-20 with a valid travel signature, insurance proof and your bookings in hand luggage.",
  },
];

export const schengenDocuments = (extra: string[] = []): DocGroup[] => [
  {
    group: "Identity and status",
    items: [
      "Passport valid at least 3 months beyond your return date, issued in the last 10 years, with 2 blank pages",
      "Copies of all previous visas and entry stamps",
      "Valid F-1 visa stamp in your passport",
      "Original I-20 with a travel signature valid on your date of re-entry to the US",
      "Most recent I-94 printout from the CBP website",
      "Enrollment verification letter from your university, dated within the last month",
    ],
  },
  {
    group: "The application itself",
    items: [
      "Completed and signed Schengen short-stay application form",
      "Two recent biometric photographs to Schengen specification (35 x 45 mm, white background)",
      "Cover letter explaining the trip, the dates, who pays, and that you will return to your studies",
    ],
  },
  {
    group: "Trip and money",
    items: [
      "Round-trip flight reservation covering entry to and exit from the Schengen area",
      "Accommodation booking for every night of the trip, or an invitation letter",
      "Day-by-day itinerary if you are visiting more than one country",
      "Travel medical insurance with at least EUR 30,000 coverage, valid in all Schengen states for the whole trip",
      "Bank statements for the last 3 to 6 months showing enough funds for the stay",
      "Sponsor letter plus the sponsor's statements if someone else is paying",
      ...extra,
    ],
  },
];

export const schengenNotes = (extra: string[] = []): string[] => [
  "The 90/180 rule applies across the whole Schengen area: at most 90 days of stay in any rolling 180-day window, counted across all member states together.",
  "A Schengen visa says nothing about getting back into the United States. Your re-entry depends on a valid F-1 stamp and a valid I-20 travel signature — check both before you book.",
  "If your F-1 visa stamp has expired you can still travel, but you will need a new stamp at a US consulate abroad before returning, which can take weeks. Most advisors suggest avoiding that during a short trip.",
  "Do not buy non-refundable flights before the visa is issued. Consulates accept reservations; they do not require paid tickets.",
  "ETIAS is not in operation as of September 2026 and has slipped past its 2026 target. It would not replace your visa in any case — it is for nationalities that travel to Europe visa-free.",
  "Consulates apply the fee in dollars at their own exchange rate, and several update it monthly or quarterly. Check the current figure on the day you pay.",
  ...extra,
];

type SchengenInput = Pick<
  Country,
  "slug" | "name" | "flag" | "blurb" | "processingTime" | "appointmentWait" | "officialSource"
> & {
  center: string;
  bookingHost: string;
  bookingUrl: string;
  serviceFee: string;
  extraDocs?: string[];
  extraNotes?: string[];
  extraLinks?: { label: string; url: string }[];
  fee?: string;
  applyWindow?: string;
};

export function makeSchengenCountry(input: SchengenInput): Country {
  return {
    slug: input.slug,
    name: input.name,
    flag: input.flag,
    bloc: "schengen",
    need: "visa-required",
    blurb: input.blurb,
    visaType: "Schengen short-stay visa (Type C), tourism",
    fee: input.fee ?? "EUR 90 for adults, charged in dollars at about USD 97-105",
    serviceFee: input.serviceFee,
    processingTime: input.processingTime,
    appointmentWait: input.appointmentWait,
    applyWindow:
      input.applyWindow ?? "Up to 6 months before travel, and no later than 15 days before",
    biometrics:
      "Required in person, unless you gave Schengen fingerprints in the last 59 months",
    steps: schengenSteps({ center: input.center, bookingHost: input.bookingHost }),
    timeline: schengenTimeline(input.processingTime, input.appointmentWait),
    documents: schengenDocuments(input.extraDocs),
    links: [
      { label: `Book an appointment (${input.center})`, url: input.bookingUrl },
      { label: "Official visa information", url: input.officialSource },
      ...(input.extraLinks ?? []),
    ],
    notes: schengenNotes(input.extraNotes),
    lastReviewed: LAST_REVIEWED,
    officialSource: input.officialSource,
  };
}
