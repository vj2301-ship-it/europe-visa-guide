# Sign-in for the tracked cases

The "My case" planner stays open to everyone. Saving a case and seeing the tracked
list below it require signing in.

## What changes for a visitor

- The form, the "where you can go soonest" lists and the trip timeline work exactly
  as they do today, signed in or not.
- Where the "Submit case & start a new one" button sits, a signed-out visitor sees a
  short note and a "Sign in to track cases" button instead.
- The Tracked cases section only appears once signed in.
- The header shows "Sign in" when signed out, and the account's email plus "Sign out"
  when signed in.

## Signing in

A new "Sign in" page with two tabs — create an account and sign in — using an email
address and password, plus a "Continue with Google" button. After signing in you land
back on "My case" with the tracker visible. No name, avatar or other profile details
are collected.

## Where cases are stored

Cases keep living in this browser, as they do today. Signing in is a gate on who can
see and add them on this device; it does not sync them between devices. If you later
want the list to follow you across devices, that is a separate change.

## Technical notes

- Enable Lovable Cloud for the auth service; email/password enabled, Google added
  through the social-login configuration. No tables and no row-level data — the
  tracker stays on `localStorage` under `visa-desk-cases`.
- New `src/routes/auth.tsx`: sign-up / sign-in form, `signUp` with
  `emailRedirectTo: window.location.origin`, `signInWithPassword`, and
  `signInWithOAuth` for Google, redirecting to `/plan` on success; redirects away if
  already signed in.
- New `src/hooks/use-auth.ts`: holds session state via `onAuthStateChange` plus an
  initial `getSession`, exposes `session`, `user`, `loading`, `signOut`.
- `src/routes/plan.tsx` stays a single public route. The submit button and the
  Tracked cases section render only when a session exists; otherwise a sign-in prompt
  linking to `/auth`. Everything above that is untouched.
- `src/components/site-header.tsx` gains the session-aware sign-in / sign-out
  affordance; sign-out clears query cache and navigates to `/`.
- `/auth` gets its own head metadata.
