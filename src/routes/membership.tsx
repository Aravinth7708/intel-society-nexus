import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Gift, QrCode } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import { PageHero, RegisterModal } from "@/components/site";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Lifetime Membership ₹1,000 — SCIS" },
      { name: "description", content: "Become a lifetime SCIS member for ₹1,000 and get the Introduction to AI course free." },
      { property: "og:title", content: "SCIS Lifetime Membership" },
      { property: "og:description", content: "₹1,000 one-time with a free AI course and 6 months iLab." },
    ],
  }),
  component: Membership,
});

const benefits = [
  "Become a lifetime member of SCIS",
  "Access to SCIS events, learning resources and community activities",
  "Be part of a growing network in cybersecurity and emerging technologies",
  "FREE Introduction to AI course with 6 months iLab access",
];

function Membership() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHero eyebrow="Membership" title={<>Lifetime membership, <span className="text-primary">one</span> payment</>} text="Join SCIS once and stay connected to the community for life." />
      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-20 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-3xl border-2 border-primary bg-card p-8 shadow-red">
          <img src={logo} alt="SCIS seal" width={64} height={64} className="h-16 w-16 object-contain" />
          <h2 className="mt-4 text-2xl font-bold">SCIS Lifetime Membership</h2>
          <div className="mt-2 font-display text-5xl font-bold">₹1,000 <span className="text-base font-medium text-muted-foreground">one-time</span></div>
          <ul className="mt-6 space-y-3">
            {benefits.map((b) => <li key={b} className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{b}</li>)}
          </ul>
          <button onClick={() => setOpen(true)} className="btn-primary mt-8 w-full">Register Now</button>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl bg-primary-soft p-6">
            <Gift className="h-7 w-7 text-primary" />
            <h3 className="mt-3 font-bold">Bonus: FREE AI Course</h3>
            <p className="mt-2 text-sm text-muted-foreground">Register for lifetime membership and get the Introduction to AI course free.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6 text-center shadow-card">
            <QrCode className="mx-auto h-28 w-28 text-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">Scan to register on mobile</p>
          </div>
        </div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
