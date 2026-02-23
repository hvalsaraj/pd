import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Button from "@/common/Button";
import { ArrowRight } from "lucide-react";
import React from "react";

interface CTACardProps {
  headingText?: string;
  headingHighlighted: string;
  headingSuffix?: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  buttonOnClick?: () => void;
  sectionClassName?: string;
  cardClassName?: string;
  headingAs?: "h1" | "h2" | "h3";
  showGapBefore?: boolean;
}

export default function CTACard({
  headingText = "",
  headingHighlighted,
  headingSuffix,
  description,
  buttonText = "Get Started",
  buttonHref,
  buttonOnClick,
  sectionClassName = "",
  cardClassName = "",
  headingAs = "h2",
  showGapBefore,
}: CTACardProps) {
  return (
    <SectionContainer className={`items-center bg-primary ${sectionClassName}`} showGapBefore={showGapBefore}>
      <div className="w-full px-4 lg:px-16">
        <div className={`relative flex flex-col gap-8 items-center max-w-4xl mx-auto py-12 md:py-16 px-6 md:px-8 lg:px-12 rounded-2xl border border-border bg-linear-to-b from-card to-card ${cardClassName}`}>
          <div className="relative z-10 flex flex-col gap-6 items-center text-center">
            <HeadingWithHighlight
              text={headingText}
              highlighted={headingHighlighted}
              suffix={headingSuffix}
              className="text-center"
              as={headingAs}
            />
            <p className="font-sans font-normal text-base text-center max-w-[560px]">
              {description}
            </p>
            <Button 
              variant="primary"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
              className="px-8 py-3 text-base font-medium"
              href={buttonHref}
              onClick={buttonOnClick}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
