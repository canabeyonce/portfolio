type SkillBadgeProps = {
  skill: string;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span
      className="
        rounded-full
        border
        border-gray-300
        px-4
        py-2
        text-sm
        text-gray-700
      "
    >
      {skill}
    </span>
  );
}
