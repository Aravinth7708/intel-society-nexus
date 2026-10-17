import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

export function Reveal({ children, dir = "up", delay = 0, className = "", as: Tag = "div" }: { children: ReactNode; dir?: "up" | "left" | "right" | "zoom"; delay?: number; className?: string; as?: ElementType }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]: IntersectionObserverEntry[]) => { if (e?.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} data-dir={dir} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</Tag>;
}

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]: IntersectionObserverEntry[]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => { const p = Math.min(1, (t - start) / 1600); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export function TypeWords({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState<string>(words[0] ?? "");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length] ?? "";
    const t = setTimeout(() => {
      if (!del) { if (txt.length < w.length) setTxt(w.slice(0, txt.length + 1)); else setTimeout(() => setDel(true), 1400); }
      else { if (txt.length > 0) setTxt(w.slice(0, txt.length - 1)); else { setDel(false); setI(i + 1); } }
    }, del ? 40 : 90);
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return <span className="text-shine">{txt}<span className="caret text-primary">|</span></span>;
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden">
      <div className="marquee flex w-max gap-12">
        {[...items, ...items].map((x, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap font-display text-lg font-bold text-muted-foreground"><span className="h-2 w-2 rounded-full bg-primary" />{x}</span>
        ))}
      </div>
    </div>
  );
}
