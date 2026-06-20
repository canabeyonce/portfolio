import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Frontend Engineer
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight">
          Xuan Thuy Hoang
        </h1>

        <p className="mb-8 text-xl leading-8 text-gray-700">
          Frontend Engineer specializing in React, enterprise web applications,
          reusable UI architecture, and responsive web experiences.
        </p>

        <div className="mb-12 flex flex-wrap gap-4">
          <a
            href="mailto:katiehoang26390@gmail.com"
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/canabeyonce"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-300 px-5 py-3"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/thuy-hoang-509bb83a/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-300 px-5 py-3"
          >
            LinkedIn
          </a>
        </div>

        <section>
          <SectionTitle>Skills</SectionTitle>

          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionTitle>Experience</SectionTitle>

          <div className="space-y-4">
            {experiences.map((experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.period}`}
                title={experience.title}
                company={experience.company}
                period={experience.period}
                description={experience.description}
                technologies={experience.technologies}
              />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionTitle>Projects</SectionTitle>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                period={project.period}
                company={project.company}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
