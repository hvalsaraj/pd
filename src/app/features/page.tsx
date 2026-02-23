"use client";

import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Button from "@/common/Button";
import FeatureCard from "@/common/FeatureCard";
import featuresData from "@/data/features.json";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import GridBackground from "@/components/GridBackground";
import HeroPill from "@/common/HeroPill";

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b border-border py-20">
        {/* Grid Background */}
        <GridBackground gridSize={1280/11} contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-3xl mx-auto">
            <HeroPill icon="Zap" text="Features" as="h1" />
            <HeadingWithHighlight
              text="Everything You Need to "
              highlighted="Run a Modern Practice"
              as="h2"
            />
            <p className="font-sans text-base leading-6 text-foreground max-w-2xl">
              Comprehensive tools designed to modernize every aspect of your practice management and patient communication.
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

      {/* Features Grid */}
      <SectionContainer
        className="items-start"
        sectionLabel="Features"
        sectionIndex={1}
        sectionTotal={2}
      >
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1280px] mx-auto border-t border-border">
            {featuresData.map((feature) => (
              <FeatureCard
                key={feature.slug}
                image={feature.hero.image}
                title={feature.hero.category.text}
                description={feature.hero.description}
                href={`/features/${feature.slug}`}
                category={feature.hero.category.text}
                badges={feature.hero.badges}
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
