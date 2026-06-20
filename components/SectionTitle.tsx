type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-black leading-tight tracking-normal text-[#f5f0e8] sm:text-5xl">
      {children}
    </h2>
  );
}
