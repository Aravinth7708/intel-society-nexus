import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, BadgeCheck, HeartHandshake, Scale, Lightbulb, Users, ArrowRight } from "lucide-react";
import lab from "@/assets/lab-group.jpg";
import hero from "@/assets/hero-real.jpg";
import { PageHero, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SCIS — Society for Cyber Intelligent Systems" },
      { name: "description", content: "Our mission, vision, values, journey and registration details as a cybersecurity and AI society." },
      { property: "og:title", content: "About SCIS" },
      { property: "og:description", content: "Mission, vision, values and registration details of SCIS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const items = [
  { icon: Target, t: "Mission", d: "Make cybersecurity and AI skills accessible to every student and professional through affordable, practical training." },
  { icon: Eye, t: "Vision", d: "A safer digital world built by an ethical, skilled and connected community of cyber defenders." },
  { icon: BadgeCheck, t: "Registered NGO", d: "Reg S.No: 78/2025 · NITI Aayog DARPAN (NGO): PY/2025/0684517" },
];
const values = [
  { icon: Scale, t: "Integrity", d: "Ethical hacking, responsible AI and respect for privacy." },
  { icon: Lightbulb, t: "Innovation", d: "Learning by doing with modern tools and labs." },
  { icon: HeartHandshake, t: "Inclusion", d: "Open to all, no technical background required." },
  { icon: Users, t: "Community", d: "Members helping members grow careers." },
];
const timeline = [
  ["2025", "SCIS registered as a society in Puducherry and listed on NITI Aayog DARPAN."],
  ["2025", "First cyber awareness drives conducted in partner colleges."],
  ["2026", "Partnership with EC-Council for certified AI and cyber training."],
  ["2026", "Launch of Lifetime Membership with free Introduction to AI course."],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title={<>Building a culture of <span className="text-primary">security</span></>} text="SCIS brings together learners, experts and institutions to grow knowledge in cybersecurity, artificial intelligence and emerging technologies." image={hero} />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={lab} alt="SCIS members at a workshop" width={1280} height={896} loading="lazy" className="rounded-2xl shadow-card" />
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-primary">Who we are</div>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">A society for the next generation of cyber defenders</h2>
          <p className="mt-4 text-muted-foreground">The Society for Cyber Intelligent Systems (SCIS) is a non-profit organisation founded to close the cybersecurity skills gap. As cyber threats and AI tools grow every day, we believe everyone deserves the knowledge to stay safe and the opportunity to build a career in this field.</p>
          <p className="mt-4 text-muted-foreground">We run certified courses, workshops, awareness campaigns and community events — working with colleges, industry partners and government initiatives.</p>
          <Link to="/membership" className="btn-primary mt-6">Join the society <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.t} className="rounded-2xl border bg-card p-8 shadow-card">
              <div className="inline-flex rounded-xl bg-primary p-3 text-primary-foreground shadow-red"><i.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl font-bold">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle eyebrow="Our Values" title="What guides us" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="rounded-2xl border p-6 text-center transition hover:border-primary">
              <v.icon className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 font-bold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <SectionTitle eyebrow="Our Journey" title="Milestones" />
        <ol className="relative border-l-2 border-primary/30 pl-8">
          {timeline.map(([y, t], i) => (
            <li key={i} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-background bg-primary" />
              <div className="font-display font-bold text-primary">{y}</div>
              <p className="mt-1 text-muted-foreground">{t}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
