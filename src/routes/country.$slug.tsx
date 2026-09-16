import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { SiteFooter, SiteHeader } from "@/components/site-header";
import { countryBySlug } from "@/data/countries";

export const Route = createFileRoute("/country/$slug")({
  loader: ({ params }) => {
    const country = countryBySlug(params.slug);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Country not found — Visa Desk" }, { name: "robots", content: "noindex" }],
      };
    }
    const { country } = loaderData;
    const title = `${country.name} visa guide for F-1 students — Visa Desk`;
    const description = `${country.name}: ${country.blurb} Steps, documents, fees and a realistic timeline for students applying from the US.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: CountryNotFound,
  component: CountryPage,
});

function CountryNotFound() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h1 className="text-3xl">We don't have a guide for that country</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Go back to the list and pick a destination.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          All countries
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function CountryPage() {
  const { country: c } = Route.useLoaderData();
  const maxWeeks = Math.max(...c.timeline.map((t) => t.weeksBefore), 1);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-5 pb-8">
        <nav className="pt-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            All countries
          </Link>
          <span className="px-2">/</span>
          <span>{c.name}</span>
        </nav>

        <header className="border-b border-border py-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl leading-none">{c.flag}</span>
            <div>
              <h1 className="text-4xl">{c.name}</h1>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {c.bloc === "schengen" ? "Schengen area" : "Outside the Schengen area"}
              </p>
            </div>
          </div>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.blurb}</p>
          {c.waiver && (
            <p className="mt-4 rounded-lg border border-seal/40 bg-seal/10 px-4 py-3 text-sm leading-relaxed">
              <span className="font-medium">You may not need a new visa. </span>
              {c.waiver}.
            </p>
          )}
        </header>

        <section className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          <Snapshot label="Visa" value={c.visaType} />
          <Snapshot label="Government fee" value={c.fee} />
          <Snapshot label="Decision time" value={c.processingTime} />
          <Snapshot label="Appointment wait" value={c.appointmentWait} />
          <Snapshot label="How early you can apply" value={c.applyWindow} />
          <Snapshot label="Biometrics" value={c.biometrics} />
          {c.serviceFee && <Snapshot label="Service fee" value={c.serviceFee} />}
        </section>

        <Section title="The steps" subtitle="In the order you should actually do them.">
          <ol className="space-y-5">
            {c.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-seal bg-seal/15 font-display text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base">{s.title}</h3>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-seal-foreground/70">
                    {s.when}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="The timeline" subtitle="Counting backwards from the day you fly.">
          <ul className="relative space-y-6 border-l border-border pl-6">
            {c.timeline.map((t) => (
              <li key={t.label} className="relative">
                <span
                  className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-seal"
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-display text-sm">{t.label}</span>
                  <span className="text-[11px] text-muted-foreground">
                    {t.weeksBefore === 0 ? "day of travel" : `${t.weeksBefore} weeks before`}
                  </span>
                </div>
                <p className="mt-1 text-base">{t.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-seal/60"
                    style={{ width: `${100 - (t.weeksBefore / maxWeeks) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="What to bring" subtitle="Originals plus one photocopy set unless told otherwise.">
          <div className="space-y-6">
            {c.documents.map((g) => (
              <div key={g.group}>
                <h3 className="text-base">{g.group}</h3>
                <ul className="mt-3 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-seal" aria-hidden />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Worth knowing" subtitle="The parts people get wrong.">
          <ul className="space-y-3">
            {c.notes.map((n) => (
              <li
                key={n}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm leading-relaxed text-muted-foreground"
              >
                {n}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Official links" subtitle="Always the final word.">
          <ul className="space-y-2">
            {c.links.map((l) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm underline decoration-seal underline-offset-4 hover:text-seal"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">Last reviewed: {c.lastReviewed}.</p>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Snapshot({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card px-4 py-3">
      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm leading-relaxed">{value}</dd>
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-10">
      <h2 className="text-2xl">{title}</h2>
      <p className="mb-6 mt-1 text-sm text-muted-foreground">{subtitle}</p>
      {children}
    </section>
  );
}
