import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SCIS" },
      { name: "description", content: "Get in touch with the Society for Cyber Intelligent Systems." },
      { property: "og:title", content: "Contact SCIS" },
      { property: "og:description", content: "Reach the SCIS team at info@societycis.org." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let's <span className="text-primary">talk</span></>} text="Questions about membership, courses or partnerships? Send us a message." />
      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <a href="mailto:info@societycis.org" className="flex items-center gap-3 rounded-2xl border bg-card p-5 shadow-card hover:border-primary"><Mail className="text-primary" /> info@societycis.org</a>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Facebook].map((I, i) => <a key={i} href="#" aria-label="social" className="rounded-full border p-3 hover:border-primary hover:text-primary"><I className="h-5 w-5" /></a>)}
          </div>
        </div>
        <form className="space-y-3 rounded-2xl border bg-card p-7 shadow-card" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          {sent ? <p className="rounded-lg bg-primary-soft p-4 text-sm">Thanks — we'll reply soon.</p> : <>
            <input required className="field" placeholder="Name" />
            <input required type="email" className="field" placeholder="Email" />
            <textarea required rows={5} className="field" placeholder="Message" />
            <button className="btn-primary">Send message</button>
          </>}
        </form>
      </section>
    </>
  );
}
