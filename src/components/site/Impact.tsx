import { useEffect, useRef, useState } from "react";

const stats = [
  { v: 500, suffix: "+", l: "Jeunes impactés", icon: "M16 11a4 4 0 10-8 0 4 4 0 008 0zM3 21a9 9 0 0118 0" },
  { v: 50, suffix: "+", l: "Ateliers réalisés", icon: "M4 6h16M4 12h16M4 18h10" },
  { v: 20, suffix: "+", l: "Événements organisés", icon: "M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" },
  { v: 100, suffix: "+", l: "Accompagnements", icon: "M12 2l2 7h7l-5.5 4.5L17 21l-5-4-5 4 1.5-7.5L3 9h7z" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Impact() {
  return (
    <section id="impact" className="relative py-28 lg:py-40 bg-night text-white overflow-hidden">
      <div className="absolute inset-0 noise opacity-40" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full" style={{ background: "radial-gradient(ellipse, oklch(0.78 0.16 65 / 0.2), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold font-semibold reveal">Notre impact</span>
        <h2 className="mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight reveal">
          Des chiffres. <span className="text-gradient">Des vies. Une mission.</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-white/70 reveal">
          Derrière chaque chiffre, il y a un visage, une histoire, une renaissance.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="reveal group relative overflow-hidden rounded-3xl glass-dark p-8 hover:-translate-y-2 transition"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.78 0.16 65 / 0.25), transparent 60%)" }} />
              <div className="relative">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-fire shadow-glow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-white"><path d={s.icon}/></svg>
                </div>
                <div className="mt-6 font-display text-5xl lg:text-6xl font-bold text-gradient">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-white/70">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
