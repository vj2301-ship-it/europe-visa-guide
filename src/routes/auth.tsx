import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-header";
import { useAuth } from "@/hooks/use-auth";
import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Visa Desk case tracker" },
      {
        name: "description",
        content:
          "Sign in to Visa Desk to save and track your European visa cases from the My case planner.",
      },
      { property: "og:title", content: "Sign in — Visa Desk" },
      {
        property: "og:description",
        content: "Sign in to save and track your European visa cases.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const { session, loading } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!loading && session) navigate({ to: "/plan", replace: true });
  }, [loading, session, navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setNotice("");
    setBusy(true);
    try {
      if (mode === "signup") {
        const { data, error: err } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/plan` },
        });
        if (err) throw err;
        if (!data.session) {
          setNotice("Check your inbox and click the confirmation link to finish signing up.");
        }
      } else {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) throw err;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const google = async () => {
    setError("");
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setError("Google sign-in did not complete. Please try again.");
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    setBusy(false);
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-md px-5 py-16">
        <h1 className="text-3xl">{mode === "signin" ? "Sign in" : "Create an account"}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Signing in unlocks the tracked cases list on the My case tab. The planner itself stays
          open to everyone.
        </p>

        <div className="mt-8 rounded-xl border border-border bg-card p-5">
          <div className="flex gap-1 rounded-md bg-accent p-1 text-sm">
            {(["signin", "signup"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => {
                  setMode(m);
                  setError("");
                  setNotice("");
                }}
                className={`flex-1 rounded px-3 py-1.5 transition ${
                  mode === m ? "bg-paper text-foreground" : "text-muted-foreground"
                }`}
              >
                {m === "signin" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="mt-5 space-y-4">
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-border bg-paper px-3 py-2 text-sm outline-none focus:border-seal"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Password
              </span>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-border bg-paper px-3 py-2 text-sm outline-none focus:border-seal"
              />
            </label>

            {error && (
              <p className="rounded-md border border-seal/40 bg-seal/10 px-3 py-2 text-sm">
                {error}
              </p>
            )}
            {notice && (
              <p className="rounded-md border border-border bg-accent px-3 py-2 text-sm">
                {notice}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-md bg-ink px-4 py-2.5 text-sm text-paper transition hover:bg-seal disabled:opacity-60"
            >
              {mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or
            <span className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            onClick={google}
            disabled={busy}
            className="w-full rounded-md border border-border bg-paper px-4 py-2.5 text-sm transition hover:bg-accent disabled:opacity-60"
          >
            Continue with Google
          </button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
