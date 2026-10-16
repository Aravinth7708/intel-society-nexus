import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import exam from "@/assets/exam-boy.jpg";
import { PageHero, SectionTitle, RegisterModal } from "@/components/site";

export const Route = createFileRoute("/ai-course")({
  head: () => ({
    meta: [
      { title: "Introduction to AI Course — SCIS × EC-Council" },
      { name: "description", content: "4 hours live training, 6 months iLab, EC-Council certificate. Free with SCIS lifetime membership." },
      { property: "og:title", content: "Introduction to Artificial Intelligence — SCIS" },
      { property: "og:description", content: "Beginner-friendly live AI course with EC-Council certificate." },
    ],
  }),
  component: Course,
});

const highlights = [
  "4 hours of live online training delivered by EC-Council trainers",
  "Hands-on access to AI tools through 6 months iLab",
  "Practical demonstrations and real-world use cases",
  "Focus on responsible and ethical use of AI",
  "No prior technical background required",
  "Certificate of Participation from EC-Council",
];
const specs = [
  ["Delivery Mode", "Online (Live, Instructor-Led by EC-Council Trainers)"],
  ["Duration", "4 Hours"],
  ["iLab Access", "6 Months (Hands-on Practice)"],
  ["Credential", "Official Certificate of Participation (EC-Council)"],
  ["Eligibility", "Students, Professionals, and anyone interested in AI"],
];
const faqs = [
  ["Do I need coding experience?", "No. The course is designed for complete beginners."],
  ["How do I get the course for free?", "Register for SCIS Lifetime Membership (₹1,000) and the course is included."],
  ["Will I get a certificate?", "Yes, a Certificate of Participation from EC-Council on completion."],
  ["What is iLab?", "A virtual lab environment where you can practise with AI tools for 6 months."],
];

function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const target = new Date("2026-11-15T10:00:00+05:30").getTime();
  const d = Math.max(0, (target - (now ?? target)) / 1000);
  const parts = [[Math.floor(d / 86400), "Days"], [Math.floor(d / 3600) % 24, "Hours"], [Math.floor(d / 60) % 60, "Mins"], [Math.floor(d) % 60, "Secs"]] as const;
  return (
    <div className="flex gap-3">
      {parts.map(([v, l]) => (
        <div key={l} className="w-20 rounded-xl border bg-card p-3 text-center shadow-card">
          <div className="font-display text-2xl font-bold text-primary">{String(v).padStart(2, "0")}</div>
          <div className="text-[11px] text-muted-foreground">{l}</div>
        </div>
      ))}
    </div>
  );
}

function Course() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHero eyebrow="EC-Council Partnered Program" title={<>Introduction to <span className="text-primary">Artificial Intelligence</span></>} text="Understand | Explore | Use | Apply Responsibly — a practical online course with hands-on AI tools." image={exam} />
      <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-12">
        <div><div className="text-sm font-semibold text-primary">Registration closes in</div><div className="mt-3"><Countdown /></div></div>
        <button onClick={() => setOpen(true)} className="btn-primary">Register Now</button>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-8 shadow-card">
          <h2 className="text-2xl font-bold">Course Highlights</h2>
          <ul className="mt-6 space-y-4">
            {highlights.map((h) => <li key={h} className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{h}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border bg-card p-8 shadow-card">
          <h2 className="text-2xl font-bold">Programme Specifications</h2>
          <dl className="mt-6 divide-y">
            {specs.map(([k, v]) => <div key={k} className="grid grid-cols-3 gap-4 py-3 text-sm"><dt className="font-semibold">{k}</dt><dd className="col-span-2 text-muted-foreground">{v}</dd></div>)}
          </dl>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionTitle eyebrow="FAQs" title="Frequently asked questions" />
        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-xl border bg-card p-5">
              <summary className="cursor-pointer list-none font-semibold group-open:text-primary">{q}</summary>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
