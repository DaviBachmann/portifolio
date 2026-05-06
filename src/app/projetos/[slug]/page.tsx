import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Github } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Tag } from "@/components/Tag";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Projeto não encontrado"
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Davi Bachmann`,
      description: project.shortDescription,
      images: [project.coverImage]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="px-5 pb-20 pt-28 md:px-8">
      <article className="mx-auto max-w-5xl">
        <ButtonLink href="/#projetos" variant="ghost">
          <ArrowLeft aria-hidden="true" size={17} />
          Voltar aos projetos
        </ButtonLink>

        <header className="mt-10 grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="mb-4 font-body text-sm text-muted">{project.year}</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-secondary md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 font-body text-lg leading-8 text-muted">
              {project.shortDescription}
            </p>
            {project.githubUrl ? (
              <div className="mt-8">
                <ButtonLink
                  href={project.githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github aria-hidden="true" size={18} />
                  Ver no GitHub
                </ButtonLink>
              </div>
            ) : null}
          </div>
          <div className="glass-card relative min-h-[280px] overflow-hidden">
            <Image
              alt={`Imagem de capa do projeto ${project.title}`}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 92vw, 460px"
              src={project.coverImage}
            />
          </div>
        </header>

        <div className="mt-14 grid gap-8">
          <section className="glass-card p-6 md:p-8">
            <h2 className="mb-4 inline-block border-b-2 border-primary pb-1 font-display text-2xl font-semibold text-secondary">
              Sobre o Projeto
            </h2>
            <p className="font-body text-lg leading-8 text-muted">
              {project.fullDescription}
            </p>
          </section>

          <section className="glass-card p-6 md:p-8">
            <h2 className="mb-4 inline-block border-b-2 border-primary pb-1 font-display text-2xl font-semibold text-secondary">
              Tecnologias Utilizadas
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Tag key={technology}>{technology}</Tag>
              ))}
            </div>
          </section>

          <section className="glass-card p-6 md:p-8">
            <h2 className="mb-4 inline-block border-b-2 border-primary pb-1 font-display text-2xl font-semibold text-secondary">
              Destaques
            </h2>
            <ul className="space-y-3 font-body text-base leading-7 text-muted">
              {project.highlights.map((highlight) => (
                <li className="flex gap-3" key={highlight}>
                  <span className="mt-2 size-2 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-card p-6 md:p-8">
            <h2 className="mb-5 inline-block border-b-2 border-primary pb-1 font-display text-2xl font-semibold text-secondary">
              Galeria
            </h2>
            <ProjectGallery images={project.gallery} title={project.title} />
          </section>
        </div>
      </article>
    </main>
  );
}
