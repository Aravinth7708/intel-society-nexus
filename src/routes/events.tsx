import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import soc from "@/assets/soc-girl.jpg";
import exam from "@/assets/exam-boy.jpg";
import lab from "@/assets/lab-group.jpg";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Workshops — SCIS" },
      { name: "description", content: "Upcoming SCIS cybersecurity and AI workshops, webinars and meetups." },
      { property: "og:title", content: "SCIS Events" },
      { property: "og:description", content: "Upcoming cybersecurity and AI events from SCIS." },
    ],
  }),
  component: Events,
});

const events = [
  { img: exam, t: "Introduction to AI — Live Batch", date: "15 Nov 2026", place: "Online" },
  { img: soc, t: "Inside a Security Operations Center", date: "28 Nov 2026", place: "Online Webinar" },
  { img: lab, t: "Cyber Lab Hands-on Day", date: "12 Dec 2026", place: "Puducherry" },
];

function Events() {
  return (
    <>
      <PageHero eyebrow="Events" title={<>Learn, meet and <span className="text-primary">defend</span></>} text="Workshops, webinars and community meetups for members and learners." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
        {events.map((e) => (
          <article key={e.t} className="overflow-hidden rounded-2xl border bg-card shadow-card">
            <img src={e.img} alt="" width={1280} height={896} loading="lazy" className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold">{e.t}</h3>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-primary" />{e.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" />{e.place}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
