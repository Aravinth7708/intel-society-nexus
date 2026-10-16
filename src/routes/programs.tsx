import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Brain, Bug, Network, Search, Lock, Cloud, Clock, BarChart3, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { img } from "@/lib/images";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — SCIS Cyber & AI Training" },
      { name: "description", content: "Explore SCIS programs in AI, ethical hacking, network security, forensics, cloud security and cyber hygiene." },
      { property: "og:title", content: "SCIS Programs" },
      { property: "og:description", content: "Cybersecurity and AI training programs from SCIS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Programs,
});

const list = [
  { icon: Brain, img: img.aiChip, cat: "AI", t: "Introduction to AI", d: "4-hour live course with 6 months iLab. Learn AI basics, popular tools and responsible use.", tag: "Open now", lvl: "Beginner", dur: "4 hrs + iLab" },
  { icon: Bug, img: img.hacker, cat: "Security", t: "Ethical Hacking Basics", d: "Learn how attackers think, common vulnerabilities and how to defend systems.", tag: "Coming soon", lvl: "Beginner", dur: "6 weeks" },
  { icon: Network, img: img.servers, cat: "Security", t: "Network Security", d: "Firewalls, IDS/IPS, monitoring, VPNs and secure network design.", tag: "Coming soon", lvl: "Intermediate", dur: "6 weeks" },
  { icon: Search, img: img.dashboard, cat: "Security", t: "Digital Forensics", d: "Investigate incidents, preserve evidence and write forensic reports.", tag: "Coming soon", lvl: "Intermediate", dur: "8 weeks" },
  { icon: Lock, img: img.classroom, cat: "Workshops", t: "Cyber Hygiene", d: "Everyday safety for students and staff: passwords, phishing and online scams.", tag: "Workshop", lvl: "All levels", dur: "2 hrs" },
  { icon: Cloud, img: img.serverRoom, cat: "Security", t: "Cloud Security", d: "Protect workloads, identities and data on modern cloud platforms.", tag: "Coming soon", lvl: "Advanced", dur: "6 weeks" },
];
const cats = ["All", "AI", "Security", "Workshops"];
const steps = [
  ["Choose", "Pick the program that fits your goals and level."],
  ["Register", "Become a member to unlock free and discounted courses."],
  ["Learn live", "Attend instructor-led sessions with industry experts."],
  ["Certify", "Practise in iLab sandboxes and earn your certificate."],
];

function Programs() {
  const [cat, setCat] = useState("All");
  const shown = list.filter((p) => cat === "All" || p.cat === cat);
  return (
    <>
      {/* Centered hero with image strip */}
      <section className="relative overflow-hidden pt-20">
        <div className="dot-grid absolute inset-x-0 top-0 h-72 opacity-40" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="anim-up inline-block rounded-full border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-card">Programs</span>
          <h1 className="anim-up delay-1 mt-6 text-5xl font-bold leading-tight md:text-7xl">Skills for a <span className="text-shine">secure</span> future</h1>
          <p className="anim-up delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Practical, beginner-friendly programs delivered with industry partners like EC-Council — from AI basics to digital forensics.</p>
        </div>
        <div className="anim-up delay-3 mx-auto mt-14 grid max-w-7xl grid-cols-3 gap-4 px-6">
          {[img.hacker, img.womanTech, img.servers].map((s, i) => <img key={i} src={s} alt="" className={`h-64 w-full rounded-3xl object-cover shadow-card ${i === 1 ? "md:-mt-8 md:h-80" : ""}`} />)}
        </div>
      </section>

      {/* Filterable grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap justify-center gap-2">
          {cats.map((c) => <button key={c} onClick={() => setCat(c)} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${cat === c ? "bg-primary text-primary-foreground shadow-red" : "border bg-card hover:border-primary"}`}>{c}</button>)}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article key={p.t} className="anim-up group overflow-hidden rounded-3xl border bg-card shadow-card transition hover:-translate-y-1.5">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-background px-3 py-1 text-xs font-bold text-primary">{p.tag}</span>
                <div className="absolute -bottom-6 right-6 rounded-2xl bg-primary p-3 text-primary-foreground shadow-red"><p.icon className="h-6 w-6" /></div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold group-hover:text-primary">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <div className="mt-5 flex gap-5 border-t pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><BarChart3 className="h-4 w-4 text-primary" />{p.lvl}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" />{p.dur}</span>
                </div>
                {p.tag === "Open now" && <Link to="/ai-course" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">View course <ArrowRight className="h-4 w-4" /></Link>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Learning path — dark connected steps */}
      <section className="bg-ink py-28 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center"><div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— How it works</div><h2 className="mt-3 text-4xl font-bold md:text-5xl">Your learning path</h2></Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 120} className="relative rounded-3xl border border-ink-foreground/15 p-8 transition hover:border-primary">
                <div className="font-display text-6xl font-bold text-primary/40">0{i + 1}</div>
                <h3 className="mt-4 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm opacity-70">{d}</p>
                {i < 3 && <ArrowRight className="absolute -right-5 top-1/2 hidden h-6 w-6 text-primary md:block" />}
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center"><Link to="/membership" className="btn-primary">Become a member</Link></div>
        </div>
      </section>
    </>
  );
}
