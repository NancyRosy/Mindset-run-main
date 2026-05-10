import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const programs = [
  { title: "Leadership", desc: "Forger des leaders capables d'inspirer, décider et bâtir l'avenir avec courage.", img: g1, tag: "Programme phare" },
  { title: "Développement personnel", desc: "Une transformation intérieure profonde pour révéler la meilleure version de soi.", img: g3, tag: "Best-seller" },
  { title: "Entrepreneuriat", desc: "De l'idée à l'impact — bâtir des projets viables, audacieux et porteurs de sens.", img: g2, tag: "Bootcamp" },
  { title: "Coaching mindset", desc: "Reprogrammer les croyances limitantes et installer une mentalité de gagnant.", img: g3, tag: "1-to-1" },
  { title: "Formation jeunesse", desc: "Des modules immersifs pour préparer les jeunes aux réalités du monde moderne.", img: g2, tag: "Académie" },
  { title: "Motivation & discipline", desc: "Construire une discipline d'élite : la clé invisible derrière chaque grand succès.", img: g4, tag: "Masterclass" },
];

export function Programs() {
  return (
    <section id="programmes" className="relative py-28 lg:py-40 bg-night text-white overflow-hidden">
      <div className="absolute inset-0 noise opacity-40" />
      <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.58 0.21 12 / 0.3), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl reveal">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold font-semibold">Nos programmes</span>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight">
            Des parcours conçus pour <span className="text-gradient">élever, former</span> et libérer.
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Chaque programme est une étape vers une nouvelle version de toi — pensée, construite et délivrée par des mentors qui croient à ton potentiel.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl glass-dark hover:-translate-y-2 transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-fire px-3 py-1 text-[10px] uppercase tracking-wider text-white font-semibold">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold-light group-hover:gap-3 transition-all">
                  En savoir plus
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
