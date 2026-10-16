import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Bug, Network, Search, Lock, Cloud } from "lucide-react";
import soc from "@/assets/soc-girl.jpg";
import { PageHero, SectionTitle } from "@/components/site";

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
  { icon: Brain, t: "Introduction to AI", d: "4-hour live course with 6 months iLab. Learn AI basics, tools and responsible use.", tag: "Open now", lvl: "Beginner", dur: "4 hrs + iLab" },
  { icon: Bug, t: "Ethical Hacking Basics", d: "Learn how attackers think, common vulnerabilities and how to defend systems.", tag: "Coming soon", lvl: "Beginner", dur: "6 weeks" },
  { icon: Network, t: "Network Security", d: "Firewalls, IDS/IPS, monitoring, VPNs and secure network design.", tag: "Coming soon", lvl: "Intermediate", dur: "6 weeks" },
  { icon: Search, t: "Digital Forensics", d: "Investigate incidents, preserve evidence and write forensic reports.", tag: "Coming soon", lvl: "Intermediate", dur: "8 weeks" },
  { icon: Lock, t: "Cyber Hygiene", d: "Everyday safety for students and staff: passwords, phishing, scams.", tag: "Workshop", lvl: "All levels", dur: "2 hrs" },
  { icon: Cloud, t: "Cloud Security", d: "Protect workloads, identities and data on modern cloud platforms.", tag: "Coming soon", lvl: "Advanced", dur: "6 weeks" },
];
const steps = [
  ["Choose a program", "Pick the course that fits your goals and level."],
  ["Register & join", "Become a member to unlock free and discounted courses."],
  ["Learn live", "Attend instructor-led sessions with industry experts."],
  ["Practise & certify", "Use iLab sandboxes and earn your certificate."],
];

function Programs() {
  return (
    <>
      <PageHero eyebrow="Programs" title={<>Skills for a <span className="text-primary">secure</span> future</>} text="Practical, beginner-friendly programs delivered with industry partners like EC-Council — from AI basics to digital forensics." image={soc} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <div key={p.t} className="flex flex-col rounded-2xl border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-primary">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-primary-soft p-3"><p.icon className="h-6 w-6 text-primary" /></div>
              <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">{p.tag}</span>
            </div>
            <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.d}</p>
            <div className="mt-5 flex gap-4 border-t pt-4 text-xs text-muted-foreground"><span>Level: <b className="text-foreground">{p.lvl}</b></span><span>Duration: <b className="text-foreground">{p.dur}</b></span></div>
            {p.tag === "Open now" && <Link to="/ai-course" className="mt-4 inline-block text-sm font-semibold text-primary">View course →</Link>}
          </div>
        ))}
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="How it works" title="Your learning path" />
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <div key={t} className="rounded-2xl bg-card p-6 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</div>
                <h3 className="mt-4 font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center"><Link to="/membership" className="btn-primary">Become a member</Link></div>
        </div>
      </section>
    </>
  );
}
