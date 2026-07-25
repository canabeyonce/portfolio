type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-black leading-tight tracking-normal text-[var(--site-fg)] sm:text-5xl">
      {children}
    </h2>
  );
}
