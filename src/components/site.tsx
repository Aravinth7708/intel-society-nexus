import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Linkedin, Twitter, Facebook, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo-mark.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/ai-course", label: "AI Course" },
  { to: "/membership", label: "Membership" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logo} alt="SCIS logo" width={40} height={40} className="h-10 w-10 object-contain" />
      <div className="leading-tight">
        <div className="font-display text-lg font-bold">SCIS</div>
        <div className="text-[11px] text-muted-foreground">Society for Cyber Intelligent Systems</div>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="hidden border-b bg-ink text-ink-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <span className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> In collaboration with EC-Council · Building a Culture of Security</span>
          <a href="mailto:info@societycis.org" className="flex items-center gap-1.5 hover:text-primary"><Mail className="h-3.5 w-3.5" /> info@societycis.org</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Brand />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/signin" className="text-sm font-semibold hover:text-primary">Sign In</Link>
          <Link to="/signup" className="btn-primary">Sign Up</Link>
        </div>
        <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 font-medium hover:bg-muted">{n.label}</Link>
            ))}
            <div className="mt-3 flex gap-3">
              <Link to="/signin" onClick={() => setOpen(false)} className="btn-outline flex-1">Sign In</Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="btn-primary flex-1">Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const badges = ["Foundation Knowledge", "Hands-on AI Tools", "Responsible AI Practices", "Expert Trainers", "Participation Certificate", "Future Opportunities"];
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 flex flex-wrap gap-2">
          {badges.map((b) => <span key={b} className="rounded-full border border-ink-foreground/15 px-3 py-1 text-xs">{b}</span>)}
        </div>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-background p-1.5"><img src={logo} alt="" width={36} height={36} className="h-9 w-9 object-contain" /></div>
              <div className="font-display text-lg font-bold">Society for Cyber Intelligent Systems</div>
            </div>
            <p className="mt-4 max-w-md text-sm opacity-70">Building a skilled, ethical community in cybersecurity, AI and emerging technologies.</p>
            <p className="mt-4 text-xs opacity-60">Reg S.No: 78/2025 · DARPAN (NGO): PY/2025/0684517</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {nav.slice(1).map((n) => <li key={n.to}><Link to={n.to} className="hover:text-primary">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Connect</h4>
            <a href="mailto:info@societycis.org" className="text-sm opacity-80 hover:text-primary">info@societycis.org</a>
            <div className="mt-4 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="rounded-full border border-ink-foreground/20 p-2 hover:border-primary hover:text-primary"><I className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-ink-foreground/10 pt-6 text-xs opacity-60">© {new Date().getFullYear()} SCIS. All rights reserved.</div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: ReactNode; text: string; image?: string }) {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden bg-ink">
      {image && <img src={image} alt="" width={1280} height={896} className="ken-burns absolute inset-0 h-full w-full object-cover opacity-50" />}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 text-ink-foreground">
        <span className="anim-up inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">{eyebrow}</span>
        <h1 className="anim-up delay-1 mt-5 max-w-3xl text-4xl font-bold md:text-6xl [&_.text-primary]:text-shine">{title}</h1>
        <p className="anim-up delay-2 mt-5 max-w-2xl text-lg opacity-85">{text}</p>
        <div className="anim-up delay-3 mt-6 h-1 w-24 rounded-full bg-primary" />
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-muted-foreground">{text}</p>}
    </div>
  );
}

export function RegisterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [done, setDone] = useState(false);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl bg-card p-6 shadow-card" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Register — Lifetime Membership</h3>
          <button onClick={onClose} aria-label="Close"><X className="h-5 w-5" /></button>
        </div>
        {done ? (
          <p className="mt-6 rounded-lg bg-primary-soft p-4 text-sm">Thanks! We've received your details. Payment link will be sent to your email.</p>
        ) : (
          <form className="mt-5 space-y-3" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input required className="field" placeholder="Full name" />
            <input required type="email" className="field" placeholder="Email" />
            <input required className="field" placeholder="Phone" />
            <input className="field" placeholder="College / Organisation" />
            <div className="rounded-lg border border-dashed p-3 text-xs text-muted-foreground">Secure payment gateway · ₹1,000 one-time</div>
            <button className="btn-primary w-full">Proceed to Pay ₹1,000</button>
          </form>
        )}
      </div>
    </div>
  );
}
