"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { useMemo, useState } from "react";
import { ImageModal } from "@/components/ImageModal";
import { certificateFilters, certificates, type Certificate } from "@/data/certificates";
import { cn } from "@/lib/utils";

export function CertificatesGrid() {
  const [activeFilter, setActiveFilter] = useState(certificateFilters[0].value);
  const [selected, setSelected] = useState<Certificate | null>(null);

  const filteredCertificates = useMemo(
    () =>
      certificates.filter((certificate) =>
        certificate.categories.includes(activeFilter)
      ),
    [activeFilter]
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {certificateFilters.map((filter) => (
          <button
            className={cn(
              "min-h-11 rounded-lg border px-4 py-2 font-display text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              activeFilter === filter.value
                ? "border-primary bg-primary text-background"
                : "border-secondary/20 bg-white/5 text-secondary hover:border-primary hover:bg-primary/15"
            )}
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredCertificates.map((certificate) => (
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
            <h2 className="font-display text-xl font-semibold text-secondary">
              {certificate.title}
            </h2>
            <p className="mt-2 font-body text-sm text-secondary/80">
              Instituição: {certificate.institution}
            </p>
            <p className="mt-4 flex-1 font-body text-sm leading-6 text-muted">
              {certificate.description}
            </p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <span className="font-body text-sm text-secondary/85">
                {certificate.hours}
              </span>
              <button
                className="rounded-lg px-3 py-2 font-display text-sm font-medium text-primary transition hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setSelected(certificate)}
                type="button"
              >
                Ver certificado
              </button>
            </div>
          </article>
        ))}
      </div>

      <ImageModal
        alt={selected ? `Certificado ${selected.title}` : "Certificado"}
        downloadUrl={selected?.pdf}
        image={selected?.image ?? "/imagens/certificados/certificate-numpy-ALURA.png"}
        onClose={() => setSelected(null)}
        open={selected !== null}
        title={selected?.title ?? ""}
      />
    </>
  );
}
