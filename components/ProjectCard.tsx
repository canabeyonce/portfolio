type ProjectCardProps = {
  title: string;
  category: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
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
  description,
  technologies,
  index = 0,
}: ProjectCardProps) {
  const visualStyle = visualStyles[index % visualStyles.length];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-[#171716]">
      <div
        className={`relative min-h-44 overflow-hidden bg-gradient-to-br ${visualStyle} sm:min-h-52`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
        <span className="absolute left-5 top-5 rounded-md border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
          {category}
        </span>
        <div className="absolute inset-x-5 bottom-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            {company}
          </p>
          <h3 className="mt-2 max-w-sm text-2xl font-black leading-tight text-white">
            {title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-5 grid grid-cols-2 gap-3 border-b border-white/10 pb-5 text-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f867a]">
              Company
            </p>
            <p className="mt-1 font-semibold text-[#f5f0e8]">{company}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f867a]">
              Period
            </p>
            <p className="mt-1 font-semibold text-[#f5f0e8]">{period}</p>
          </div>
        </div>

        <p className="text-base leading-7 text-[#c9c1b6]">{description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-[#e8dfd2]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
