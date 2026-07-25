type SkillBadgeProps = {
  skill: string;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span
      className="rounded-md border border-[color:var(--site-border)] bg-[var(--site-chip-bg)] px-4 py-2 text-sm font-medium text-[var(--site-chip-fg)]"
    >
      {skill}
    </span>
  );
}
