# My Case — a personal visa planner tab

A new tab, "My case", where you enter your details once and get a ranked answer to
"where can I go soonest, and when do I have to start?"

## What you fill in

- Your name (used only to label the summary, stored on your own device)
- Passport(s) — pick one or two, so dual citizenship is handled
- Your status in the US (F-1 student is the default; also J-1, H-1B, green card, other)
- Whether you already hold a valid Schengen visa, and whether you hold a valid UK visa
- Optional: your planned departure date

Nothing is sent anywhere. The entry is saved in your browser so the tab remembers you.

## What you get back

**1. Your passport verdict per country.** Each passport carries its own rules, so an
Indian passport, a Canadian passport and a Saudi passport give different answers for the
same country. Three outcomes: visa-free, visa needed, or already covered by a visa you
hold. With two passports, the easier of the two wins and the page says which passport to
travel on.

**2. Earliest entry inside Schengen.** The Schengen countries you can reach soonest,
ranked by total lead time, with the earliest realistic departure date shown as a date.

**3. Earliest entry outside Schengen.** The same ranking for the UK, Ireland, Türkiye,
the Balkans, Georgia and the rest.

**4. Trip timeline.** Pick a country and a departure date and get a back-planned schedule:
the day you should start, the day to book the appointment, the day to lodge, and the day
the passport should come back — plus a clear verdict such as "start now", "tight", or
"too late for this date, earliest realistic departure is 12 May".

Lead time is built from the appointment wait plus the decision window already recorded for
each country, with a safety buffer. A visa-free passport shows a lead time of zero and just
the entry conditions.

## Example

An Indian passport, F-1 in the US, no visa in hand, wants to go in 3 weeks:
Serbia and Georgia are enterable now; the UK needs about 5 weeks, so a 3-week trip date is
flagged as too late; France needs about 9 weeks. A Canadian passport, same student, is
visa-free nearly everywhere and the page says to travel on that passport.

## Technical notes

- New route `src/routes/plan.tsx` plus a nav link in `src/components/site-header.tsx`.
- New `src/data/passports.ts`: a nationality table (India, Canada, Saudi Arabia, USA, UK,
  EU/EEA, China, Nigeria, Pakistan, Bangladesh, Brazil, Mexico, plus "other visa-required"
  and "other visa-free") mapping each to a rule per bloc — Schengen, UK, Ireland, and the
  handful of countries with passport-specific waivers already in `countries.ts`.
- New `src/lib/lead-time.ts`: parses the existing `appointmentWait` and `processingTime`
  strings into a worst-case week count, adds a 2-week preparation buffer, and exposes
  `earliestDeparture(country, from)` and `backPlan(country, departureDate)`.
- Form state in `useState`, persisted to `localStorage` under one key, read in `useEffect`
  so SSR stays clean. No accounts, no database.
- Existing country data is not rewritten; the new layer reads it.
- Numbers stay estimates drawn from the September 2026 review, each result links to the
  country page and its official source.
