import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { Gallery } from "@/components/site/Gallery";
import { Impact } from "@/components/site/Impact";
import { Testimonials } from "@/components/site/Testimonials";
import { MapSection } from "@/components/site/MapSection";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mindset Univers — Reprogramme ton cerveau" },
      { name: "description", content: "Mindset Univers accompagne la jeunesse vers une nouvelle vision du succès, du leadership et de l'ambition. Rejoins le mouvement." },
      { property: "og:title", content: "Mindset Univers — Reprogramme ton cerveau" },
      { property: "og:description", content: "Transformation mentale, leadership et empowerment de la jeunesse." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800;900&display=swap" },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Impact />
      <Testimonials />
      <MapSection />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
