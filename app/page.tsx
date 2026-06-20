import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-900">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_320px]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Frontend Engineer
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight">
              Katie Hoang
            </h1>

            <p className="mb-6 text-xl leading-8 text-gray-700">
              Senior Frontend Engineer with 10+ years of experience building
              enterprise React applications, scalable UI systems, and responsive
              web platforms.
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                📍 Kansas City, MO
              </span>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                🇺🇸 US Work Authorized
              </span>

              <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
                💼 10+ Years Experience
              </span>
              <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-purple-700">
                ⚛️ React & TypeScript
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:katiehoang26390@gmail.com"
                className="rounded-lg bg-black px-5 py-3 text-white"
              >
                Contact Me
              </a>

              <a
                href="https://github.com/canabeyonce"
                target="_blank"
                className="rounded-lg border border-gray-300 px-5 py-3"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/thuy-hoang-509bb83a"
                target="_blank"
                className="rounded-lg border border-gray-300 px-5 py-3"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/avatar.jpg"
              alt="Katie Hoang"
              width={280}
              height={280}
              className="h-64 w-64 rounded-full object-cover"
            />
          </div>
        </div>

        <section className="mt-16">
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

        <section className="mt-24 border-t border-gray-200 pt-12">
          <h2 className="mb-6 text-2xl font-bold">Contact</h2>

          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:katiehoang26390@gmail.com" className="underline">
                katiehoang26390@gmail.com
              </a>
            </p>

            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/thuy-hoang-509bb83a/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                linkedin.com/in/thuy-hoang-509bb83a
              </a>
            </p>

            <p>
              <span className="font-semibold">GitHub:</span>{" "}
              <a
                href="https://github.com/canabeyonce"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                github.com/canabeyonce
              </a>
            </p>

            <p>
              <span className="font-semibold">Location:</span> Kansas City,
              Missouri, United States
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
