const pillars = [
  {
    title: "Notre Vision",
    text: "Bâtir une génération africaine consciente, ambitieuse et libre — capable de transformer son destin et celui de son continent.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>
    ),
  },
  {
    title: "Notre Mission",
    text: "Reprogrammer les mentalités à travers le coaching, la formation et l'inspiration pour libérer le potentiel de chaque jeune.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><path d="M12 2l2.4 6.6L21 10l-5 4.5L17.5 22 12 18 6.5 22 8 14.5 3 10l6.6-1.4L12 2z"/></svg>
    ),
  },
  {
    title: "Nos Valeurs",
    text: "Excellence, discipline, intégrité, audace et fraternité. Nous croyons à la puissance d'un mental forgé dans la vérité.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/></svg>
    ),
  },
  {
    title: "Notre Impact",
    text: "Plus de 500 jeunes accompagnés, des dizaines de communautés réveillées, et un mouvement qui ne fait que commencer.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6"><path d="M3 17l6-6 4 4 8-8M14 7h7v7"/></svg>
    ),
  },
];

export function About() {
  return (
    <section id="apropos" className="relative py-28 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full -translate-x-1/3 -translate-y-1/3" style={{ background: "radial-gradient(circle, oklch(0.78 0.16 65 / 0.15), transparent 70%)" }} />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-crimson font-semibold">À propos</span>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight text-navy-deep">
              Un mouvement né d'une <span className="text-gradient">conviction profonde</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Mindset Univers n'est pas une organisation. C'est une révolution silencieuse — une école de la pensée qui prépare la jeunesse à conquérir sa vie, son leadership et son avenir.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Nous croyons que tout commence par le mental. Que chaque jeune porte en lui une grandeur en sommeil. Notre rôle : la réveiller, la former, et l'envoyer changer le monde.
            </p>
            <a href="#programmes" className="mt-8 inline-flex items-center gap-2 text-navy-deep font-semibold hover:text-crimson transition">
              Découvrir notre univers
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="reveal group relative overflow-hidden rounded-3xl bg-card p-7 shadow-luxe border border-border/60 hover:-translate-y-2 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-x-0 -top-1 h-1 bg-fire opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-fire text-white shadow-glow">
                  {p.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-deep">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
