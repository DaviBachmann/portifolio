import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredCertificates } from "@/data/certificates";

export function CertificatesPreview() {
  return (
    <AnimatedSection id="certificados">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading title="Certificados" />
        <div className="grid gap-5 md:grid-cols-3">
          {featuredCertificates.slice(0, 3).map((certificate) => (
            <article className="glass-card flex min-h-full flex-col p-6" key={certificate.id}>
              <div className="mb-5 flex items-center justify-between gap-4">
                <Image
                  alt={`Logo ${certificate.institution}`}
                  className="h-10 w-auto rounded bg-white/90 object-contain p-1"
                  height={40}
                  src={certificate.logo}
                  width={72}
                />
                <span className="font-body text-sm text-muted">{certificate.year}</span>
              </div>
              <Award aria-hidden="true" className="mb-4 text-primary" size={26} />
              <h3 className="font-display text-xl font-semibold text-secondary">
                {certificate.title}
              </h3>
              <p className="mt-3 flex-1 font-body text-sm leading-6 text-muted">
                {certificate.description}
              </p>
              <p className="mt-5 font-body text-sm text-secondary/90">
                {certificate.hours}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/certificados">
            Ver todos os certificados
            <ArrowRight aria-hidden="true" size={18} />
          </ButtonLink>
        </div>
      </div>
    </AnimatedSection>
  );
}
