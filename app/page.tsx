import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

const heroActions = [
  { label: "Contact", href: "mailto:katiehoang26390@gmail.com", primary: true },
  { label: "GitHub", href: "https://github.com/canabeyonce", primary: false },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/thuy-hoang-509bb83a",
    primary: false,
  },
] as const;

const contactActions = [
  {
    label: "Email",
    href: "mailto:katiehoang26390@gmail.com",
    value: "katiehoang26390@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thuy-hoang-509bb83a/",
    value: "linkedin.com/in/thuy-hoang-509bb83a",
  },
  {
    label: "GitHub",
    href: "https://github.com/canabeyonce",
    value: "github.com/canabeyonce",
  },
] as const;

const profileFacts = [
  "Kansas City, MO",
  "US Work Authorized",
  "10 Years Experience",
  "React, TypeScript",
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-[#f5f0e8]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/90 backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8"
        >
          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f5f0e8]"
          >
            Katie Hoang
          </a>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#b8b1a6]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#f5f0e8]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid min-w-0 max-w-7xl grid-cols-[minmax(0,1fr)] scroll-mt-24 gap-12 px-5 pb-20 pt-16 sm:pt-20 lg:grid-cols-[minmax(0,1.15fr)_420px] lg:px-8 lg:pb-28 lg:pt-24"
      >
        <div className="flex min-w-0 max-w-[22rem] flex-col justify-center sm:max-w-none">
          <p className="mb-5 text-xs font-semibold uppercase leading-6 tracking-[0.22em] text-[#d9a441] sm:text-sm sm:tracking-[0.26em]">
            <span>Frontend Engineer</span>
            <span className="hidden sm:inline"> / </span>
            <span className="block sm:inline">Kansas City, MO</span>
          </p>

          <h1 className="max-w-full text-[2.85rem] font-black leading-[0.92] tracking-normal text-[#f8f3ea] sm:text-7xl lg:max-w-5xl lg:text-[7.5rem]">
            Katie Hoang
          </h1>

          <p className="mt-8 max-w-full text-lg leading-8 text-[#c9c1b6] sm:max-w-2xl sm:text-xl">
            Frontend Engineer with 10 years of experience building enterprise
            React applications, reusable UI components, and responsive web
            platforms.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {profileFacts.map((fact) => (
              <span
                key={fact}
                className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-[#e8dfd2]"
              >
                {fact}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  action.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={
                  action.primary
                    ? "inline-flex min-h-12 items-center justify-center rounded-md bg-[#f5f0e8] px-5 text-sm font-bold text-[#090909] transition hover:bg-[#d9a441]"
                    : "inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-bold text-[#f5f0e8] transition hover:border-[#d9a441] hover:text-[#d9a441]"
                }
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>

        <aside
          className="relative min-w-0 max-w-[22rem] sm:max-w-full lg:self-end"
          aria-label="Katie Hoang profile"
        >
          <div className="w-full max-w-full overflow-hidden rounded-md border border-white/10 bg-[#151515] shadow-2xl shadow-black/40">
            <Image
              src="/avatar.jpg"
              alt="Katie Hoang"
              width={560}
              height={700}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-md border border-white/10 bg-[#151515] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#8f867a]">
                Focus
              </p>
              <p className="mt-2 text-sm font-semibold text-[#f5f0e8]">
                Enterprise UI
              </p>
            </div>

            <div className="rounded-md border border-white/10 bg-[#151515] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#8f867a]">
                Stack
              </p>
              <p className="mt-2 text-sm font-semibold text-[#f5f0e8]">
                React, TypeScript
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 border-t border-white/10 bg-[#10100f] px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d9a441]">
              Featured projects
            </p>
            <SectionTitle>Frontend work across enterprise products</SectionTitle>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                period={project.period}
                company={project.company}
                description={project.description}
                technologies={project.technologies}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-24 border-t border-white/10 px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d9a441]">
              Experience
            </p>
            <SectionTitle>Frontend engineering experience</SectionTitle>
          </div>

          <div className="space-y-0 border-t border-white/10">
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
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#10100f] px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d9a441]">
              Skills
            </p>
            <SectionTitle>Frontend tools and platforms</SectionTitle>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8f867a]">
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
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d9a441]">
              Education
            </p>
            <SectionTitle>Academic foundation</SectionTitle>
          </div>

          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#f5f0e8]">
                  Bachelor of Computer Software Engineering
                </h3>

                <p className="mt-2 text-[#c9c1b6]">
                  VNUHCM - University of Science
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-[#c9c1b6]">Ho Chi Minh City, Vietnam</p>

                <p className="mt-1 text-sm text-[#8f867a]">
                  Sep 2008 - Sep 2013
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/10 bg-[#10100f] px-5 py-20 text-[#f5f0e8] lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_520px] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d9a441]">
              Contact
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-6xl">
              Open to frontend engineering opportunities.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#c9c1b6]">
              Based in Kansas City, Missouri, and available to connect about
              frontend roles and product engineering teams.
            </p>
          </div>

          <div className="grid gap-3">
            {contactActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  action.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex min-h-16 items-center justify-between gap-4 rounded-md border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-[#d9a441] hover:bg-white/[0.07]"
              >
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.18em] text-[#d9a441]">
                    {action.label}
                  </span>
                  <span className="mt-1 block break-all text-sm text-[#c9c1b6] sm:text-base">
                    {action.value}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl text-[#8f867a] transition group-hover:translate-x-1 group-hover:text-[#d9a441]"
                >
                  -&gt;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
