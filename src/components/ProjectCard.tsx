"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Tag } from "@/components/Tag";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const direction = index % 2 === 0 ? -36 : 36;

  return (
    <motion.article
      className="glass-card group grid min-h-full overflow-hidden md:grid-cols-[1.05fr_0.95fr]"
      initial={reduceMotion ? false : { opacity: 0, x: direction }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
    >
      <div className="flex flex-col p-6 md:p-8">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="font-body text-sm text-muted">{project.year}</span>
          <span className="h-px flex-1 bg-primary/25" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-primary md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 flex-1 font-body text-base leading-7 text-muted">
          {project.shortDescription}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/projetos/${project.slug}`}>
            Ver detalhes
            <ExternalLink aria-hidden="true" size={17} />
          </ButtonLink>
          {project.githubUrl ? (
            <ButtonLink
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
              variant="ghost"
            >
              <Github aria-hidden="true" size={17} />
              GitHub
            </ButtonLink>
          ) : null}
        </div>
      </div>
      <div className="relative min-h-[260px] overflow-hidden bg-black/20 md:min-h-full">
        <Image
          alt={`Imagem de capa do projeto ${project.title}`}
          className="object-cover transition duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 92vw, 460px"
          src={project.coverImage}
        />
      </div>
    </motion.article>
  );
}
