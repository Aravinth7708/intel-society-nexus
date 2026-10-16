import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Gift, QrCode, ShieldCheck, Infinity as InfinityIcon, X } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import { RegisterModal } from "@/components/site";
import { Reveal } from "@/components/motion";
import { img } from "@/lib/images";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Lifetime Membership ₹1,000 — SCIS" },
      { name: "description", content: "Become a lifetime SCIS member for ₹1,000 and get the Introduction to AI course free with 6 months iLab." },
      { property: "og:title", content: "SCIS Lifetime Membership" },
      { property: "og:description", content: "₹1,000 one-time with a free AI course and 6 months iLab." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Membership,
});

const benefits = [
  "Lifetime member of SCIS — no renewals",
  "FREE Introduction to AI course (EC-Council)",
  "6 months iLab hands-on access",
  "Official Certificate of Participation",
  "Priority access to events, webinars & CTFs",
  "Member network, mentors and job leads",
];
const compare = [
  ["Introduction to AI course", true, false],
  ["6 months iLab access", true, false],
  ["EC-Council certificate", true, false],
  ["Community events", true, true],
  ["Mentor network", true, false],
  ["Newsletter & resources", true, true],
] as const;
const faqs = [
  ["Is the membership really lifetime?", "Yes. You pay ₹1,000 once and remain a member for life."],
  ["How do I access the free AI course?", "After registration you receive batch details and iLab login by email."],
  ["Can institutions join?", "Yes — contact us for institutional and group partnerships."],
];

function Membership() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Split hero */}
      <section className="grid lg:grid-cols-2">
        <div className="flex items-center px-6 py-20 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-16">
          <div>
            <span className="anim-up inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground"><Gift className="h-3.5 w-3.5" /> Combo offer</span>
            <h1 className="anim-up delay-1 mt-5 text-5xl font-bold leading-tight md:text-6xl">One payment. <br /><span className="text-shine">Lifetime</span> of learning.</h1>
            <p className="anim-up delay-2 mt-6 max-w-lg text-lg text-muted-foreground">Join SCIS once for ₹1,000 and get our EC-Council Introduction to AI course completely free.</p>
            <div className="anim-up delay-3 mt-8 flex gap-8">
              <div><div className="font-display text-3xl font-bold">₹1,000</div><div className="text-sm text-muted-foreground">one-time</div></div>
              <div className="border-l pl-8"><div className="flex items-center gap-1 font-display text-3xl font-bold"><InfinityIcon className="h-8 w-8 text-primary" /></div><div className="text-sm text-muted-foreground">validity</div></div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <img src={img.students} alt="Students celebrating" className="absolute inset-0 h-full w-full object-cover" />
          <div className="float-y absolute bottom-10 left-10 rounded-2xl bg-card p-5 shadow-card"><ShieldCheck className="h-7 w-7 text-primary" /><div className="mt-2 font-bold">Registered NGO</div><div className="text-xs text-muted-foreground">DARPAN PY/2025/0684517</div></div>
        </div>
      </section>

      {/* Pricing card + QR */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-28 md:grid-cols-[1.4fr_1fr]">
        <Reveal dir="left" className="relative overflow-hidden rounded-[2rem] border-2 border-primary bg-card p-10 shadow-red">
          <div className="absolute right-0 top-0 rounded-bl-3xl bg-primary px-5 py-2 text-xs font-bold uppercase text-primary-foreground">Best value</div>
          <img src={logo} alt="SCIS seal" width={64} height={64} className="h-16 w-16 object-contain" />
          <h2 className="mt-4 text-2xl font-bold">SCIS Lifetime Membership</h2>
          <div className="mt-2 font-display text-6xl font-bold">₹1,000 <span className="text-base font-medium text-muted-foreground">one-time</span></div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => <li key={b} className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{b}</li>)}
          </ul>
          <button onClick={() => setOpen(true)} className="btn-primary mt-10 w-full">Register Now</button>
        </Reveal>
        <Reveal dir="right" className="flex flex-col justify-between rounded-[2rem] bg-ink p-10 text-center text-ink-foreground">
          <div><h3 className="text-xl font-bold">Register on mobile</h3><p className="mt-2 text-sm opacity-70">Scan the code with your phone camera</p></div>
          <div className="mx-auto my-8 rounded-2xl bg-background p-6"><QrCode className="h-36 w-36 text-foreground" /></div>
          <p className="text-xs opacity-60">Secure payment · Instant confirmation</p>
        </Reveal>
      </section>

      {/* Comparison table */}
      <section className="bg-secondary py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="text-center"><h2 className="text-4xl font-bold">Member vs Guest</h2><p className="mt-3 text-muted-foreground">See what you unlock with lifetime membership.</p></Reveal>
          <Reveal className="mt-12 overflow-hidden rounded-3xl border bg-card shadow-card">
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-ink px-6 py-4 text-sm font-semibold text-ink-foreground"><span>Benefit</span><span className="text-center text-primary">Member</span><span className="text-center">Guest</span></div>
            {compare.map(([t, m, g]) => (
              <div key={t} className="grid grid-cols-[2fr_1fr_1fr] border-t px-6 py-4 text-sm">
                <span>{t}</span>
                <span className="flex justify-center">{m ? <CheckCircle2 className="h-5 w-5 text-primary" /> : <X className="h-5 w-5 text-muted-foreground" />}</span>
                <span className="flex justify-center">{g ? <CheckCircle2 className="h-5 w-5 text-primary" /> : <X className="h-5 w-5 text-muted-foreground" />}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-28">
        <Reveal><h2 className="text-center text-4xl font-bold">Questions</h2></Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border bg-card p-6 open:border-primary">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">{q}<span className="text-2xl text-primary transition group-open:rotate-45">+</span></summary>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
