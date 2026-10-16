import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Linkedin, Twitter, Facebook, MapPin, Clock, Send, Building2, GraduationCap, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/motion";
import { img } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SCIS — Get in Touch" },
      { name: "description", content: "Get in touch with the Society for Cyber Intelligent Systems for membership, courses or partnerships." },
      { property: "og:title", content: "Contact SCIS" },
      { property: "og:description", content: "Reach the SCIS team at info@societycis.org." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

const reasons = [
  { icon: GraduationCap, t: "Students & learners", d: "Course batches, membership and certificates." },
  { icon: Building2, t: "Institutions", d: "Workshops, awareness drives and partnerships." },
  { icon: HelpCircle, t: "General queries", d: "Anything else — we're happy to help." },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-40 pt-24 text-center text-ink-foreground">
        <img src={img.office} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto max-w-3xl px-6">
          <span className="anim-up inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">Contact</span>
          <h1 className="anim-up delay-1 mt-5 text-5xl font-bold md:text-6xl">Let's <span className="text-shine">talk</span> security</h1>
          <p className="anim-up delay-2 mt-5 text-lg opacity-80">Questions about membership, courses or partnerships? Our team usually replies within one working day.</p>
        </div>
      </section>

      <section className="relative mx-auto -mt-28 max-w-6xl px-6">
        <Reveal dir="zoom" className="grid overflow-hidden rounded-[2rem] bg-card shadow-card md:grid-cols-[1fr_1.4fr]">
          <div className="bg-primary p-10 text-primary-foreground">
            <h2 className="text-2xl font-bold">Contact information</h2>
            <p className="mt-2 text-sm opacity-90">Reach us directly or fill in the form.</p>
            <div className="mt-10 space-y-6 text-sm">
              <a href="mailto:info@societycis.org" className="flex items-center gap-4"><span className="rounded-full bg-primary-foreground/15 p-3"><Mail className="h-5 w-5" /></span>info@societycis.org</a>
              <div className="flex items-center gap-4"><span className="rounded-full bg-primary-foreground/15 p-3"><MapPin className="h-5 w-5" /></span>Puducherry, India</div>
              <div className="flex items-center gap-4"><span className="rounded-full bg-primary-foreground/15 p-3"><Clock className="h-5 w-5" /></span>Mon – Sat, 10 AM – 6 PM IST</div>
            </div>
            <div className="mt-12 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((I, i) => <a key={i} href="#" aria-label="social" className="rounded-full border border-primary-foreground/30 p-3 transition hover:bg-primary-foreground hover:text-primary"><I className="h-5 w-5" /></a>)}
            </div>
          </div>
          <form className="p-10" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            {sent ? <div className="anim-up flex h-full flex-col items-center justify-center text-center"><Send className="h-12 w-12 text-primary" /><h3 className="mt-4 text-2xl font-bold">Message sent!</h3><p className="mt-2 text-muted-foreground">Thanks — we'll reply soon.</p></div> : (
              <div className="grid gap-4 sm:grid-cols-2">
                <input required className="field" placeholder="Full name" />
                <input required type="email" className="field" placeholder="Email" />
                <input className="field" placeholder="Phone" />
                <select className="field" defaultValue=""><option value="" disabled>I'm interested in…</option><option>Membership</option><option>AI Course</option><option>Partnership</option><option>Other</option></select>
                <textarea required rows={5} className="field sm:col-span-2" placeholder="Your message" />
                <button className="btn-primary sm:col-span-2">Send message <Send className="h-4 w-4" /></button>
              </div>
            )}
          </form>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal key={r.t} delay={i * 100} className="group flex gap-4 rounded-2xl p-6 transition hover:bg-secondary">
            <r.icon className="h-8 w-8 shrink-0 text-primary transition group-hover:scale-110" />
            <div><h3 className="font-bold">{r.t}</h3><p className="mt-1 text-sm text-muted-foreground">{r.d}</p></div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
