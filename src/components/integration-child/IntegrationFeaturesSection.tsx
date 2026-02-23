import SectionContainer from "@/common/SectionContainer";
import FeatureCard from "@/common/FeatureCard";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";

interface IntegrationFeaturesSectionProps {
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  description: string;
  items: Array<{
    icon: string;
    title: string;
    description: string;
    benefits?: string[];
    featureSlug?: string;
    image?: string;
  }>;
  sectionLabel?: string;
  sectionIndex?: number;
  sectionTotal?: number;
  showGapBefore?: boolean;
}

export default function IntegrationFeaturesSection({
  heading,
  description,
  items,
  sectionLabel = "Features",
  sectionIndex,
  sectionTotal,
  showGapBefore,
}: IntegrationFeaturesSectionProps) {
  return (
    <SectionContainer
      className="items-start "
      sectionLabel={sectionLabel}
      sectionIndex={sectionIndex}
      sectionTotal={sectionTotal}
      showGapBefore={showGapBefore}
    >
      <div className="flex flex-col gap-4 items-start w-full max-w-2/3 mb-8 md:mb-10 lg:mb-12 px-4 md:px-8 lg:px-16">
        <HeadingWithHighlight
          text={heading.text}
          highlighted={heading.highlighted}
          suffix={heading.suffix}
        />
        <p className="font-sans font-normal leading-6 text-foreground text-base tracking-normal w-full">
          {description}
        </p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1280px] mx-auto border-t border-border">
          {items.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              image={item.image}
              title={item.title}
              description={item.description}
              href={item.featureSlug ? `/features/${item.featureSlug}` : undefined}
              badges={item.benefits?.slice(0, 3)}
              variant="detailed"
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
