import BackToTopButton from "@/components/BackToTopButton";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import ThemeToggle from "@/components/ThemeToggle";
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

const opensInNewTab = (href: string) =>
  href.startsWith("http") || href === "/resume.pdf";

const heroActions = [
  { label: "Contact", href: "mailto:katiehoang26390@gmail.com", primary: true },
  { label: "Resume", href: "/resume.pdf", primary: false },
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
    label: "Resume",
    href: "/resume.pdf",
    value: "Open resume PDF",
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
    <>
      <header className="fixed left-0 right-0 top-0 z-[100] border-b border-[color:var(--site-border)] bg-[var(--site-header-bg)] backdrop-blur-md transition-colors duration-300">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8"
        >
          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--site-fg)] transition hover:text-[var(--site-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--site-accent)]"
          >
            Katie Hoang
          </a>

          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--site-subtle)]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[var(--site-fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--site-accent)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="min-h-screen overflow-hidden bg-[var(--site-bg)] pt-[var(--header-offset)] text-[var(--site-fg)] transition-colors duration-300">
      <section
        id="home"
        className="mx-auto grid min-w-0 max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 px-5 pb-20 pt-16 sm:pt-20 lg:grid-cols-[minmax(0,1.15fr)_380px] lg:px-8 lg:pb-28 lg:pt-24"
      >
        <div className="flex min-w-0 max-w-[22rem] flex-col justify-center sm:max-w-none">
          <p className="mb-5 text-xs font-semibold uppercase leading-6 tracking-[0.22em] text-[var(--site-accent)] sm:text-sm sm:tracking-[0.26em]">
            <span>Frontend Engineer</span>
            <span className="hidden sm:inline"> / </span>
            <span className="block sm:inline">Kansas City, MO</span>
          </p>

          <h1 className="max-w-full text-[2.85rem] font-black leading-[0.92] tracking-normal text-[var(--site-heading)] sm:text-7xl lg:max-w-5xl lg:text-[7.5rem]">
            Katie Hoang
          </h1>

          <p className="mt-8 max-w-full text-lg leading-8 text-[var(--site-muted)] sm:max-w-2xl sm:text-xl">
            Frontend Engineer with 10 years of experience building enterprise
            React applications, reusable UI components, and responsive web
            platforms.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {profileFacts.map((fact) => (
              <span
                key={fact}
                className="rounded-md border border-[color:var(--site-border)] bg-[var(--site-chip-bg)] px-4 py-2 text-sm font-medium text-[var(--site-chip-fg)]"
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
                target={opensInNewTab(action.href) ? "_blank" : undefined}
                rel={
                  opensInNewTab(action.href)
                    ? "noopener noreferrer"
                    : undefined
                }
                className={
                  action.primary
                    ? "inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--button-primary-bg)] px-5 text-sm font-bold text-[var(--button-primary-fg)] transition hover:bg-[var(--site-accent)] hover:text-[var(--site-accent-contrast)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-accent)]"
                    : "inline-flex min-h-12 items-center justify-center rounded-md border border-[color:var(--site-border-strong)] px-5 text-sm font-bold text-[var(--site-fg)] transition hover:border-[color:var(--site-accent)] hover:text-[var(--site-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-accent)]"
                }
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>

        <aside
          className="relative min-w-0 max-w-[22rem] sm:max-w-full lg:max-w-[380px] lg:self-end"
          aria-label="Katie Hoang profile"
        >
          <div className="w-full max-w-full overflow-hidden rounded-md border border-[color:var(--site-border)] bg-[var(--site-card)] shadow-2xl shadow-black/30">
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
            <div className="rounded-md border border-[color:var(--site-border)] bg-[var(--site-card)] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--site-dim)]">
                Focus
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--site-fg)]">
                Enterprise UI
              </p>
            </div>

            <div className="rounded-md border border-[color:var(--site-border)] bg-[var(--site-card)] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--site-dim)]">
                Stack
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--site-fg)]">
                React, TypeScript
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section
        id="projects"
        className="border-t border-[color:var(--site-border)] bg-[var(--site-panel)] px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--site-accent)]">
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
                role={project.role}
                industry={project.industry}
                overview={project.overview}
                keyContributions={project.keyContributions}
                technologies={project.technologies}
                logoSrc={project.logoSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-t border-[color:var(--site-border)] px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--site-accent)]">
              Experience
            </p>
            <SectionTitle>Frontend engineering experience</SectionTitle>
          </div>

          <div className="space-y-0 border-t border-[color:var(--site-border)]">
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

      <section className="border-t border-[color:var(--site-border)] bg-[var(--site-panel)] px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--site-accent)]">
              Skills
            </p>
            <SectionTitle>Frontend tools and platforms</SectionTitle>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--site-dim)]">
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

      <section className="border-t border-[color:var(--site-border)] px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--site-accent)]">
              Education
            </p>
            <SectionTitle>Academic foundation</SectionTitle>
          </div>

          <div className="border-t border-[color:var(--site-border)] py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[var(--site-fg)]">
                  Bachelor of Computer Software Engineering
                </h3>

                <p className="mt-2 text-[var(--site-muted)]">
                  VNUHCM - University of Science
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-[var(--site-muted)]">Ho Chi Minh City, Vietnam</p>

                <p className="mt-1 text-sm text-[var(--site-dim)]">
                  Sep 2008 - Sep 2013
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-[color:var(--site-border)] bg-[var(--site-panel)] px-5 py-20 text-[var(--site-fg)] lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_520px] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--site-accent)]">
              Contact
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-6xl">
              Open to frontend engineering opportunities.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--site-muted)]">
              Based in Kansas City, Missouri, and available to connect about
              frontend roles and product engineering teams.
            </p>
          </div>

          <div className="grid gap-3">
            {contactActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={opensInNewTab(action.href) ? "_blank" : undefined}
                rel={
                  opensInNewTab(action.href)
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex min-h-16 items-center justify-between gap-4 rounded-md border border-[color:var(--site-border)] bg-[var(--site-chip-bg)] px-5 py-4 transition hover:border-[color:var(--site-accent)] hover:bg-[var(--site-chip-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-accent)]"
              >
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.18em] text-[var(--site-accent)]">
                    {action.label}
                  </span>
                  <span className="mt-1 block break-all text-sm text-[var(--site-muted)] sm:text-base">
                    {action.value}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl text-[var(--site-dim)] transition group-hover:translate-x-1 group-hover:text-[var(--site-accent)]"
                >
                  -&gt;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <BackToTopButton />
      </main>
    </>
  );
}
