import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Brain, ShieldCheck, Users, ArrowRight, Bug, Search, GraduationCap, Megaphone, Quote, CheckCircle2, ChevronLeft, ChevronRight, MapPin, Play, Award, Lock, Sparkles } from "lucide-react";
import { RegisterModal } from "@/components/site";
import { Reveal, CountUp, TypeWords, Marquee } from "@/components/motion";
import { img } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SCIS — Society for Cyber Intelligent Systems" },
      { name: "description", content: "Join SCIS for cybersecurity & AI training with EC-Council. Lifetime membership ₹1,000 with a free AI course." },
      { property: "og:title", content: "SCIS — Society for Cyber Intelligent Systems" },
      { property: "og:description", content: "Cybersecurity & AI training with EC-Council. Lifetime membership with a free AI course." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: img.audience },
      { name: "twitter:image", content: img.audience },
    ],
  }),
  component: Home,
});

const modules = [
  { t: "AI Foundations", d: "What AI is, how machine learning works, and where you already meet AI every day.", pts: ["History & types of AI", "Data, models and training", "AI vs automation"] },
  { t: "Hands-on Tools", d: "Guided practice with popular AI assistants, image tools and productivity apps inside iLab.", pts: ["Prompting techniques", "AI for study & work", "6-month iLab sandbox"] },
  { t: "AI in Cybersecurity", d: "How defenders use AI to detect threats — and how attackers misuse it.", pts: ["Phishing & deepfakes", "AI-powered detection", "Real-world case studies"] },
  { t: "Responsible AI", d: "Ethics, privacy, bias and safe usage guidelines for individuals and organisations.", pts: ["Bias & fairness", "Data privacy", "Policy & regulation"] },
];
const testimonials = [
  { n: "Priya R.", r: "B.Tech Student, Puducherry", q: "The AI course was practical and easy to follow. The iLab access helped me keep practising long after the live session ended." },
  { n: "Arun K.", r: "IT Support Engineer", q: "SCIS workshops gave me a clear view of how real security teams work. The mentors are approachable and the community is very active." },
  { n: "Dr. Meena S.", r: "Faculty, Computer Science", q: "Our students benefited hugely from the SCIS awareness drive. It was professional, well organised and genuinely useful." },
];
const events = [
  { d: "15", m: "Nov", t: "Introduction to AI — Live Batch", p: "Online · EC-Council Trainers", tag: "Course" },
  { d: "28", m: "Nov", t: "Inside a Security Operations Center", p: "Online Webinar", tag: "Webinar" },
  { d: "12", m: "Dec", t: "Cyber Lab Hands-on Day & Mini CTF", p: "Puducherry", tag: "Workshop" },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [ti, setTi] = useState(0);
  useEffect(() => { const t = setInterval(() => setTi((x) => (x + 1) % testimonials.length), 6000); return () => clearInterval(t); }, []);
  const tm = testimonials[ti]!;

  return (
    <>
      {/* HERO — split with photo collage */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink bg-cover bg-fixed bg-center text-ink-foreground" style={{ backgroundImage: `url(${img.cyberCode})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <div className="anim-up inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
              <span className="relative flex h-2 w-2"><span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary" /><span className="relative h-2 w-2 rounded-full bg-primary" /></span>
              Registrations open · EC-Council Partnered
            </div>
            <h1 className="anim-up delay-1 mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">
              Learn to <br /><TypeWords words={["defend", "secure", "think AI", "lead"]} /><br />the digital world.
            </h1>
            <p className="anim-up delay-2 mt-6 max-w-lg text-lg opacity-80">The Society for Cyber Intelligent Systems trains students and professionals in cybersecurity and artificial intelligence — with certified courses, live labs and a community that grows with you.</p>
            <div className="anim-up delay-3 mt-8 flex flex-wrap items-center gap-4">
              <button onClick={() => setOpen(true)} className="btn-primary">Join for ₹1,000 + Free AI Course <ArrowRight className="h-4 w-4" /></button>
              <Link to="/ai-course" className="group flex items-center gap-3 text-sm font-semibold">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><Play className="h-4 w-4" /></span>
                Explore the course
              </Link>
            </div>
            <div className="anim-up delay-4 mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[img.womanTech, img.students, img.teamWork, img.meeting].map((s, i) => <img key={i} src={s.replace("w=1200", "w=120")} alt="" className="h-10 w-10 rounded-full border-2 border-ink object-cover" />)}
              </div>
              <div className="text-sm"><b>500+ learners</b> <span className="opacity-70">already part of SCIS</span></div>
            </div>
          </div>

          <div className="relative h-[520px]">
            <div className="anim-up delay-2 absolute right-0 top-0 h-[380px] w-[72%] overflow-hidden rounded-3xl shadow-card">
              <img src={img.womanTech} alt="Security professional at work" className="ken-burns h-full w-full object-cover" />
            </div>
            <div className="anim-up delay-3 absolute bottom-0 left-0 h-[260px] w-[55%] overflow-hidden rounded-3xl border-8 border-ink shadow-card">
              <img src={img.hacker} alt="Cybersecurity analyst" className="h-full w-full object-cover" />
            </div>
            <div className="float-y absolute left-4 top-16 flex items-center gap-3 rounded-2xl bg-card p-4 text-foreground shadow-card">
              <div className="rounded-xl bg-primary p-2.5 text-primary-foreground"><ShieldCheck className="h-5 w-5" /></div>
              <div><div className="text-xs text-muted-foreground">Threats blocked</div><div className="font-display text-lg font-bold">1.2M+</div></div>
            </div>
            <div className="float-y absolute bottom-16 right-2 flex items-center gap-3 rounded-2xl bg-primary p-4 text-primary-foreground shadow-red [animation-delay:1.5s]">
              <Award className="h-7 w-7" />
              <div><div className="text-xs opacity-70">Certified by</div><div className="font-display font-bold">EC-Council</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y bg-secondary py-6">
        <Marquee items={["Ethical Hacking", "Artificial Intelligence", "Network Security", "Digital Forensics", "Cloud Security", "Cyber Awareness", "Capture The Flag", "Responsible AI"]} />
      </section>

      {/* ABOUT — overlapping images + stats */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2">
        <Reveal dir="left" className="relative">
          <img src={img.workshop} alt="SCIS workshop" loading="lazy" className="h-[460px] w-[85%] rounded-3xl object-cover shadow-card" />
          <div className="absolute -bottom-10 right-0 w-[52%] overflow-hidden rounded-3xl border-8 border-background shadow-card">
            <img src={img.codeScreen} alt="" loading="lazy" className="h-56 w-full object-cover" />
          </div>
          <div className="absolute -left-4 top-8 rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-red">
            <div className="font-display text-4xl font-bold">2025</div><div className="text-xs opacity-90">Founded & registered</div>
          </div>
        </Reveal>
        <Reveal dir="right">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— Who we are</div>
          <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">A non-profit society closing India's cyber skills gap.</h2>
          <p className="mt-6 text-muted-foreground">SCIS is a registered society (Reg S.No 78/2025) listed on NITI Aayog DARPAN (PY/2025/0684517). We bring industry-grade cybersecurity and AI education to students, educators and professionals — partnering with global certification bodies like EC-Council.</p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-y py-8">
            {[[500, "+", "Learners"], [25, "+", "Workshops"], [15, "+", "Institutions"]].map(([n, s, l]) => (
              <div key={l as string}><div className="font-display text-4xl font-bold text-primary"><CountUp to={n as number} suffix={s as string} /></div><div className="mt-1 text-sm text-muted-foreground">{l}</div></div>
            ))}
          </div>
          <Link to="/about" className="btn-outline mt-8">Discover our story <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>

      {/* BENTO — focus areas */}
      <section className="bg-ink py-28 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— What we do</div>
              <h2 className="mt-3 max-w-xl text-4xl font-bold md:text-5xl">Six ways we build cyber readiness</h2>
            </div>
            <Link to="/programs" className="btn-primary">All programs <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <div className="mt-14 grid auto-rows-[220px] gap-5 md:grid-cols-4">
            <Reveal dir="zoom" className="group relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2">
              <img src={img.classroom} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 p-8"><GraduationCap className="h-9 w-9 text-primary" /><h3 className="mt-3 text-3xl font-bold">Training & Certification</h3><p className="mt-2 max-w-sm opacity-80">Industry-aligned live courses with EC-Council and global partners, plus hands-on iLab practice.</p></div>
            </Reveal>
            <Reveal delay={100} className="rounded-3xl bg-primary p-7 text-primary-foreground"><Megaphone className="h-8 w-8" /><h3 className="mt-4 text-xl font-bold">Awareness Drives</h3><p className="mt-2 text-sm opacity-90">Online safety & fraud campaigns in schools and colleges.</p></Reveal>
            <Reveal delay={200} className="group relative overflow-hidden rounded-3xl">
              <img src={img.matrix} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110" />
              <div className="relative p-7"><Bug className="h-8 w-8 text-primary" /><h3 className="mt-4 text-xl font-bold">Ethical Hacking & CTFs</h3></div>
            </Reveal>
            <Reveal delay={100} className="rounded-3xl border border-ink-foreground/15 p-7"><Brain className="h-8 w-8 text-primary" /><h3 className="mt-4 text-xl font-bold">AI & Emerging Tech</h3><p className="mt-2 text-sm opacity-70">Responsible AI and ML for security.</p></Reveal>
            <Reveal delay={200} className="rounded-3xl border border-ink-foreground/15 p-7"><Search className="h-8 w-8 text-primary" /><h3 className="mt-4 text-xl font-bold">Research & Forensics</h3><p className="mt-2 text-sm opacity-70">Threat intel and investigation skills.</p></Reveal>
          </div>
        </div>
      </section>

      {/* COURSE TABS */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— Flagship course</div>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Introduction to Artificial Intelligence</h2>
          <p className="mt-4 text-muted-foreground">4 hours live · 6 months iLab · EC-Council certificate · FREE with lifetime membership</p>
        </Reveal>
        <Reveal className="mt-14 grid gap-8 lg:grid-cols-[320px_1fr]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col">
            {modules.map((m, i) => (
              <button key={m.t} onClick={() => setTab(i)} className={`flex shrink-0 items-center gap-4 rounded-2xl border p-5 text-left transition ${tab === i ? "border-primary bg-primary text-primary-foreground shadow-red" : "bg-card hover:border-primary"}`}>
                <span className="font-display text-2xl font-bold opacity-60">0{i + 1}</span><span className="font-semibold">{m.t}</span>
              </button>
            ))}
          </div>
          <div key={tab} className="anim-up grid overflow-hidden rounded-3xl border bg-card shadow-card md:grid-cols-2">
            <img src={[img.aiChip, img.laptop, img.security, img.meeting][tab]} alt="" loading="lazy" className="h-72 w-full object-cover md:h-full" />
            <div className="p-8">
              <div className="text-sm font-semibold text-primary">Module 0{tab + 1}</div>
              <h3 className="mt-2 text-2xl font-bold">{modules[tab]!.t}</h3>
              <p className="mt-3 text-muted-foreground">{modules[tab]!.d}</p>
              <ul className="mt-6 space-y-3">{modules[tab]!.pts.map((p) => <li key={p} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-primary" />{p}</li>)}</ul>
              <Link to="/ai-course" className="btn-primary mt-8">Full curriculum</Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PARALLAX QUOTE BAND */}
      <section className="relative bg-cover bg-fixed bg-center py-32" style={{ backgroundImage: `url(${img.serverRoom})` }}>
        <div className="absolute inset-0 bg-ink/80" />
        <Reveal className="relative mx-auto max-w-4xl px-6 text-center text-ink-foreground">
          <Lock className="mx-auto h-10 w-10 text-primary" />
          <p className="mt-6 font-display text-3xl font-bold leading-snug md:text-5xl">"Security is not a product, it's a <span className="text-shine">culture</span> — and culture starts with education."</p>
          <p className="mt-6 text-sm uppercase tracking-widest opacity-70">The SCIS Philosophy</p>
        </Reveal>
      </section>

      {/* MEMBERSHIP TICKET */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <Reveal dir="zoom" className="grid overflow-hidden rounded-[2rem] shadow-card md:grid-cols-[1fr_1.2fr]">
          <div className="relative bg-gradient-to-br from-primary to-primary-hover p-10 text-primary-foreground">
            <Sparkles className="h-8 w-8" />
            <div className="mt-6 text-sm font-semibold uppercase tracking-widest opacity-90">Lifetime Membership</div>
            <div className="mt-2 font-display text-7xl font-bold">₹1,000</div>
            <div className="opacity-90">One-time · No renewals ever</div>
            <button onClick={() => setOpen(true)} className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-semibold text-foreground transition hover:-translate-y-0.5">Register Now <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div className="bg-card p-10">
            <h3 className="text-2xl font-bold">Everything included</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {[["FREE AI Course", "Worth the price of membership alone"], ["6 Months iLab", "Hands-on virtual sandbox"], ["EC-Council Certificate", "Official participation credential"], ["Events & Webinars", "Priority access, member pricing"], ["Mentor Network", "Guidance from professionals"], ["Career Support", "Internship and job leads"]].map(([t, d]) => (
                <div key={t} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><div><div className="font-semibold">{t}</div><div className="text-sm text-muted-foreground">{d}</div></div></div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIAL CAROUSEL */}
      <section className="bg-secondary py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1fr_1.5fr]">
          <Reveal dir="left">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">— Testimonials</div>
            <h2 className="mt-3 text-4xl font-bold">Voices from our community</h2>
            <div className="mt-8 flex gap-3">
              <button aria-label="Previous" onClick={() => setTi((ti + testimonials.length - 1) % testimonials.length)} className="rounded-full border bg-card p-3 transition hover:border-primary hover:text-primary"><ChevronLeft /></button>
              <button aria-label="Next" onClick={() => setTi((ti + 1) % testimonials.length)} className="rounded-full bg-primary p-3 text-primary-foreground shadow-red"><ChevronRight /></button>
            </div>
          </Reveal>
          <div key={ti} className="anim-up relative rounded-3xl bg-card p-10 shadow-card">
            <Quote className="absolute -top-6 left-10 h-12 w-12 rounded-full bg-primary p-3 text-primary-foreground" />
            <p className="text-xl leading-relaxed">"{tm.q}"</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-bold text-ink-foreground">{tm.n[0]}</div>
              <div><div className="font-bold">{tm.n}</div><div className="text-sm text-muted-foreground">{tm.r}</div></div>
              <div className="ml-auto flex gap-1.5">{testimonials.map((_, i) => <span key={i} className={`h-2 rounded-full transition-all ${i === ti ? "w-8 bg-primary" : "w-2 bg-border"}`} />)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="mx-auto max-w-5xl px-6 py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-bold">Upcoming events</h2>
          <Link to="/events" className="font-semibold text-primary">View all events →</Link>
        </Reveal>
        <div className="mt-10 divide-y border-y">
          {events.map((e, i) => (
            <Reveal key={e.t} delay={i * 100}>
              <Link to="/events" className="group flex items-center gap-6 py-7 transition hover:bg-secondary md:px-4">
                <div className="w-16 shrink-0 text-center"><div className="font-display text-4xl font-bold text-primary">{e.d}</div><div className="text-xs font-semibold uppercase text-muted-foreground">{e.m}</div></div>
                <div className="flex-1">
                  <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">{e.tag}</span>
                  <h3 className="mt-2 text-xl font-bold group-hover:text-primary">{e.t}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{e.p}</div>
                </div>
                <ArrowRight className="h-6 w-6 -translate-x-2 text-primary opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6">
        <Reveal dir="zoom" className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-ink-foreground md:px-16">
          <img src={img.cyberCode} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <Users className="h-9 w-9 text-primary" />
              <h3 className="mt-4 text-3xl font-bold md:text-4xl">Stay in the loop</h3>
              <p className="mt-3 opacity-80">Monthly updates on workshops, CTFs, new courses and cyber safety tips.</p>
            </div>
            <form className="flex w-full gap-2 rounded-full bg-background p-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-4 text-foreground outline-none" />
              <button className="btn-primary shrink-0">Subscribe</button>
            </form>
          </div>
        </Reveal>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
