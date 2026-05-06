import type { Metadata } from "next";
import { CertificatesGrid } from "@/components/CertificatesGrid";

export const metadata: Metadata = {
  title: "Certificados",
  description:
    "Galeria de certificados de Davi Bachmann em Data Science, Python, Power BI e bibliotecas de análise de dados."
};

export default function CertificatesPage() {
  return (
    <main className="px-5 pb-20 pt-28 md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="inline-block border-b-2 border-primary pb-1 font-display text-3xl font-semibold uppercase text-secondary md:text-4xl">
            Meus Certificados
          </h1>
        </div>
        <CertificatesGrid />
      </section>
    </main>
  );
}
