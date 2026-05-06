import { About } from "@/components/About";
import { CertificatesPreview } from "@/components/CertificatesPreview";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsSection />
      <CertificatesPreview />
      <Skills />
      <ContactForm />
    </main>
  );
}
