"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { PointerEvent, useRef } from "react";
import { ButtonLink } from "@/components/Button";
import { site } from "@/data/site";

const floatingSkills = [
  { label: "Python", className: "hero-skill-python" },
  { label: "SQL", className: "hero-skill-sql" },
  { label: "Power BI", className: "hero-skill-powerbi" },
  { label: "Machine Learning", className: "hero-skill-ml" }
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    section.style.setProperty("--spotlight-x", `${x.toFixed(2)}%`);
    section.style.setProperty("--spotlight-y", `${y.toFixed(2)}%`);
  }

  return (
    <section
      className="hero-section relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-20 pt-28 md:px-8"
      id="inicio"
      onPointerMove={handlePointerMove}
      ref={sectionRef}
    >
      <div aria-hidden="true" className="hero-spotlight" />
      <div aria-hidden="true" className="hero-ambient" />
      <div aria-hidden="true" className="hero-grid" />
      <div aria-hidden="true" className="hero-data-field">
        <span className="data-node data-node-one" />
        <span className="data-node data-node-two" />
        <span className="data-node data-node-three" />
        <span className="data-line data-line-one" />
        <span className="data-line data-line-two" />
        <span className="data-line data-line-three" />
      </div>
      <div aria-hidden="true" className="hero-floating-skills">
        {floatingSkills.map((skill) => (
          <span className={`hero-skill-card ${skill.className}`} key={skill.label}>
            {skill.label}
          </span>
        ))}
      </div>
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <motion.div
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 26 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="font-display text-4xl font-semibold uppercase leading-tight text-secondary md:text-6xl">
          {site.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-8 text-muted md:text-xl">
          {site.hero.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/#projetos">
            Ver meus projetos
            <ArrowRight aria-hidden="true" size={18} />
          </ButtonLink>
          <ButtonLink download href={site.resumePath} variant="ghost">
            <Download aria-hidden="true" size={18} />
            Baixar Currículo
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  );
}
