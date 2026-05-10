import { useEffect, useRef } from "react";

//  change to real coordinates
const COORDS: [number, number] = [-4.818035, 11.899485];
const ADDRESS = "Pointe-Noire, République du Congo";

export function MapSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    let map: any;
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !ref.current) return;
      map = L.map(ref.current, { zoomControl: true, scrollWheelZoom: false }).setView(COORDS, 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 19,
      }).addTo(map);
      const icon = L.divIcon({
        className: "",
        html: `<div style="position:relative;width:56px;height:56px;transform:translate(-28px,-56px);">
          <div style="position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle, oklch(0.78 0.16 65 / 0.5), transparent 70%);animation:pulse-glow 2s ease-in-out infinite;"></div>
          <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg, oklch(0.58 0.21 12), oklch(0.78 0.16 65));box-shadow:0 10px 30px -5px oklch(0.58 0.21 12 / 0.6);display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;border:3px solid white;">MU</div>
        </div>`,
      });
      L.marker(COORDS, { icon }).addTo(map).bindPopup("<b>Mindset Univers</b><br/>Reprogramme ton cerveau");
    })();
    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, []);

  return (
    <section id="localiser" className="relative py-28 lg:py-40 bg-night text-white overflow-hidden">
      <div className="absolute inset-0 noise opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center reveal">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold font-semibold">Nous localiser</span>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight">
            Viens nous <span className="text-gradient">rencontrer</span>.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            Notre porte est ouverte à chaque jeune ambitieux, à chaque partenaire visionnaire, à chaque institution engagée.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6 reveal">
          <div className="lg:col-span-2 rounded-3xl glass-dark p-8 flex flex-col gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-gold-light">Adresse</div>
              <div className="mt-2 font-display text-2xl font-bold">Mindset Univers</div>
              <div className="mt-1 text-white/75">{ADDRESS}</div>
            </div>
            <div className="h-px bg-white/10" />
            <div>
              <div className="text-xs uppercase tracking-wider text-gold-light">Téléphone</div>
              <a href="tel:+242000000000" className="mt-2 block text-lg font-semibold hover:text-gold-light transition">+242 00 000 00 00</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-gold-light">Email</div>
              <a href="mailto:contact@mindsetunivers.com" className="mt-2 block text-lg font-semibold hover:text-gold-light transition">contact@mindsetunivers.com</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-gold-light">Horaires</div>
              <div className="mt-2 text-white/80 text-sm leading-relaxed">
                Lundi – Vendredi : 9h00 – 18h00<br />
                Samedi : 10h00 – 14h00<br />
                Dimanche : Fermé
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${COORDS[0]},${COORDS[1]}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-fire px-6 py-3 font-semibold text-white shadow-glow hover:scale-105 transition"
            >
              Itinéraire
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-luxe ring-1 ring-white/10 relative" style={{ minHeight: "480px" }}>
            <div ref={ref} className="absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
