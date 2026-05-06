import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-primary/40 bg-secondary px-5 py-8 text-background md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="font-body text-sm">
          &copy; 2026 Davi Bachmann. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-3">
          <a
            aria-label="GitHub de Davi Bachmann"
            className="rounded-lg p-2 transition hover:bg-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
            href={site.socials.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={21} />
          </a>
          <a
            aria-label="LinkedIn de Davi Bachmann"
            className="rounded-lg p-2 transition hover:bg-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
            href={site.socials.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin aria-hidden="true" size={21} />
          </a>
          <a
            aria-label="Enviar e-mail para Davi Bachmann"
            className="rounded-lg p-2 transition hover:bg-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
            href={site.socials.email}
          >
            <Mail aria-hidden="true" size={21} />
          </a>
        </div>
      </div>
    </footer>
  );
}
