# Europe Visa Guide for F1 Students

A browsing app where you pick a European country and instantly see the visa rules, the step-by-step process, and a realistic timeline — written specifically for F1 students applying from inside the United States.

## What you get

**Home page**
- Short intro explaining the Schengen vs non-Schengen distinction and the "main destination" rule that decides which consulate you apply to.
- Search box plus a grid of country cards (flag, country name, Schengen/non-Schengen tag, typical processing time).
- Filters: Schengen only, non-Schengen, visa-free-for-some-passports.

**Country page** (one per country)
- Snapshot bar: visa type, fee, typical processing time, how early you may apply, biometrics required yes/no.
- Steps: a numbered walkthrough from "work out your main destination" through appointment booking, document prep, biometrics, submission, and passport return.
- Timeline: a visual track showing how many weeks before travel each step should happen, with the realistic and worst-case ranges.
- Documents checklist: the generic Schengen set plus the F1-specific items (I-20 with valid travel signature, F1 visa stamp, SEVIS status proof, enrollment letter, financial proof, travel insurance minimum).
- Appointment and official links: consulate/visa-center booking pages for US applicants.
- Notes and gotchas: e.g. travel signature validity, re-entry to the US, blank passport pages, insurance coverage minimums.

**Compare page**
- Side-by-side table of processing time, fee, and appointment wait across the countries you pick — useful when a trip could be routed through more than one entry country.

## Countries covered

All 29 Schengen states, plus UK, Ireland, and other commonly visited non-Schengen Europe (Croatia is in Schengen; also Romania, Bulgaria, Cyprus, Turkey, Serbia, Albania, Montenegro, Bosnia, North Macedonia, Georgia, Moldova, Ukraine excluded or included as relevant).

## Content

Researched from official consulate and visa-center sources for applicants residing in the US, then written into the app as structured data. Every country entry carries a "last reviewed" date and a link to the official source, with a clear disclaimer that rules change and the consulate page is authoritative.

## Design direction

Calm, document-like and trustworthy rather than flashy: a deep navy and warm-paper palette with a single amber accent for timeline markers, a serif display face for headings against a clean sans for body text, generous whitespace, and a stepped timeline as the signature visual element. Fully responsive so it works on a phone at the consulate.

## Technical notes

- Static country data in typed TypeScript modules (`src/data/countries/*`), one file per country, so entries are easy to update.
- A route per country (`/country/$slug`) with its own title/description metadata for sharing and search; plus `/` and `/compare`.
- No accounts or database in this version — everything is public and instant. Saved trips and per-application status tracking can be layered on later with logins.

## Build order

1. Data model, country registry, and design system.
2. Home page with search/filters and country cards.
3. Country detail page: snapshot, steps, timeline, checklist, links.
4. Research and fill content for Schengen states, then UK/Ireland/other.
5. Compare page and final polish, metadata, mobile pass.
