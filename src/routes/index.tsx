import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Brain, Wrench, ShieldCheck, Rocket, Clock, FlaskConical, Award, Users, ArrowRight, Gift, Plus, Bug, Lock, Search, GraduationCap, Megaphone, Trophy, Quote, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero-real.jpg";
import exam from "@/assets/exam-boy.jpg";
import lab from "@/assets/lab-group.jpg";
import soc from "@/assets/soc-girl.jpg";
import student from "@/assets/student-real.jpg";
import { SectionTitle, RegisterModal } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SCIS — Society for Cyber Intelligent Systems" },
      { name: "description", content: "Join SCIS for cybersecurity & AI training with EC-Council. Lifetime membership ₹1,000 with a free AI course." },
      { property: "og:title", content: "SCIS — Society for Cyber Intelligent Systems" },
      { property: "og:description", content: "Cybersecurity & AI training with EC-Council. Lifetime membership with a free AI course." },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Brain, t: "AI Fundamentals", d: "Understand how AI works and its real-world applications." },
  { icon: Wrench, t: "Hands-on Practice", d: "Explore popular AI tools through guided exercises." },
  { icon: ShieldCheck, t: "Responsible AI Use", d: "Ethics, privacy and best practices for safe use." },
  { icon: Rocket, t: "Future Opportunities", d: "Build a foundation for learning and career growth." },
];
const stats = [
  { icon: Clock, v: "4 Hours", l: "Live Training" },
  { icon: FlaskConical, v: "6 Months", l: "iLab Virtual Sandbox" },
  { icon: Award, v: "EC-Council", l: "Certificate of Participation" },
  { icon: Users, v: "Open to All", l: "No technical background needed" },
];

