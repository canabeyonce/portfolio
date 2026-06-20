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
    <div className="rounded-xl border border-gray-200 p-6">
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{company}</p>
        </div>

        <p className="text-sm text-gray-500">{period}</p>
      </div>

      <p className="text-gray-700">{description}</p>

      <p className="mt-4 text-sm text-gray-500">{technologies.join(" • ")}</p>
    </div>
  );
}
