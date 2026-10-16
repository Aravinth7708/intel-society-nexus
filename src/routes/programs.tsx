import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Bug, Network, Search, Lock, Cloud } from "lucide-react";
import soc from "@/assets/soc-girl.jpg";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — SCIS Cyber & AI Training" },
      { name: "description", content: "Explore SCIS programs in AI, ethical hacking, network security, forensics and more." },
      { property: "og:title", content: "SCIS Programs" },
      { property: "og:description", content: "Cybersecurity and AI training programs from SCIS." },
    ],
  }),
  component: Programs,
});

const list = [
  { icon: Brain, t: "Introduction to AI", d: "4-hour live course with 6 months iLab.", tag: "Open now" },
  { icon: Bug, t: "Ethical Hacking Basics", d: "Learn how attackers think and how to defend.", tag: "Coming soon" },
  { icon: Network, t: "Network Security", d: "Firewalls, monitoring and secure design.", tag: "Coming soon" },
  { icon: Search, t: "Digital Forensics", d: "Investigate incidents and preserve evidence.", tag: "Coming soon" },
  { icon: Lock, t: "Cyber Hygiene", d: "Everyday safety for students and staff.", tag: "Workshop" },
  { icon: Cloud, t: "Cloud Security", d: "Protect workloads on modern cloud platforms.", tag: "Coming soon" },
];

function Programs() {
  return (
    <>
      <PageHero eyebrow="Programs" title={<>Skills for a <span className="text-primary">secure</span> future</>} text="Practical, beginner-friendly programs delivered with industry partners." image={soc} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <div key={p.t} className="rounded-2xl border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-primary">
            <div className="flex items-center justify-between">
              <p.icon className="h-7 w-7 text-primary" />
              <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">{p.tag}</span>
            </div>
            <h3 className="mt-4 text-lg font-bold">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            {p.tag === "Open now" && <Link to="/ai-course" className="mt-5 inline-block text-sm font-semibold text-primary">View course →</Link>}
          </div>
        ))}
      </section>
    </>
  );
}
