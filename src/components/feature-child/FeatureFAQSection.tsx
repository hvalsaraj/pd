"use client";

import SectionContainer from "@/common/SectionContainer";
import FAQItem from "@/common/FAQItem";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { useState } from "react";
import { Paragraph } from "@/common/typography";

interface FAQItemData {
  question: string;
  answer: string;
}

interface FeatureFAQSectionProps {
  heading: {
    text: string;
    highlighted: string;
  };
  description: string;
  items: FAQItemData[];
  sectionIndex?: number;
  sectionTotal?: number;
  showGapBefore?: boolean;
}

export default function FeatureFAQSection({
  heading,
  description,
  items,
  sectionIndex,
  sectionTotal,
  showGapBefore,
}: FeatureFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionContainer
      className="items-center md:items-start w-full"
      sectionLabel="FAQ"
      sectionIndex={sectionIndex}
      sectionTotal={sectionTotal}
      showGapBefore={showGapBefore}
      gap=""
    >
      <div className="w-full flex flex-col md:flex-row">
        <div className="border-border border-r border-b flex flex-col gap-4 items-center md:items-start justify-center md:justify-start px-4 md:px-8 lg:px-12 py-8 md:py-10 lg:py-14 relative shrink-0 w-full md:w-1/2">
          <HeadingWithHighlight
            text={heading.text}
            highlighted={heading.highlighted}
            className="text-center md:text-left"
            as="h2"
          />
          <Paragraph className="w-full text-center md:text-left">
            {description}
          </Paragraph>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          {items.map((faq, index) => (
            <FAQItem
              key={index}
              id={`faq-feature-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
