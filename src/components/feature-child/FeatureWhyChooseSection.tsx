import SectionContainer from "@/common/SectionContainer";
import GridCard from "@/common/GridCard";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { H3 } from "@/common/headings";
import { Paragraph } from "@/common/typography";

interface FeatureWhyChooseSectionProps {
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  description: string;
  items: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  sectionIndex?: number;
  sectionTotal?: number;
  showGapBefore?: boolean;
}

export default function FeatureWhyChooseSection({
  heading,
  description,
  items,
  sectionIndex,
  sectionTotal,
  showGapBefore,
}: FeatureWhyChooseSectionProps) {
  return (
    <SectionContainer
      className="items-center md:items-start"
      sectionLabel="Why Choose"
      sectionIndex={sectionIndex}
      sectionTotal={sectionTotal}
      showGapBefore={showGapBefore}
    >
      <div className="flex md:flex-row flex-col md:gap-16 gap-6 items-center md:items-start px-4 md:px-8 lg:px-12 py-6 md:py-12 lg:py-16 w-full">
        <HeadingWithHighlight
          text={heading.text}
          highlighted={heading.highlighted}
          suffix={heading.suffix}
          className="md:text-left"
          as="h2"
        />
        <Paragraph className="w-full md:text-left">
          {description}
        </Paragraph>
      </div>

      <div className="border-y border-border flex flex-wrap w-full">
        {items.map((item, index) => {
          const isRightColumn = index % 2 === 1;
          const isBottomRow = index >= items.length - 2;

          return (
            <GridCard
              key={index}
              isRightColumn={isRightColumn}
              isBottomRow={isBottomRow}
            >
              <div className="flex flex-col gap-4 md:gap-6 grow items-start min-w-0 w-full">
                <div className="bg-primary border border-primary flex flex-col items-center justify-center rounded-xl shrink-0 w-10 h-10">
                  <p className="font-sans font-medium leading-6 text-card text-base whitespace-nowrap tracking-normal">
                    {item.number}
                  </p>
                </div>
                <div className="flex flex-col items-start w-full gap-4 md:gap-6">
                  <div className="flex items-center pb-1 pt-0 px-0 w-full">
                    <H3>
                      {item.title}
                    </H3>
                  </div>
                  <p className="font-sans font-normal leading-5 text-muted text-sm tracking-normal w-full">
                    {item.description}
                  </p>
                </div>
              </div>
            </GridCard>
          );
        })}
      </div>
    </SectionContainer>
  );
}
