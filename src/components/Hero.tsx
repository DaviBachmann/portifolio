"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { site } from "@/data/site";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-20 pt-28 md:px-8"
      id="inicio"
    >
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <motion.div
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        className="mx-auto max-w-4xl text-center"
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
