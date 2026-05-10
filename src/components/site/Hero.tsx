import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Jeunesse africaine inspirée et déterminée"
        className="absolute inset-0 h-full w-full object-cover scale-110 animate-[fade-in_1.4s_ease-out]"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy/60 to-navy-deep" style={{ background: "linear-gradient(180deg, oklch(0.16 0.08 268 / 0.85) 0%, oklch(0.22 0.09 268 / 0.55) 40%, oklch(0.16 0.08 268 / 0.95) 100%)" }} />
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.78 0.16 65 / 0.4), transparent 70%)" }} />
      <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.58 0.21 12 / 0.45), transparent 70%)" }} />
      <div className="absolute inset-0 noise opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-40 pb-24 lg:pt-48 lg:pb-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 mb-8 animate-[fade-up_0.8s_ease-out]">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold-light">Mouvement Mindset Univers</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.02] text-white animate-[fade-up_1s_ease-out]">
            Transforme ton mental.
            <br />
            <span className="text-gradient">Transforme ton avenir.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-white/80 leading-relaxed animate-[fade-up_1.2s_ease-out]">
            Mindset Univers accompagne la jeunesse vers une nouvelle vision du succès, du leadership et de l'ambition. Une renaissance intérieure, une révolution collective.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-up_1.4s_ease-out]">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-fire px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-[0_30px_80px_-10px_color-mix(in_oklab,var(--gold)_70%,transparent)]"
            >
              Rejoindre le mouvement
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#programmes"
              className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-8 py-4 text-base font-semibold text-white hover:bg-white/15 transition"
            >
              Découvrir nos programmes
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl animate-[fade-up_1.6s_ease-out]">
            {[
              { v: "+500", l: "Jeunes impactés" },
              { v: "+50", l: "Ateliers" },
              { v: "+20", l: "Événements" },
            ].map((s) => (
              <div key={s.l} className="border-l border-white/15 pl-4">
                <dt className="font-display text-3xl sm:text-4xl text-gradient font-bold">{s.v}</dt>
                <dd className="mt-1 text-xs sm:text-sm text-white/60 uppercase tracking-wider">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">Défiler</span>
        <div className="h-10 w-6 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="h-2 w-1 rounded-full bg-gold animate-[float_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
