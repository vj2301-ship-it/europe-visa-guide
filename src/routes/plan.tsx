import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-header";
import { countries } from "@/data/countries";
import { accessLabel, passportById, passports, type Passport } from "@/data/passports";
import { addWeeks, backPlan, fmtDate, leadTime } from "@/lib/lead-time";

export const Route = createFileRoute("/plan")({
  head: () => ({
    meta: [
      { title: "My case — personal Europe visa planner for F-1 students" },
      {
        name: "description",
        content:
          "Enter your passport, your US status and your trip dates to see which European countries you can enter soonest and when to start each visa application.",
      },
      { property: "og:title", content: "My case — personal Europe visa planner" },
      {
        property: "og:description",
        content:
          "Your passports, your status, your dates: earliest entry inside and outside Schengen, plus a back-planned visa timeline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PlanPage,
});

const STORAGE_KEY = "visa-desk-case";

interface CaseState {
  name: string;
  passportA: string;
  passportB: string;
  status: string;
  holdsSchengen: boolean;
  holdsUk: boolean;
  departure: string;
  tripCountry: string;
}

const initial: CaseState = {
  name: "",
  passportA: "",
  passportB: "",
  status: "F-1 student",
  holdsSchengen: false,
  holdsUk: false,
  departure: "",
  tripCountry: "united-kingdom",
};

const statuses = ["F-1 student", "J-1 exchange visitor", "H-1B worker", "Green card holder", "Other"];

function PlanPage() {
  const [form, setForm] = useState<CaseState>(initial);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = { ...initial, ...JSON.parse(raw) };
        if (!passportById(saved.passportA)) saved.passportA = "";
        if (saved.passportB && !passportById(saved.passportB)) saved.passportB = "";
        setForm(saved);
      }
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form, loaded]);

  const set = <K extends keyof CaseState>(k: K, v: CaseState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const held: Passport[] = useMemo(
    () =>
      [passportById(form.passportA), form.passportB ? passportById(form.passportB) : undefined]
        .filter(Boolean) as Passport[],
    [form.passportA, form.passportB],
  );

  const holds = { schengen: form.holdsSchengen, uk: form.holdsUk };
  const today = useMemo(() => new Date(), []);

  const ranked = useMemo(
    () =>
      countries
        .map((c) => ({ country: c, lt: leadTime(c, held, holds) }))
        .sort((a, b) => a.lt.weeks - b.lt.weeks || a.country.name.localeCompare(b.country.name)),
    [held, form.holdsSchengen, form.holdsUk],
  );

  const schengen = ranked.filter((r) => r.country.bloc === "schengen").slice(0, 5);
  const outside = ranked.filter((r) => r.country.bloc !== "schengen").slice(0, 5);

  const trip = countries.find((c) => c.slug === form.tripCountry) ?? countries[0]!;
  const tripLt = leadTime(trip, held, holds);
  const departure = form.departure ? new Date(`${form.departure}T00:00:00`) : null;
  const earliest = addWeeks(today, tripLt.weeks);
  const tooLate = departure ? departure < earliest : false;
  const planSteps = backPlan(trip, tripLt, departure && !tooLate ? departure : earliest);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-10">
        <h1 className="text-4xl">My case</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Your passport decides almost everything. Tell us which one (or two) you hold, what you are
          on in the United States, and when you want to travel — you will get the countries you can
          reach soonest and a date-by-date plan for the trip you have in mind. Nothing leaves your
          browser.
        </p>

        {/* ---------------- form ---------------- */}
        <section className="mt-8 grid gap-5 rounded-xl border border-border bg-card p-5 sm:grid-cols-2">
          <Field label="Your name">
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="For e.g. Ben Shelton"
              maxLength={80}
              className="w-full rounded-md border border-border bg-paper px-3 py-2 text-sm outline-none focus:border-seal"
            />
          </Field>

          <Field label="Status in the US">
            <Select value={form.status} onChange={(v) => set("status", v)}>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </Field>

          <Field label="Passport">
            <Select value={form.passportA} onChange={(v) => set("passportA", v)}>
              <option value="">Please select your passport country</option>
              {passports.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.flag} {p.label}
                </option>
              ))}
            </Select>
          </Field>

          <Field label="Second passport (dual citizenship)">
            <Select value={form.passportB} onChange={(v) => set("passportB", v)}>
              <option value="">None</option>
              {passports
                .filter((p) => p.id !== form.passportA)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.flag} {p.label}
                  </option>
                ))}
            </Select>
          </Field>

          <Field label="Visas you already hold">
            <div className="flex flex-wrap gap-4 pt-1 text-sm">
              <Check
                checked={form.holdsSchengen}
                onChange={(v) => set("holdsSchengen", v)}
                label="Valid multi-entry Schengen visa"
              />
              <Check
                checked={form.holdsUk}
                onChange={(v) => set("holdsUk", v)}
                label="Valid UK visa"
              />
            </div>
          </Field>

          <Field label="Planned departure (optional)">
            <input
              type="date"
              value={form.departure}
              onChange={(e) => set("departure", e.target.value)}
              className="w-full rounded-md border border-border bg-paper px-3 py-2 text-sm outline-none focus:border-seal"
            />
          </Field>
        </section>

        {/* ---------------- earliest entry ---------------- */}
        <h2 className="mt-12 text-2xl">
          {form.name ? `${form.name}, where you can go soonest` : "Where you can go soonest"}
        </h2>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <RankList title="Inside Schengen" rows={schengen} today={today} />
          <RankList title="Outside Schengen" rows={outside} today={today} />
        </div>

        {/* ---------------- trip timeline ---------------- */}
        <h2 className="mt-12 text-2xl">Plan a trip</h2>
        <div className="mt-4 flex flex-wrap items-end gap-4">
          <Field label="Country">
            <Select value={form.tripCountry} onChange={(v) => set("tripCountry", v)}>
              {countries.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.flag} {c.name}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <div className="mt-5 rounded-xl border border-border bg-card p-5">
          <p className="text-sm">
            <span className="font-medium">
              {trip.flag} {trip.name}
            </span>{" "}
            — {accessLabel[tripLt.access]} on your{" "}
            {passportById(tripLt.passportId)?.label ?? "passport"} passport.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {tripLt.weeks === 0
              ? "You can leave as soon as you have a ticket."
              : `Allow about ${tripLt.weeks} weeks from today. Earliest realistic departure: ${fmtDate(earliest)}.`}
          </p>
          {departure && tooLate && (
            <p className="mt-3 rounded-md border border-seal/40 bg-seal/10 px-3 py-2 text-sm">
              {fmtDate(departure)} is too soon for this country. The plan below uses{" "}
              {fmtDate(earliest)} instead.
            </p>
          )}

          <ol className="mt-6 space-y-4">
            {planSteps.map((s, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-28 shrink-0 text-xs uppercase tracking-wider text-muted-foreground">
                  {fmtDate(s.date)}
                </div>
                <div>
                  <p className="text-sm font-medium">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <Link
            to="/country/$slug"
            params={{ slug: trip.slug }}
            className="mt-6 inline-block text-sm underline decoration-seal underline-offset-4 hover:text-seal"
          >
            Full requirements for {trip.name} →
          </Link>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Lead times are estimates built from the appointment waits and decision windows recorded in
          September 2026, plus two weeks of preparation. Passport rules are summarised for the most
          common cases — the consulate page linked on each country is always the authority.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}

function RankList({
  title,
  rows,
  today,
}: {
  title: string;
  rows: { country: (typeof countries)[number]; lt: ReturnType<typeof leadTime> }[];
  today: Date;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {rows.map(({ country, lt }) => (
          <li key={country.slug} className="flex items-start justify-between gap-4">
            <div>
              <Link
                to="/country/$slug"
                params={{ slug: country.slug }}
                className="text-sm underline decoration-seal underline-offset-4 hover:text-seal"
              >
                {country.flag} {country.name}
              </Link>
              <p className="mt-0.5 text-xs text-muted-foreground">{accessLabel[lt.access]}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-sm">{lt.weeks === 0 ? "Go now" : `~${lt.weeks} wks`}</p>
              <p className="text-xs text-muted-foreground">{fmtDate(addWeeks(today, lt.weeks))}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Select({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-border bg-paper px-3 py-2 text-sm outline-none focus:border-seal"
    >
      {children}
    </select>
  );
}

function Check({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-[var(--seal)]"
      />
      <span className="text-sm text-muted-foreground">{label}</span>
    </span>
  );
}
