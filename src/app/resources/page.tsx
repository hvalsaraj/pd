"use client";

import Link from "next/link";
import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Button from "@/common/Button";
import GridBackground from "@/components/GridBackground";
import HeroPill from "@/common/HeroPill";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import { getIcon } from "@/utils/iconMap";

const resourceLinks = [
  {
    slug: "article",
    href: "/resources/article",
    icon: "FileText",
    title: "Articles",
    description:
      "Expert insights on dental practice management, patient engagement, and growth strategies from PracticeDilly.",
  },
  {
    slug: "case-study",
    href: "/resources/case-study",
    icon: "Award",
    title: "Case Studies",
    description:
      "Real results from real dental practices using PracticeDilly. See how practices have improved efficiency and grown.",
  },
  {
    slug: "demo-videos",
    href: "/resources/demo-videos",
    icon: "Videotape",
    title: "Demo Videos",
    description:
      "Watch short PracticeDilly demo videos at your own pace. See features in action—appointment reminders, texting, reviews, and more.",
  },
] as const;

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b border-border py-20">
        <GridBackground
          gridSize={1280 / 11}
          contentWidth={960}
          contentPadding={64}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="BookOpen" text="Resources" as="h1" />
            <HeadingWithHighlight
              text="Learn and Grow "
              highlighted="With PracticeDilly"
              as="h2"
            />
            <p className="font-sans text-base leading-6 text-foreground max-w-2xl">
              Articles, case studies, and demo videos to help you get the most
              out of your practice management and patient communication.
            </p>

            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Button href="#resource-cards" variant="secondary" className="px-6">
                Explore Resources
              </Button>
              <Button href="#get-started" variant="primary" className="px-6">
                Get Started - No Setup Fee!
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Cards */}
      <SectionContainer
        id="resource-cards"
        className="items-start"
        sectionLabel="Resources"
        sectionIndex={1}
        sectionTotal={2}
      >
        <div className="w-full py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1280px] mx-auto gap-6 md:gap-8 border-border">
            {resourceLinks.map((resource) => {
              const IconComponent = getIcon(resource.icon);
              return (
                <Link
                  key={resource.slug}
                  href={resource.href}
                  className="group bg-card border border-border flex flex-col gap-6 p-6 rounded-xl hover:border-primary transition-all duration-200 h-full"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-[10px] bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] shrink-0">
                    {IconComponent && (
                      <div className="relative size-6 text-primary">
                        <IconComponent className="w-full h-full" />
                      </div>
                    )}
                  </div>
                  <h2 className="font-heading font-semibold text-lg text-foreground">
                    {resource.title}
                  </h2>
                  <p className="font-sans text-sm leading-6 text-muted flex-1">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2">
                    <span>Explore</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </SectionContainer>
      <TestimonialSection sectionIndex={2} sectionTotal={2} showGapBefore />
      <CTASection showGapBefore={false} />
    </div>
  );
}
