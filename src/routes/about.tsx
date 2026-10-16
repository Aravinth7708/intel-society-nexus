import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, BadgeCheck, HeartHandshake, Scale, Lightbulb, Users, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site";
import { Reveal, CountUp } from "@/components/motion";
import { img } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SCIS — Society for Cyber Intelligent Systems" },
      { name: "description", content: "Our mission, vision, values, journey and registration details as a cybersecurity and AI society." },
      { property: "og:title", content: "About SCIS" },
      { property: "og:description", content: "Mission, vision, values and registration details of SCIS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: img.conference },
      { name: "twitter:image", content: img.conference },
    ],
  }),
  component: About,
});

const values = [
  { icon: Scale, t: "Integrity", d: "Ethical hacking, responsible AI and respect for privacy guide everything we teach." },
  { icon: Lightbulb, t: "Innovation", d: "We learn by doing — with modern tools, live labs and real attack scenarios." },
  { icon: HeartHandshake, t: "Inclusion", d: "Open to everyone. No technical background is ever required to start." },
  { icon: Users, t: "Community", d: "Members mentor members. We grow careers together, not alone." },
];
const timeline = [
  ["Early 2025", "Founded", "SCIS registered as a society in Puducherry (Reg S.No 78/2025)."],
  ["Mid 2025", "Recognised", "Listed on NITI Aayog DARPAN as an NGO — PY/2025/0684517."],
  ["Late 2025", "First drives", "Cyber awareness drives conducted in partner colleges."],
  ["2026", "EC-Council", "Partnership for certified AI and cybersecurity training."],
  ["2026", "Membership", "Lifetime membership launched with a free AI course."],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title={<>Building a culture of <span className="text-primary">security</span></>} text="SCIS brings together learners, experts and institutions to grow knowledge in cybersecurity, artificial intelligence and emerging technologies." image={img.conference} />

      {/* Story — image mosaic */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2">
        <Reveal dir="left">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— Our story</div>
          <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Started by educators. Built for the next generation of defenders.</h2>
          <p className="mt-6 text-muted-foreground">Cyber threats grow every single day, yet most students graduate without ever learning how to protect themselves or their organisations. SCIS was founded to change that.</p>
          <p className="mt-4 text-muted-foreground">We run certified courses, hands-on workshops, awareness campaigns and community events — working with colleges, industry partners and government initiatives to make cyber and AI skills accessible to all.</p>
          <Link to="/membership" className="btn-primary mt-8">Join the society <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <Reveal dir="right" className="grid grid-cols-2 gap-4">
          <img src={img.students} alt="" loading="lazy" className="h-64 w-full rounded-3xl object-cover" />
          <img src={img.teamLaptops} alt="" loading="lazy" className="mt-12 h-64 w-full rounded-3xl object-cover" />
          <img src={img.workshop} alt="" loading="lazy" className="-mt-12 h-64 w-full rounded-3xl object-cover" />
          <div className="flex flex-col justify-center rounded-3xl bg-primary p-6 text-primary-foreground">
            <div className="font-display text-5xl font-bold"><CountUp to={500} suffix="+" /></div>
            <div className="mt-1 text-sm opacity-90">learners trained across India</div>
          </div>
        </Reveal>
      </section>

      {/* Mission / Vision — large split panels */}
      <section className="grid md:grid-cols-3">
        {[
          { icon: Target, t: "Mission", d: "Make cybersecurity and AI skills accessible to every student and professional through affordable, practical training.", c: "bg-ink text-ink-foreground" },
          { icon: Eye, t: "Vision", d: "A safer digital India built by an ethical, skilled and connected community of cyber defenders.", c: "bg-primary text-primary-foreground" },
          { icon: BadgeCheck, t: "Registered NGO", d: "Reg S.No: 78/2025 · NITI Aayog DARPAN (NGO): PY/2025/0684517", c: "bg-secondary" },
        ].map((x, i) => (
          <Reveal key={x.t} delay={i * 120} className={`p-12 md:p-14 ${x.c}`}>
            <x.icon className="h-10 w-10" />
            <h3 className="mt-6 text-3xl font-bold">{x.t}</h3>
            <p className="mt-3 opacity-85">{x.d}</p>
          </Reveal>
        ))}
      </section>

      {/* Values — numbered list */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal><h2 className="text-center text-4xl font-bold md:text-5xl">The values that guide us</h2></Reveal>
        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 80} className="flex gap-6">
              <div className="stroke-text font-display text-7xl font-bold leading-none">0{i + 1}</div>
              <div>
                <div className="flex items-center gap-3"><v.icon className="h-6 w-6 text-primary" /><h3 className="text-2xl font-bold">{v.t}</h3></div>
                <p className="mt-2 text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Horizontal timeline */}
      <section className="bg-secondary py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal><div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— Our journey</div><h2 className="mt-3 text-4xl font-bold">Milestones so far</h2></Reveal>
          <div className="relative mt-16 grid gap-10 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-[9px] hidden h-0.5 bg-primary/30 md:block" />
            {timeline.map(([y, t, d], i) => (
              <Reveal key={i} delay={i * 120} className="relative">
                <span className="relative block h-5 w-5 rounded-full border-4 border-secondary bg-primary ring-4 ring-primary/20" />
                <div className="mt-6 text-sm font-semibold text-primary">{y}</div>
                <h3 className="mt-1 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
