"use client";

import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Button from "@/common/Button";
import FeatureCard from "@/common/FeatureCard";
import integrationsData from "@/data/integrations.json";
import TestimonialSection from "@/components/TestimonialSection";
import GridBackground from "@/components/GridBackground";
import CTASection from "@/components/CTASection";
import HeroPill from "@/common/HeroPill";

export default function IntegrationsPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b border-border py-20">
        {/* Grid Background */}
        <GridBackground gridSize={1280/11} contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="Plug" text="Integrations" as="h1" />
            <HeadingWithHighlight
              text="Seamlessly Integrated "
              highlighted="With Your Practice"
              as="h2"
            />
            <p className="font-sans text-base leading-6 text-foreground max-w-2xl">
              Connect PracticeDilly with your existing practice management system for a unified workflow. 15-minute setup, no contracts, 30-day free trial.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Button href="#get-started" variant="primary" className="px-6">
                Get Started - No Setup Fee!
              </Button>
              <Button href="tel:+19494075907" variant="secondary" className="px-6">
                Call (949) 407-5907
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Integrations Grid */}
      <SectionContainer
        className="items-start"
        sectionLabel="Integrations"
        sectionIndex={1}
        sectionTotal={2}
      >
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1280px] mx-auto border-t border-border">
            {integrationsData.map((integration) => (
              <FeatureCard
                key={integration.slug}
                image={integration.hero.image}
                title={`${integration.hero.heading.highlighted} Integration`}
                description={integration.hero.description}
                href={`/integrations/${integration.slug}`}
                category={integration.hero.category.text}
                // badges={integration.hero.badges}
                variant="detailed"
              />
            ))}
          </div>
        </div>
      </SectionContainer>
      {/* Reusable Sections from Homepage */}
      <TestimonialSection sectionIndex={2} sectionTotal={2} showGapBefore />
      <CTASection showGapBefore={false} />
    </div>
  );
}