const focus = [
  { icon: GraduationCap, t: "Training & Certification", d: "Industry-aligned courses with EC-Council and other global partners." },
  { icon: Megaphone, t: "Cyber Awareness Drives", d: "Campaigns in schools, colleges and communities on online safety and fraud." },
  { icon: Bug, t: "Ethical Hacking & CTFs", d: "Capture-the-flag events and bug-hunting challenges to sharpen real skills." },
  { icon: Brain, t: "AI & Emerging Tech", d: "Responsible AI, machine learning for security and future-ready tools." },
  { icon: Search, t: "Research & Forensics", d: "Student research, threat intelligence studies and digital forensics." },
  { icon: Lock, t: "Institutional Support", d: "Security policy guidance and cyber hygiene for colleges and NGOs." },
];
const testimonials = [
  { n: "Priya R.", r: "B.Tech Student, Puducherry", q: "The AI course was practical and easy to follow. The iLab access helped me practise long after the live session." },
  { n: "Arun K.", r: "IT Professional", q: "SCIS workshops gave me a clear view of how real SOC teams work. Great community and mentors." },
  { n: "Dr. Meena S.", r: "Faculty, Computer Science", q: "Our students benefited hugely from the SCIS awareness drive. Professional and well organised." },
];
const news = [
  { img: exam, tag: "Course", d: "15 Nov 2026", t: "New batch of Introduction to AI opens for registration" },
  { img: lab, tag: "Workshop", d: "28 Oct 2026", t: "Cyber Lab hands-on day draws students from 10 colleges" },
  { img: soc, tag: "Webinar", d: "10 Oct 2026", t: "Inside a SOC: how analysts detect and stop attacks" },
];

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="relative flex min-h-[640px] items-center overflow-hidden">
        <img src={hero} alt="Students and cyber professionals at a security conference" width={1920} height={1088} className="ken-burns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-ink-foreground">
          <span className="anim-up inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">EC-Council Partnered Program | Certified Training</span>
          <h1 className="anim-up delay-1 mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Introduction to <span className="text-shine">Artificial Intelligence</span>
          </h1>
          <p className="anim-up delay-2 mt-3 font-display text-sm font-semibold uppercase tracking-widest opacity-80">Understand | Explore | Use | Apply Responsibly</p>
          <p className="anim-up delay-3 mt-5 max-w-lg text-lg opacity-85">A practical, beginner-friendly online course to help you understand AI and gain hands-on experience with everyday AI tools.</p>
          <div className="anim-up delay-4 mt-8 flex flex-wrap gap-3">
            <button onClick={() => setOpen(true)} className="btn-primary">Claim Free Course with Membership <ArrowRight className="h-4 w-4" /></button>
            <Link to="/ai-course" className="btn-outline">View Details</Link>
          </div>
        </div>
      </section>

      <section className="border-y bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="flex items-center gap-3">
              <div className="rounded-xl bg-primary-soft p-3 text-primary"><s.icon className="h-5 w-5" /></div>
              <div><div className="font-display font-bold">{s.v}</div><div className="text-xs text-muted-foreground">{s.l}</div></div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="px-6 py-20 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] md:pr-12">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">Welcome to SCIS</div>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Society for Cyber Intelligent Systems</h2>
          <p className="mt-2 font-semibold">Where "Securing Our Digital Future" matters.</p>
          <p className="mt-5 text-muted-foreground">SCIS is a registered non-profit society (Reg S.No 78/2025, NITI Aayog DARPAN PY/2025/0684517) working to build awareness, skills and careers in cybersecurity and artificial intelligence. We partner with global certification bodies like EC-Council to bring industry-grade training to students, educators and working professionals across India.</p>
          <p className="mt-4 text-muted-foreground">Through live courses, hands-on labs, awareness drives, hackathons and community meetups, we help members learn to protect people, data and systems — responsibly and ethically.</p>
          <Link to="/about" className="btn-primary mt-7">Learn about us <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="relative bg-gradient-to-br from-primary to-primary-hover px-6 py-20 text-primary-foreground md:pr-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] md:pl-12">
          <div className="space-y-8">
            {[
              { icon: ShieldCheck, t: "Our Mission", d: "Make cybersecurity and AI education accessible, affordable and practical for every learner." },
              { icon: Brain, t: "Our Vision", d: "A digitally safe India powered by a skilled, ethical community of cyber defenders." },
              { icon: Users, t: "Our Community", d: "Students, faculty, researchers and professionals learning and defending together." },
            ].map((x) => (
              <div key={x.t} className="flex gap-4 border-b border-primary-foreground/20 pb-6 last:border-0">
                <x.icon className="h-8 w-8 shrink-0" />
                <div><h3 className="text-lg font-bold">{x.t}</h3><p className="mt-1 text-sm opacity-90">{x.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle eyebrow="Core Pillars" title="What you'll gain" text="Our flagship AI course is built around four pillars that take you from curiosity to confident, responsible use." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.t} className="group rounded-2xl border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary">
              <div className="inline-flex rounded-xl bg-primary p-3 text-primary-foreground shadow-red"><p.icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <img src={soc} alt="" width={1280} height={896} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-24 text-ink-foreground md:grid-cols-2">
          <div><p className="text-xl">Engage with</p><h2 className="text-5xl font-bold">SCIS Community</h2></div>
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-ink-foreground/30 p-6 backdrop-blur-sm">
            <p className="max-w-xs">Connect to workshops, CTF challenges, webinars and news you care about.</p>
            <Link to="/events" className="btn-primary">Get Involved</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle eyebrow="Focus Areas" title="What we work on" text="From classrooms to boardrooms, SCIS drives cyber readiness across six key areas." />
        <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {focus.map((f, i) => (
            <div key={f.t} className="bg-card p-8 transition hover:bg-primary-soft">
              <div className="font-display text-sm font-bold text-primary">0{i + 1}</div>
              <f.icon className="mt-4 h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          {[["500+", "Members & learners"], ["25+", "Workshops conducted"], ["15+", "Partner institutions"], ["100%", "Online & accessible"]].map(([v, l]) => (
            <div key={l}><div className="font-display text-5xl font-bold text-primary">{v}</div><div className="mt-2 text-sm text-muted-foreground">{l}</div></div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <img src={exam} alt="Student taking an online AI exam" width={1280} height={896} loading="lazy" className="rounded-2xl shadow-card" />
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary">Featured Course</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Learn AI with EC-Council trainers</h2>
            <p className="mt-4 text-muted-foreground">Live, instructor-led sessions, real-world demos and 6 months of iLab access to practise with AI tools at your own pace.</p>
            <Link to="/ai-course" className="btn-primary mt-6">Explore curriculum <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-stretch gap-6 rounded-3xl border bg-card p-8 shadow-card md:grid-cols-[1fr_auto_1fr] md:p-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary">SCIS Lifetime Membership</div>
            <div className="mt-3 font-display text-5xl font-bold">₹1,000</div>
            <div className="text-sm text-muted-foreground">One-time fee</div>
          </div>
          <div className="flex items-center justify-center"><div className="rounded-full bg-primary p-3 text-primary-foreground shadow-red"><Plus /></div></div>
          <div className="rounded-2xl bg-primary-soft p-6">
            <Gift className="h-7 w-7 text-primary" />
            <h3 className="mt-3 text-xl font-bold">FREE AI Course</h3>
            <p className="mt-2 text-sm text-muted-foreground">Includes 6 months iLab access when you join as a lifetime member.</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-6 md:col-span-3">
            <div className="font-display font-bold">LEARN AI TODAY. BUILD A BRIGHTER TOMORROW.</div>
            <button onClick={() => setOpen(true)} className="btn-primary">Register Now</button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-primary">Why Join SCIS</div>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Leadership in cyber begins with lifelong learning</h2>
          <p className="mt-4 text-muted-foreground">Membership gives you access to courses, events, mentors and a network of people who care about a safer digital world.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[["Trusted Society", "Registered NGO under NITI Aayog DARPAN."], ["Certified Training", "Certificates from EC-Council partners."], ["Hands-on Labs", "6 months of iLab virtual sandbox."], ["Career Growth", "Mentorship, internships and job leads."]].map(([t, d]) => (
              <div key={t} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /><div><div className="font-semibold">{t}</div><div className="text-sm text-muted-foreground">{d}</div></div></div>
            ))}
          </div>
          <Link to="/membership" className="btn-primary mt-8">Become a Member</Link>
        </div>
        <div className="relative">
          <img src={student} alt="SCIS student member" width={1024} height={1280} loading="lazy" className="ml-auto h-[520px] w-4/5 rounded-2xl object-cover shadow-card" />
          <div className="absolute bottom-8 left-0 w-60 rounded-xl bg-ink p-2 text-sm text-ink-foreground shadow-card">
            {["Get Involved", "Student Membership", "Institutional Partnership", "Volunteer With Us"].map((x) => <div key={x} className="border-b border-ink-foreground/10 px-4 py-3 last:border-0">{x}</div>)}
          </div>
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold shadow-card"><Trophy className="h-4 w-4 text-primary" />EC-Council Partner</div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Testimonials" title="What our members say" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.n} className="rounded-2xl border bg-card p-7 shadow-card">
                <Quote className="h-8 w-8 text-primary" />
                <blockquote className="mt-4 text-muted-foreground">"{t.q}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{t.n[0]}</div>
                  <div><div className="font-semibold">{t.n}</div><div className="text-xs text-muted-foreground">{t.r}</div></div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle eyebrow="Latest News" title="Updates from SCIS" />
        <div className="grid gap-6 md:grid-cols-3">
          {news.map((n) => (
            <article key={n.t} className="group overflow-hidden rounded-2xl border bg-card shadow-card">
              <div className="overflow-hidden"><img src={n.img} alt="" width={1280} height={896} loading="lazy" className="h-48 w-full object-cover transition duration-500 group-hover:scale-110" /></div>
              <div className="p-6">
                <div className="flex gap-3 text-xs"><span className="font-bold uppercase text-primary">{n.tag}</span><span className="text-muted-foreground">{n.d}</span></div>
                <h3 className="mt-2 text-lg font-bold group-hover:text-primary">{n.t}</h3>
                <Link to="/events" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read more <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={lab} alt="Students working together in a cyber lab" width={1280} height={896} loading="lazy" className="h-80 w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-ink/85 to-transparent p-8 text-ink-foreground">
            <h3 className="text-2xl font-bold md:text-3xl">Join a growing cyber community</h3>
            <p className="mt-2 max-w-lg opacity-80">Get updates on events, workshops and new programs.</p>
            <form className="mt-5 flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Your email address" className="field text-foreground" />
              <button className="btn-primary shrink-0">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
