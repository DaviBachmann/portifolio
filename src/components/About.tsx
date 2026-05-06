import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function About() {
  return (
    <AnimatedSection id="sobre">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div>
          <SectionHeading align="left" title="Sobre Mim" />
          <div className="space-y-5 font-body text-lg leading-8 text-muted">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="glass-card relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden p-2">
          <Image
            alt="Ilustração do portfólio de Davi Bachmann"
            className="rounded-lg object-cover"
            fill
            priority={false}
            sizes="(max-width: 768px) 90vw, 360px"
            src="/imagens/imagem_portifolio.jpg"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
