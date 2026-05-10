import { useEffect, useState } from "react";
import t1 from "@/assets/testi-1.jpg";
import t2 from "@/assets/testi-2.jpg";
import t3 from "@/assets/testi-3.jpg";

const items = [
  {
    quote: "La personnalité des femmes à succès est le véritable frein d'attraction des hommes vers eux. Il n'en ait toujours pas question d'argent. ",
    name: "Andréa MANFOUNDOU",
    img: t1,
  },
  {
    quote: "Ce que tu crois possible définit tes actions. Et tes actions créent ta réalité. Tant que ton subconscient est programmée ainsi, ta réalité restera vérité. ",
    name: "Roméo DEXTAIRE",
    img: t2,
  },
  {
    quote: "Quand la vie decide de te faire grandir, elle te pousse à bout pour que tu réalises tes limites. Elle chamboule ton quotidien pour que tu oses tout recommencer. ",
    name: "Andresse MAK",
    img: t3,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full translate-x-1/3" style={{ background: "radial-gradient(circle, oklch(0.58 0.21 12 / 0.18), transparent 70%)" }} />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center reveal">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-crimson font-semibold">Témoignages</span>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight text-navy-deep">
            Ce qu'ils disent du <span className="text-gradient">mouvement</span>.
          </h2>
        </div>

        <div className="mt-16 max-w-4xl mx-auto reveal">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
              {items.map((t) => (
                <div key={t.name} className="min-w-full px-2">
                  <div className="rounded-3xl bg-card shadow-luxe p-8 lg:p-12 border border-border/60 relative">
                    <svg viewBox="0 0 32 32" className="absolute -top-4 left-8 h-12 w-12 text-crimson/20" fill="currentColor"><path d="M10 8c-3 0-5 2-5 5v9h9v-9h-5c0-2 1-4 4-4V6c-1 0-3 0-3 2zm14 0c-3 0-5 2-5 5v9h9v-9h-5c0-2 1-4 4-4V6c-1 0-3 0-3 2z"/></svg>
                    <p className="font-display text-2xl lg:text-3xl leading-snug text-navy-deep">
                      « {t.quote} »
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <img src={t.img} alt={t.name} loading="lazy" className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40" />
                      <div>
                        <div className="font-semibold text-navy-deep">{t.name}</div>
                        <div className="text-sm text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, k) => (
              <button
                key={k}
                aria-label={`Témoignage ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-fire" : "w-3 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
