"use client";

import SectionContainer from "@/common/SectionContainer";
import FAQItem from "@/common/FAQItem";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { useState } from "react";

interface FAQItemData {
  question: string;
  answer: string;
}

interface HomeFAQSectionProps {
  showGapBefore?: boolean;
}

export default function HomeFAQSection({ showGapBefore }: HomeFAQSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItemData[] = [
    {
      question: "Does this integrate with my existing Practice Management Software?",
      answer: "Yes! PracticeDilly integrates seamlessly with all major practice management systems including Dentrix, Eaglesoft, Open Dental, and CareStack. Our integration ensures real-time data sync, so patient information, appointments, and records are always up to date across both platforms.",
    },
    {
      question: "Can I keep my current office phone number?",
      answer: "Absolutely. PracticeDilly supports number porting, so you can keep your existing office phone number. We'll handle the porting process, which typically takes 5-7 business days. During the transition, we can set up call forwarding to ensure you don't miss any calls.",
    },
    {
      question: "Is the platform HIPAA compliant?",
      answer: "Yes, PracticeDilly is fully HIPAA compliant. We sign Business Associate Agreements (BAAs) with all healthcare clients and implement comprehensive security measures including encryption, secure storage, access controls, and audit logging. We're regularly audited to maintain compliance standards.",
    },
    {
      question: "How long does it take to get set up?",
      answer: "Most practices are up and running within 15 minutes. Our simple setup process includes connecting your practice management system, configuring your preferences, and training your team. For multi-location groups, setup typically takes 1-2 days to ensure all locations are properly configured.",
    },
    {
      question: "Do you offer contracts or is it month-to-month?",
      answer: "PracticeDilly operates on a month-to-month basis with no long-term contracts. You can cancel anytime without penalties. We believe in earning your business every month, which is why we focus on delivering value rather than locking you into contracts.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionContainer
      className="items-start"
      sectionLabel="FAQ"
      sectionIndex={7}
      sectionTotal={7}
      showGapBefore={showGapBefore}
      gap="gap-0"
    >
      <div className="w-full flex flex-col md:flex-row">
        <div className="border-border border-r border-b flex flex-col gap-4 items-start justify-start px-4 md:px-8 lg:px-16 py-8 md:py-10 lg:py-14 relative shrink-0 w-full md:w-1/2">

          <HeadingWithHighlight
            text="Frequently Asked "
            highlighted="Questions"
          />
          <p className="font-sans font-normal leading-6 text-foreground text-base tracking-normal w-full">
            Everything you need to know about getting started with PracticeDilly.
          </p>
        </div>

        <div className="flex flex-col w-full md:w-1/2" role="region" aria-label="Frequently asked questions">
          {faqItems.map((faq, index) => (
            <FAQItem
              key={index}
              id={`faq-home-${index}`}
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
