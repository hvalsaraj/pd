import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { H3 } from "@/common/headings";
import { getIcon } from "@/utils/iconMap";

interface IntegrationWhyChooseSectionProps {
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  sectionIndex?: number;
  sectionTotal?: number;
  showGapBefore?: boolean;
}

export default function IntegrationWhyChooseSection({
  heading,
  items,
  sectionIndex,
  sectionTotal,
  showGapBefore,
}: IntegrationWhyChooseSectionProps) {
  return (
    <SectionContainer
      className="items-start border-t"
      sectionLabel="Why Choose"
      sectionIndex={sectionIndex}
      sectionTotal={sectionTotal}
      showGapBefore={showGapBefore}
    >
      <div className="flex flex-col gap-4 items-start px-4 md:px-8 lg:px-16 w-full max-w-[597px]">
        <HeadingWithHighlight
          text={heading.text}
          highlighted={heading.highlighted}
          suffix={heading.suffix}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start w-full px-4 md:px-8 lg:px-16 pb-8 md:pb-12 lg:pb-16">
        {items.map((item, index) => {
          const IconComponent = getIcon(item.icon);
          
          return (
            <div
              key={index}
              className="flex flex-col gap-4 items-start"
            >
              <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center p-2 rounded-[10px] shrink-0">
                {IconComponent && (
                  <div className="relative shrink-0 size-6 text-primary">
                    <IconComponent className="w-full h-full" />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 items-start">
                <H3 className="tracking-normal">
                  {item.title}
                </H3>
                <p className="font-sans font-normal leading-5 text-muted text-sm tracking-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
