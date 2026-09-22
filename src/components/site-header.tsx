import { Link, useNavigate } from "@tanstack/react-router";

import { useAuth } from "@/hooks/use-auth";

export function SiteHeader() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/", replace: true });
  };

  return (
    <header className="border-b border-border bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold tracking-tight">Visa Desk</span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Europe / F-1
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{ className: "bg-accent text-foreground" }}
          >
            Countries
          </Link>
          <Link
            to="/plan"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{ className: "bg-accent text-foreground" }}
          >
            My case
          </Link>
          <Link
            to="/compare"
            className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{ className: "bg-accent text-foreground" }}
          >
            Compare
          </Link>
          {user ? (
            <span className="ml-2 flex items-center gap-2">
              <span className="hidden max-w-[12rem] truncate text-xs text-muted-foreground sm:inline">
                {user.email}
              </span>
              <button
                type="button"
                onClick={handleSignOut}
                className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                Sign out
              </button>
            </span>
          ) : (
            <Link
              to="/auth"
              className="ml-2 rounded-md bg-ink px-3 py-1.5 text-paper transition-colors hover:bg-seal"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-paper">
      <div className="mx-auto max-w-5xl px-5 py-8 text-xs leading-relaxed text-muted-foreground">
        <p className="max-w-3xl">
          Guidance written for students living in the United States on an F-1 visa, reviewed
          September 2026. Consulate rules, fees and processing times change without notice — the
          official page linked on each country is always the authority. This site is not legal
          advice; check with your university's international student office before you travel.
        </p>
      </div>
    </footer>
  );
}
