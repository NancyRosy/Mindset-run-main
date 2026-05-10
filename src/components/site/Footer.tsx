import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-night text-white pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full" style={{ background: "radial-gradient(ellipse, oklch(0.78 0.16 65 / 0.12), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Mindset Univers" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-display text-2xl font-bold">Mindset Univers</div>
                <div className="text-xs uppercase tracking-[0.25em] text-gold-light">Reprogramme ton cerveau</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-white/70 leading-relaxed">
              Un mouvement dédié à la transformation mentale, au leadership et à l'éveil de la jeunesse africaine. Bâtir aujourd'hui les leaders de demain.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-gold-light mb-4">Navigation</div>
            <ul className="space-y-2 text-sm text-white/75">
              <li><a href="#apropos" className="hover:text-white">À propos</a></li>
              <li><a href="#programmes" className="hover:text-white">Programmes</a></li>
              <li><a href="#galerie" className="hover:text-white">Galerie</a></li>
              <li><a href="#impact" className="hover:text-white">Impact</a></li>
              <li><a href="#localiser" className="hover:text-white">Nous localiser</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-gold-light mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-white/75">
              <li>Pointe-Noire, République du Congo</li>
              <li><a href="tel:+242000000000" className="hover:text-white">+242 00 000 00 00</a></li>
              <li><a href="mailto:contact@mindsetunivers.com" className="hover:text-white">contact@mindsetunivers.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Mindset Univers — Tous droits réservés.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
