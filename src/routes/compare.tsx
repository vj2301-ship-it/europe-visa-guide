import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-header";
import { countries } from "@/data/countries";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare European visa fees and waits — Visa Desk" },
      {
        name: "description",
        content:
          "Compare fees, decision times and appointment waits across European countries to decide where an F-1 student should lodge a visa application.",
      },
      { property: "og:title", content: "Compare European visa fees and waits" },
      {
        property: "og:description",
        content:
          "Side-by-side fees, decision times and appointment waits for Schengen and non-Schengen Europe.",
      },
    ],
  }),
  component: ComparePage,
});

const defaults = ["france", "italy", "netherlands"];

function ComparePage() {
  const [picked, setPicked] = useState<string[]>(defaults);

  const toggle = (slug: string) =>
    setPicked((p) => (p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug].slice(-6)));

  const rows = countries.filter((c) => picked.includes(c.slug));

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-10">
        <h1 className="text-4xl">Compare</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          If a trip could plausibly be routed through more than one country, compare the cost and
          the wait before you commit. Choose up to six. Remember that the country you apply to still
          has to be the one where you will spend the most nights.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {countries.map((c) => (
            <button
              key={c.slug}
              onClick={() => toggle(c.slug)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                picked.includes(c.slug)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {c.flag} {c.name}
            </button>
          ))}
        </div>

        {rows.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">Pick a country above to compare.</p>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-secondary text-left">
                  <Th>Country</Th>
                  <Th>Fee</Th>
                  <Th>Service fee</Th>
                  <Th>Decision</Th>
                  <Th>Appointment wait</Th>
                </tr>
              </thead>
              <tbody>
                {rows.map((c) => (
                  <tr key={c.slug} className="border-t border-border align-top">
                    <td className="px-4 py-3">
                      <Link
                        to="/country/$slug"
                        params={{ slug: c.slug }}
                        className="underline decoration-seal underline-offset-4 hover:text-seal"
                      >
                        {c.flag} {c.name}
                      </Link>
                      <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                        {c.bloc === "schengen" ? "Schengen" : "Outside Schengen"}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{c.fee}</td>
                    <td className="px-4 py-3 text-muted-foreground">{c.serviceFee ?? "—"}</td>
                    <td className="px-4 py-3 text-muted-foreground">{c.processingTime}</td>
                    <td className="px-4 py-3 text-muted-foreground">{c.appointmentWait}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
      {children}
    </th>
  );
}
