import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, Clock, ArrowRight, Video, Users, Trophy } from "lucide-react";
import { Reveal } from "@/components/motion";
import { img } from "@/lib/images";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Workshops — SCIS" },
      { name: "description", content: "Upcoming SCIS cybersecurity and AI workshops, webinars, CTF challenges and meetups." },
      { property: "og:title", content: "SCIS Events" },
      { property: "og:description", content: "Upcoming cybersecurity and AI events from SCIS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: img.audience },
      { name: "twitter:image", content: img.audience },
    ],
  }),
  component: Events,
});

const events = [
  { img: img.dashboard, t: "Inside a Security Operations Center", date: "28 Nov 2026", time: "6:00 PM IST", place: "Online Webinar", type: "Webinar", icon: Video },
  { img: img.workshop, t: "Cyber Lab Hands-on Day & Mini CTF", date: "12 Dec 2026", time: "10:00 AM", place: "Puducherry", type: "Workshop", icon: Trophy },
  { img: img.meeting, t: "Women in Cyber — Community Meetup", date: "10 Jan 2027", time: "4:00 PM", place: "Online", type: "Meetup", icon: Users },
  { img: img.classroom, t: "Cyber Hygiene for College Staff", date: "24 Jan 2027", time: "11:00 AM", place: "Partner Campus", type: "Workshop", icon: Users },
];
const past = [img.students, img.teamLaptops, img.conference, img.team2, img.office, img.teamWork];

function Events() {
  return (
    <>
      {/* Featured event hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={img.audience} alt="Conference audience" className="ken-burns absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32">
          <span className="anim-up inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">Featured Event</span>
          <h1 className="anim-up delay-1 mt-5 max-w-3xl text-5xl font-bold leading-tight md:text-6xl">Introduction to AI — <span className="text-shine">Live Batch</span></h1>
          <div className="anim-up delay-2 mt-6 flex flex-wrap gap-6 text-sm opacity-90">
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />15 Nov 2026</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />10:00 AM IST · 4 hours</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Online · EC-Council Trainers</span>
          </div>
          <Link to="/ai-course" className="anim-up delay-3 btn-primary mt-8">Reserve your seat <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* Event rows — zigzag */}
      <section className="mx-auto max-w-6xl space-y-10 px-6 py-28">
        <Reveal><h2 className="text-4xl font-bold">More upcoming events</h2></Reveal>
        {events.map((e, i) => (
          <Reveal key={e.t} dir={i % 2 ? "right" : "left"} className={`grid items-center gap-8 overflow-hidden rounded-3xl border bg-card shadow-card md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
            <img src={e.img} alt="" loading="lazy" className="h-72 w-full object-cover" />
            <div className="p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground"><e.icon className="h-3.5 w-3.5" />{e.type}</span>
              <h3 className="mt-4 text-2xl font-bold">{e.t}</h3>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />{e.date}</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />{e.time}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{e.place}</div>
              </div>
              <Link to="/contact" className="btn-outline mt-6">Register interest</Link>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Past events gallery */}
      <section className="bg-secondary py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center"><div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— Gallery</div><h2 className="mt-3 text-4xl font-bold">Moments from past events</h2></Reveal>
          <div className="mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
            {past.map((s, i) => (
              <Reveal key={i} dir="zoom" delay={i * 80} className="group overflow-hidden rounded-3xl">
                <img src={s} alt="" loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-110 ${i % 3 === 0 ? "h-80" : "h-56"}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
