type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <article className="border-b border-[color:var(--site-border)] py-8">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-[var(--site-fg)]">{title}</h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--site-accent)]">
            {company}
          </p>
        </div>

        <p className="text-sm font-medium text-[var(--site-dim)]">{period}</p>
      </div>

      <p className="max-w-3xl text-base leading-7 text-[var(--site-muted)]">
        {description}
      </p>

      <p className="mt-5 text-sm font-medium text-[var(--site-dim)]">
        {technologies.join(" / ")}
      </p>
    </article>
  );
}
