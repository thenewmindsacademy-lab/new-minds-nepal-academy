import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Instagram, Mail, MapPin, BadgeCheck, Sprout } from "lucide-react";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export const EMAIL = "hello@newmindsacademy.org.np";
export const INSTAGRAM = "https://instagram.com/newmindsacademy";
export const TIKTOK = "https://tiktok.com/@newmindsacademy";

export function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.6c.27 0 .53.04.77.12V9.77a5.7 5.7 0 1 0 4.91 5.63V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48Z" />
    </svg>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="New Minds Academy home">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
        <Sprout className="h-5 w-5" />
      </span>
      <span className="font-display text-[15px] font-bold leading-tight text-heading">
        New Minds<span className="block text-xs font-medium text-muted-foreground">Academy</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 md:px-6">
        <Logo />
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-heading"
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/get-involved" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
          Join a Program
        </Link>
        <button
          className="grid h-10 w-10 place-items-center rounded-full text-heading md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-4 animate-in fade-in slide-in-from-top-2 md:hidden">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-medium text-heading"
                  activeProps={{ className: "bg-secondary" }}
                  activeOptions={{ exact: true }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/get-involved" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
            Join a Program
          </Link>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 pt-20">
      <div className="glass mx-auto grid max-w-6xl gap-10 rounded-3xl p-8 md:grid-cols-4 md:p-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            A non-profit nurturing mindfulness, confidence and leadership in Nepal's young people.
          </p>
          <span className="badge-sand mt-5">
            <BadgeCheck className="h-3.5 w-3.5" /> NGO Reg. No. — pending (placeholder)
          </span>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-primary">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Connect</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" />{EMAIL}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />Gokarneshwor, Kathmandu, Nepal</li>
          </ul>
          <div className="mt-5 flex gap-2">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="btn-glass !p-2.5"><Instagram className="h-5 w-5" /></a>
            <a href={TIKTOK} target="_blank" rel="noreferrer" aria-label="TikTok" className="btn-glass !p-2.5"><TikTokIcon /></a>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-xs">© {new Date().getFullYear()} New Minds Academy · newmindsacademy.org.np</p>
    </footer>
  );
}

export function Blobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob blob-sage left-[-10%] top-[-5%] h-[28rem] w-[28rem]" />
      <div className="blob blob-mist right-[-8%] top-[20%] h-[32rem] w-[32rem]" style={{ animationDelay: "-8s" }} />
      <div className="blob blob-sand bottom-[-10%] left-[25%] h-[24rem] w-[24rem]" style={{ animationDelay: "-15s" }} />
    </div>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-12 pt-20 text-center md:pt-28">
      <span className="badge-sand">{eyebrow}</span>
      <h1 className="mt-5 text-4xl font-bold md:text-5xl">{title}</h1>
      {children && <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed">{children}</p>}
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
