import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/data/site";

export function Skills() {
  return (
    <AnimatedSection id="habilidades">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading title="Habilidades & Tecnologias" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article
                className="glass-card flex min-h-44 flex-col items-center justify-center p-4 text-center transition duration-300 hover:-translate-y-1"
                key={skill.name}
              >
                <div className="relative mb-4 flex size-14 items-center justify-center">
                  <Image
                    alt={`Logo ${skill.name}`}
                    className="object-contain"
                    fill
                    sizes="56px"
                    src={skill.image}
                  />
                </div>
                <h3 className="font-body text-sm font-semibold text-secondary">
                  {skill.name}
                </h3>
                <span
                  className="mt-3 inline-flex min-h-7 items-center rounded px-2 py-1 font-display text-xs font-medium text-white"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.level}
                </span>
                <Icon aria-hidden="true" className="mt-4 text-secondary/25" size={18} />
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
