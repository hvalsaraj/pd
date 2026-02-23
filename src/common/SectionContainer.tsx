import React from "react";
import SectionGap from "./SectionGap";
import SectionIdentifier from "./SectionIdentifier";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Section label (e.g. "Why PracticeDilly"); shown as [01 / 07] UPPERCASE above content */
  sectionLabel?: string;
  /** 1-based section index for [01 / 07] style identifier */
  sectionIndex?: number;
  /** Total sections on page; use with sectionIndex */
  sectionTotal?: number;
  /** When true, renders SectionGap before SectionIdentifier; gap and identifier are grouped with no spacing between them */
  showGapBefore?: boolean;
  /** Tailwind padding-top classes (e.g. "pt-8"). Default: none. */
  paddingTop?: string;
  /** Tailwind padding-bottom classes (e.g. "pb-12 md:pb-16 lg:pb-20"). Default: "pb-12 md:pb-16 lg:pb-20". */
  paddingBottom?: string;
  /** Tailwind gap classes for flex children (e.g. "gap-8 md:gap-10 lg:gap-12"). Default: "gap-8 md:gap-10 lg:gap-12". */
  gap?: string;
}

const DEFAULT_PADDING_BOTTOM = "pb-12 md:pb-16 lg:pb-20";
const DEFAULT_PADDING_TOP = "pt-12 md:pt-16 lg:pt-20";
const DEFAULT_GAP = "gap-8 md:gap-10 lg:gap-12";

export default function SectionContainer({
  children,
  className = "",
  id,
  sectionLabel,
  sectionIndex,
  sectionTotal,
  showGapBefore = false,
  paddingTop = DEFAULT_PADDING_TOP,
  paddingBottom = DEFAULT_PADDING_BOTTOM,
  gap = DEFAULT_GAP,
}: SectionContainerProps) {
  const hasHeader = showGapBefore || sectionLabel;

  return (
    <section
      id={id}
      className={`flex flex-col ${gap} max-w-7xl mx-auto ${paddingTop} ${paddingBottom} border-x ${className}`}
    >
      {hasHeader && (
        <div className="flex flex-col w-full">
          {showGapBefore && <SectionGap />}
          {sectionLabel && (
            <SectionIdentifier
              label={sectionLabel}
              sectionIndex={sectionIndex}
              sectionTotal={sectionTotal}
              className="px-4"
            />
          )}
        </div>
      )}
      {children}
    </section>
  );
}
