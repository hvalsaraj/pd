import SectionContainer from '@/common/SectionContainer';
import React from 'react'
import { Check } from 'lucide-react';
import Button from '@/common/Button';
import HeadingWithHighlight from '@/common/HeadingWithHighlight';
import IntegrationAnimation from './IntegrationAnimation';
import IntegrationTimeSVG from './IntegrationTimeSVG';
import MeshGradientCanvas from '../MeshGradientCanvas';

interface IntegrationTimeSectionProps {
  stat: {
    value: string;
    label: string;
    description: string;
  };
  primaryCta: {
    text: string;
    href: string;
  };
  sectionLabel?: string;
  sectionIndex?: number;
  sectionTotal?: number;
  showGapBefore?: boolean;
}

export default function IntegrationTimeSection({
  stat,
  primaryCta,
  sectionLabel = "",
  sectionIndex,
  sectionTotal,
  showGapBefore,
}: IntegrationTimeSectionProps) {
  return (
    <SectionContainer
      className="relative"
      sectionLabel={sectionLabel}
      sectionIndex={sectionIndex}
      sectionTotal={sectionTotal}
      showGapBefore={showGapBefore}

    >





      <div className="relative md:px-12 md:py-20 py-12 px-4">
        <MeshGradientCanvas
          source={{
            type: "mesh",
            points: [
              { x: 0.2, y: 0.3, color: "#5e48f0" },
              { x: 0.8, y: 0.2, color: "#a78bfa" },
              { x: 0.5, y: 0.8, color: "#f0abfc" },
            ],
          }}
          className="h-full absolute top-0 left-0 w-full z-0!"
        />
        <div className="flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 relative z-10 bg-card rounded-2xl">


          <div className="flex flex-col items-start w-full md:w-1/2 gap-4 px-4 md:px-0 py-8 md:py-8">
            {/* <span className="font-sans font-medium text-5xl leading-[48px] text-primary">{stat.value}</span> */}
            <div className="flex items-center gap-1.5 font-sans font-medium text-xs bg-primary/20 text-primary border border-primary pl-2 pr-2.5 py-1.5 rounded-full">

              <Check className="w-4 h-4" /> <span>No Setup Fee</span>
            </div>
            <HeadingWithHighlight text="" highlighted={stat.value} suffix={` ${stat.label}`} />
            <p className="font-sans font-normal text-base leading-6 text-muted">
              {stat.description}
            </p>

            <div className="flex">


              <Button href={primaryCta.href} variant="primary" className="flex items-center justify-center w-full sm:w-auto">
                {primaryCta.text}
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 w-full items-center justify-center">
            <IntegrationTimeSVG></IntegrationTimeSVG>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
