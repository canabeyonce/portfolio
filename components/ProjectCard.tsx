import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  company: string;
  period: string;
  overview: string;
  keyContributions: string[];
  technologies: string[];
  logoSrc?: string;
  caseStudyHref?: string;
  index?: number;
};

const visualStyles = [
  "from-[#d9a441] via-[#315f63] to-[#151515]",
  "from-[#76c7b7] via-[#6a4f9f] to-[#151515]",
  "from-[#e26d5a] via-[#2f5f8f] to-[#151515]",
  "from-[#b9c46a] via-[#7d4b57] to-[#151515]",
] as const;

export default function ProjectCard({
  title,
  category,
  company,
  period,
  overview,
  keyContributions,
  technologies,
  logoSrc,
  caseStudyHref = "#",
  index = 0,
}: ProjectCardProps) {
  const visualStyle = visualStyles[index % visualStyles.length];
  const initials = company
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-[color:var(--site-border)] bg-[var(--site-card-strong)]">
      <div
        className={`relative min-h-52 overflow-hidden bg-gradient-to-br ${visualStyle}`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-md border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              {category}
            </span>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/20 bg-white/90 p-2 text-sm font-black text-[#151515] shadow-lg shadow-black/20">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={`${company} logo`}
                  width={96}
                  height={96}
                  className="max-h-full w-full object-contain"
                />
              ) : (
                <span aria-label={`${company} logo placeholder`}>
                  {initials}
                </span>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              {company}
            </p>
            <h3 className="mt-2 max-w-lg text-2xl font-black leading-tight text-white sm:text-3xl">
              {title}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-5 grid gap-3 border-b border-[color:var(--site-border)] pb-5 text-sm sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-dim)]">
              Company
            </p>
            <p className="mt-1 font-semibold text-[var(--site-fg)]">{company}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--site-dim)]">
              Period
            </p>
            <p className="mt-1 font-semibold text-[var(--site-fg)]">{period}</p>
          </div>
        </div>

        <p className="text-base leading-7 text-[var(--site-muted)]">
          {overview}
        </p>

        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--site-accent)]">
            Key Contributions
          </h4>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--site-muted)]">
            {keyContributions.slice(0, 3).map((contribution) => (
              <li key={contribution} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--site-accent)]" />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[color:var(--site-border)] bg-[var(--site-chip-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--site-chip-fg)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={caseStudyHref}
          className="mt-6 inline-flex min-h-11 w-fit items-center justify-center rounded-md border border-[color:var(--site-border-strong)] px-4 text-sm font-bold text-[var(--site-fg)] transition hover:border-[color:var(--site-accent)] hover:text-[var(--site-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-accent)]"
        >
          View Case Study <span aria-hidden="true" className="ml-2">-&gt;</span>
        </a>
      </div>
    </article>
  );
}
