import HeadingWithHighlight from "./HeadingWithHighlight";

interface SectionHeaderProps {
  heading: {
    text: string;
    highlighted?: string;
    suffix?: string;
  };
  description: string;
  className?: string;
  /** Semantic heading level for the section heading (default h2) */
  headingAs?: "h1" | "h2" | "h3";
  /** Tailwind padding-top classes (e.g. "pt-12"). Default: "pt-12". */
  paddingTop?: string;
  /** Tailwind gap classes between heading and description (e.g. "gap-4"). Default: "gap-4". */
  gap?: string;
}

export default function SectionHeader({
  heading,
  description,
  className = "",
  headingAs = "h2",
  paddingTop = "pt-12",
  gap = "gap-4",
}: SectionHeaderProps) {
  return (
    <header className={`flex flex-col ${gap} items-center w-full ${paddingTop} ${className}`}>
      <HeadingWithHighlight
        text={heading.text}
        highlighted={heading.highlighted}
        suffix={heading.suffix}
        className="text-center"
        as={headingAs}
      />
      <p className="font-sans font-normal text-base leading-6 text-foreground text-center px-4 max-w-full">
        {description}
      </p>
    </header>
  );
}
