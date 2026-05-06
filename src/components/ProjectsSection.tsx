import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projetos">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading title="Projetos" />
        <div className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard index={index} key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
