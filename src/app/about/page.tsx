import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Button from "@/common/Button";
import HeroPill from "@/common/HeroPill";
import GridBackground from "@/components/GridBackground";
import CTACard from "@/common/CTACard";
import TestimonialSection from "@/components/TestimonialSection";
import { Heart, Quote, Smartphone, AlertCircle, Infinity } from "lucide-react";
import type { Metadata } from "next";
import ProductTimeline from "@/components/ProductTimeline";

export const metadata: Metadata = {
  title: "About Us | PracticeDilly - Our Journey & Mission",
  description: "Learn about PracticeDilly's journey from a mobile app in 2014 to a full-fledged patient engagement platform. Discover our customer-centric approach and commitment to dental practices.",
  alternates: {
    canonical: "https://practicedilly.com/about",
  },
};

export default function AboutPage() {
  const storySections = [
    {
      year: "2014",
      title: "In 2014",
      description: "Pavan and his team developed a mobile app for his daughter's dentist Dr. Mike Shannon's two dental offices. They built a mobile app that patients can use to pay their bills, book appointments, etc.",
      icon: Smartphone,
    },
    {
      title: "Big Setback",
      description: "Dr. Shannon and his team members loved the patient mobile app. But we had a challenge with patient adoption. Not many patients were interested to download and use the app. So instead of putting our focus on what we think was cool, we had to pivot to what Dr. Shannon's office needed.",
      icon: AlertCircle,
    },
    {
      title: "Customer-Centricity",
      description: "As part of our approach to go more customer-focused, we looked into how we can automate certain things and save time for the staff at Dr. Shannon's offices. And automated appointment reminders (email, text, auto call) & two-way texting were born.",
      icon: Heart,
    },
    {
      title: "We Never Said Never",
      description: "Any feature that's requested by our clients, we added to our product and will continue to do so. As a result, we have become a full-fledged patient engagement platform. And all of our success has become our customer's success.",
      icon: Infinity,
    },
  ];

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b border-border py-20">
        <GridBackground gridSize={1280/11} contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="Users" text="About Us" as="h1" />
            <HeadingWithHighlight
              text="Our Journey & "
              highlighted="Mission"
              className="text-center"
              as="h2"
            />
            <p className="font-sans text-base leading-6 text-foreground max-w-2xl">
              From a simple mobile app to a comprehensive patient engagement platform, discover how PracticeDilly evolved by listening to our customers and building what they truly need.
            </p>

          </div>
        </div>
      </div>

      {/* Story Sections */}
      <SectionContainer
        className="items-center"
        sectionLabel="Our Journey"
        sectionIndex={1}
        sectionTotal={5}
      >
        <div className="w-full px-4 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[37px] items-start w-full max-w-6xl mx-auto">
            {storySections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={index}
                  className="border border-border flex flex-col items-start overflow-clip p-7 rounded-xl shrink-0 w-full h-full bg-card"
                >
                  <div className="flex flex-col items-start w-full">
                    {/* {section.year && (
                      <div className="flex items-center pb-4 pt-0 px-0">
                        <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center px-3 py-1.5 rounded-lg shrink-0">
                          <span className="font-heading font-semibold text-sm text-primary">
                            {section.year}
                          </span>
                        </div>
                      </div>
                    )} */}
                    <div className="flex items-center pb-5 pt-0 px-0">
                      <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center p-2 rounded-[10px] shrink-0">
                        {IconComponent && (
                          <div className="relative shrink-0 size-6 text-primary">
                            <IconComponent className="w-full h-full" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-start pb-3 pt-0 px-0 w-full">
                      <h3 className="font-sans font-semibold leading-6 shrink-0 text-foreground text-lg tracking-normal">
                        {section.title}
                      </h3>
                    </div>
                    <p className="font-sans font-normal leading-6 text-muted text-base tracking-normal w-full">
                      {section.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContainer>
      {/* CEO Quote Section */}
      <SectionContainer
        className="items-center"
        sectionLabel="CEO Quote"
        sectionIndex={2}
        sectionTotal={5}
        showGapBefore
      >
        <div className="w-full px-4 lg:px-16">
          <div className="flex flex-col gap-8 items-center max-w-4xl mx-auto">
            <div className="border border-border rounded-2xl bg-card p-8 md:p-12 w-full">
              <div className="flex flex-col gap-6 items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)]">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                <blockquote className="font-sans font-normal text-lg md:text-xl leading-7 md:leading-8 text-foreground max-w-3xl">
                  "Listen to your customers. They'll guide you on how you should build your product, how you should market it, and everything in between."
                </blockquote>
                <div className="flex flex-col gap-1 items-center pt-4 border-t border-border w-full">
                  <p className="font-sans font-semibold text-base text-foreground">
                    Pavan Chakka
                  </p>
                  <p className="font-sans font-normal text-sm text-muted">
                    CEO, PracticeDilly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      {/* Product Journey Timeline */}
      <SectionContainer
        className="items-center"
        sectionLabel="Product Journey"
        sectionIndex={3}
        sectionTotal={5}
        showGapBefore
      >
        <div className="w-full px-4 lg:px-16">
          <div className="flex flex-col gap-10 items-center max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 items-center">
              <HeadingWithHighlight
                text="Product "
                highlighted="Journey"
                className="text-center"
              />
              <p className="font-sans font-normal text-base text-foreground text-center max-w-2xl">
                Our evolution from a simple mobile app to a comprehensive patient engagement platform
              </p>
            </div>
            <ProductTimeline />
          </div>
        </div>
      </SectionContainer>
      {/* California Section */}
      <SectionContainer
        className="items-center"
        sectionLabel="California"
        sectionIndex={4}
        sectionTotal={5}
        showGapBefore
      >
        <div className="w-full px-4 lg:px-16">
          <div className="flex flex-col gap-6 items-center max-w-4xl mx-auto">
            <div className="border border-border rounded-xl bg-card p-8 md:p-12 w-full text-center">
              <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)]">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <HeadingWithHighlight
                  text="Proudly made in "
                  highlighted="California"
                  className="text-center"
                  as="h3"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      {/* Testimonial Section */}
      <TestimonialSection sectionIndex={5} sectionTotal={5} showGapBefore />

      {/* CTA Section */}
      <CTACard
        headingHighlighted="Ready to Join"
        headingSuffix=" Our Journey?"
        description="Experience the patient engagement platform built by listening to dental practices like yours. Start your 30-day free trial today."
        buttonText="Get Started Free"
      />
    </div>
  );
}
