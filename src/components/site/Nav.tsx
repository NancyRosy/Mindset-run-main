import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#apropos", label: "À propos" },
  { href: "#programmes", label: "Programmes" },
  { href: "#galerie", label: "Galerie" },
  { href: "#impact", label: "Impact" },
  { href: "#localiser", label: "Nous localiser" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 lg:px-8 transition-all duration-500 ${
          scrolled ? "glass-dark rounded-2xl" : ""
        }`}
        style={scrolled ? { marginLeft: "1rem", marginRight: "1rem" } : {}}
      >
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <img src={logo} alt="Mindset Univers" className="h-10 w-10 object-contain drop-shadow-[0_0_20px_rgba(245,166,35,0.4)] transition-transform group-hover:scale-110" />
            <div className="leading-none">
              <div className={`font-display text-lg font-bold tracking-tight ${scrolled ? "text-white" : "text-white"}`}>Mindset Univers</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold-light/80">Reprogramme ton cerveau</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/85 hover:text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-fire after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-fire px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform"
            >
              Rejoindre
            </a>
          </nav>
          <button
            aria-label="Menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass-dark text-white"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
        {open && (
          <nav className="lg:hidden mt-4 glass-dark rounded-2xl p-4 flex flex-col gap-1 animate-fade-in">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white/90 hover:bg-white/10 text-sm"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-fire px-5 py-3 text-sm font-semibold text-white shadow-glow">
              Rejoindre le mouvement
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
