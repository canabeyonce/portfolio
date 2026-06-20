type ProjectCardProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  company,
  period,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 p-6">
      <div className="mb-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{company}</p>
        <p className="text-sm text-gray-500">{period}</p>
      </div>

      <p className="text-gray-700">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
