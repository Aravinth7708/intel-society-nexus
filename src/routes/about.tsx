import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, BadgeCheck } from "lucide-react";
import lab from "@/assets/lab-group.jpg";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SCIS — Society for Cyber Intelligent Systems" },
      { name: "description", content: "Our mission, vision and registration details as a cybersecurity and AI society." },
      { property: "og:title", content: "About SCIS" },
      { property: "og:description", content: "Mission, vision and registration details of SCIS." },
    ],
  }),
  component: About,
});

function About() {
  const items = [
    { icon: Target, t: "Mission", d: "Make cybersecurity and AI skills accessible to every student and professional." },
    { icon: Eye, t: "Vision", d: "A safer digital world built by an ethical, skilled community." },
    { icon: BadgeCheck, t: "Registered NGO", d: "Reg S.No: 78/2025 · DARPAN (NGO): PY/2025/0684517" },
  ];
  return (
    <>
      <PageHero eyebrow="About Us" title={<>Building a culture of <span className="text-primary">security</span></>} text="SCIS brings together learners, experts and institutions to grow knowledge in cybersecurity, artificial intelligence and emerging technologies." image={lab} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.t} className="rounded-2xl border bg-card p-7 shadow-card">
            <i.icon className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-xl font-bold">{i.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
