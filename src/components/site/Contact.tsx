import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 lg:py-40 overflow-hidden">
      <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.78 0.16 65 / 0.18), transparent 70%)" }} />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="reveal">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-crimson font-semibold">Contact</span>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight text-navy-deep">
              Prêt à <span className="text-gradient">passer à l'action</span> ?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Que tu sois un jeune en quête de transformation, un partenaire visionnaire ou une institution engagée — écris-nous. Une nouvelle histoire commence ici.
            </p>
            <div className="mt-8 space-y-4">
              <a href="https://wa.me/242000000000" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl glass p-5 hover:-translate-y-1 transition shadow-luxe">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-fire text-white shadow-glow">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.4.1 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.7a12 12 0 005.7 1.5C18.6 23.8 24 18.5 24 11.9c0-3.2-1.2-6.2-3.5-8.4zM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 01-1.5-5.3C2 6.5 6.5 2 12 2s10 4.5 10 9.9c0 5.5-4.5 9.9-10 9.9z"/></svg>
                </span>
                <div>
                  <div className="font-semibold text-navy-deep">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">Réponse rapide, 7j/7</div>
                </div>
              </a>
              <a href="mailto:contact@mindsetunivers.com" className="flex items-center gap-4 rounded-2xl glass p-5 hover:-translate-y-1 transition shadow-luxe">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-deep text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6"><path d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/></svg>
                </span>
                <div>
                  <div className="font-semibold text-navy-deep">contact@mindsetunivers.com</div>
                  <div className="text-sm text-muted-foreground">Pour les partenariats & médias</div>
                </div>
              </a>
              <div className="flex items-center gap-3 pt-2">
                {[
                  { l: "Instagram", d: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 100 2 1 1 0 000-2z" },
                  { l: "Facebook", d: "M13 22v-8h3l1-4h-4V7c0-1 .3-2 2-2h2V1.4A28 28 0 0014.5 1C11.7 1 10 2.7 10 5.7V10H7v4h3v8h3z" },
                  { l: "TikTok", d: "M16 3v3a5 5 0 005 5v3a8 8 0 01-5-2v6a6 6 0 11-6-6v3a3 3 0 103 3V3h3z" },
                  { l: "LinkedIn", d: "M4 3a2 2 0 110 4 2 2 0 010-4zm-1 6h2v12H3V9zm6 0h2v2c.5-1 2-2 4-2 3 0 4 2 4 5v7h-2v-6c0-2-1-3-2.5-3S11 13 11 15v6H9V9z" },
                ].map((s) => (
                  <a key={s.l} href="#" aria-label={s.l} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-navy-deep hover:text-white hover:border-navy-deep transition">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d={s.d}/></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="reveal rounded-3xl bg-card shadow-luxe p-8 lg:p-10 border border-border/60 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nom complet" name="name" placeholder="Ton nom" />
              <Field label="Email" name="email" type="email" placeholder="ton@email.com" />
            </div>
            <Field label="Téléphone" name="phone" placeholder="+242 ..." />
            <div>
              <label className="block text-sm font-medium text-navy-deep mb-2">Sujet</label>
              <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
                <option>Rejoindre un programme</option>
                <option>Devenir partenaire</option>
                <option>Inviter Mindset Univers</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-deep mb-2">Message</label>
              <textarea rows={4} placeholder="Parle-nous de ton projet, de ta vision, de ton rêve..." className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-fire px-8 py-4 text-base font-semibold text-white shadow-glow hover:scale-[1.02] transition"
            >
              {sent ? "Message envoyé ✓" : "Envoyer mon message"}
            </button>
            <p className="text-xs text-muted-foreground text-center">En soumettant, tu acceptes d'être recontacté par notre équipe.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy-deep mb-2">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
    </div>
  );
}
