type SkillBadgeProps = {
  skill: string;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span
      className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-[#e8dfd2]"
    >
      {skill}
    </span>
  );
}
