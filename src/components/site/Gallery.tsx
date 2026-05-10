import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero.jpg";

const items = [
  { img: g1, label: "Conférence inspirante", span: "lg:row-span-2" },
  { img: g4, label: "Événement public" },
  { img: g2, label: "Atelier entrepreneuriat" },
  { img: hero, label: "La nouvelle génération", span: "lg:col-span-2" },
  { img: g3, label: "Mentorat individuel" },
];

export function Gallery() {
  return (
    <section id="galerie" className="relative py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-crimson font-semibold">Galerie</span>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight text-navy-deep">
              Des moments qui <span className="text-gradient">changent des vies</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Conférences, ateliers, formations et célébrations — chaque image raconte une transformation réelle.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 auto-rows-[220px] lg:auto-rows-[260px] gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`reveal group relative overflow-hidden rounded-3xl shadow-luxe ${it.span ?? ""}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <img src={it.img} alt={it.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent opacity-90 group-hover:opacity-100 transition" />
              <figcaption className="absolute bottom-4 left-5 right-5 text-white">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold-light">Mindset Univers</div>
                <div className="font-display text-lg lg:text-xl font-semibold">{it.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
