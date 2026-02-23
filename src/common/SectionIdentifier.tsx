interface SectionIdentifierProps {
  /** 1-based section index (e.g. 1 for first section). Omit to show only label. */
  sectionIndex?: number;
  /** Total number of sections on the page. Required when sectionIndex is set. */
  sectionTotal?: number;
  /** Label shown in uppercase, light gray (e.g. "Why PracticeDilly" → "WHY PRACTICEDILLY") */
  label: string;
  className?: string;
  /** Tailwind padding-top classes (e.g. "pt-8"). Default: "pt-8". */
  paddingTop?: string;
  /** Tailwind padding-bottom classes (e.g. "pb-8"). Default: "pb-8". */
  paddingBottom?: string;
  /** Tailwind gap classes between index and label (e.g. "gap-x-2"). Default: "gap-x-2". */
  gap?: string;
}

/**
 * Section identifier shown above section content: [01 / 07] WHY PRACTICEDILLY
 * Numbers and slash in primary (purple); label in uppercase, muted.
 */
export default function SectionIdentifier({
  sectionIndex,
  sectionTotal,
  label,
  className = "",
  paddingTop = "pt-8",
  paddingBottom = "pb-8",
  gap = "gap-x-2",
}: SectionIdentifierProps) {
  const showIndex =
    sectionIndex != null && sectionTotal != null && sectionTotal > 0;
  const indexStr =
    showIndex && sectionIndex != null && sectionTotal != null
      ? String(sectionIndex).padStart(2, "0")
      : "";
  const totalStr =
    showIndex && sectionTotal != null
      ? String(sectionTotal).padStart(2, "0")
      : "";

  return (
    <div
      className={`flex flex-wrap items-baseline ${gap} font-sans text-sm text-muted leading-5 border-y w-full ${paddingTop} ${paddingBottom} px-6 font-semibold ${className}`}
      aria-hidden="true"
    >
      {showIndex && (
        <span>
        [
        <span className="text-primary">
          {indexStr} 
        </span>
        / {totalStr}]
        </span>
      )}
      <span className="uppercase tracking-normal">{label}</span>
    </div>
  );
}
