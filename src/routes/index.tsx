import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-header";
import { countries, nonSchengenCount, schengenCount } from "@/data/countries";
import type { Bloc } from "@/data/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visa Desk — European visa guidance for F-1 students in the US" },
      {
        name: "description",
        content:
          "Pick a European country and get the visa steps, documents, fees and a realistic timeline, written for students on an F-1 visa in the United States.",
      },
      { property: "og:title", content: "Visa Desk — European visa guidance for F-1 students" },
      {
        property: "og:description",
        content:
          "Steps, documents and timelines for Schengen and non-Schengen Europe, written for F-1 students applying from the US.",
      },
    ],
  }),
  component: Index,
});

type Filter = "all" | Bloc | "waiver";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All countries" },
  { id: "schengen", label: `Schengen (${schengenCount})` },
  { id: "non-schengen", label: `Outside Schengen (${nonSchengenCount})` },
  { id: "waiver", label: "Possible without a new visa" },
];

function Index() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return countries.filter((c) => {
      const matchesQuery = !q || c.name.toLowerCase().includes(q) || c.blurb.toLowerCase().includes(q);
      const matchesFilter =
        filter === "all"
          ? true
          : filter === "waiver"
            ? c.need !== "visa-required"
            : c.bloc === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-5">
        <section className="paper-grain -mx-5 border-b border-border px-5 py-14 sm:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            For students on an F-1 visa in the United States
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.1] sm:text-5xl">
            Every European visa, one country at a time.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Pick a country and get the steps, the paperwork and an honest timeline — including the
            parts that only matter to you, like the travel signature on your I-20 and which
            consulate your state belongs to.
          </p>

          <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            <Fact label="Schengen countries" value={String(schengenCount)} note="One visa covers them all" />
            <Fact label="Outside Schengen" value={String(nonSchengenCount)} note="Separate rules each" />
            <Fact label="Typical lead time" value="8-14 wks" note="From first click to passport back" />
          </div>
        </section>

        <section className="py-10">
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-lg">Which country do you apply to?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              For a Schengen trip you apply to the country where you will spend the most nights. If
              the nights are equal, you apply to the country you enter the Schengen area through
              first. Applying to a country you barely visit — because its appointments were free —
              is called visa shopping and can get the visa refused or cancelled later.
            </p>
          </div>
        </section>

        <section className="pb-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a country"
              aria-label="Search a country"
              className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm outline-none ring-ring/40 placeholder:text-muted-foreground focus:ring-2 sm:max-w-xs"
            />
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                    filter === f.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-3 pb-12 sm:grid-cols-2">
          {visible.map((c) => (
            <Link
              key={c.slug}
              to="/country/$slug"
              params={{ slug: c.slug }}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-seal"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl leading-none">{c.flag}</span>
                  <h3 className="text-lg group-hover:text-seal">{c.name}</h3>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] uppercase tracking-wider ${
                    c.need === "visa-required"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-seal/20 text-seal-foreground"
                  }`}
                >
                  {c.need === "visa-required" ? "Visa needed" : "Waiver possible"}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
              <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-3 text-xs">
                <div>
                  <dt className="text-muted-foreground">Decision</dt>
                  <dd className="mt-0.5">{c.processingTime}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Fee</dt>
                  <dd className="mt-0.5">{c.fee}</dd>
                </div>
              </dl>
            </Link>
          ))}
          {visible.length === 0 && (
            <p className="text-sm text-muted-foreground">No country matches that search.</p>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Fact({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-lg border border-border bg-card px-4 py-3">
      <p className="font-display text-2xl">{value}</p>
      <p className="mt-1 text-xs font-medium">{label}</p>
      <p className="text-xs text-muted-foreground">{note}</p>
    </div>
  );
}
