import Image from "next/image";
import AnimatedMolar from "@/components/AnimatedMolar";
import BackgroundElements from "@/components/BackgroundElements";
import GridBackground from "@/components/GridBackground";
import WhyPracticeDilly from "@/components/WhyPracticeDilly";
import WaveAnimation from "@/components/WaveAnimation";
import TestimonialSection from "@/components/TestimonialSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ModernPracticeSection from "@/components/ModernPracticeSection";
import IntegrationFeaturesSection from "@/components/integration-child/IntegrationFeaturesSection";
import featuresData from "@/data/features.json";
import PricingSection from "@/components/PricingSection";
import HomeFAQSection from "@/components/HomeFAQSection";
import CTASection from "@/components/CTASection";
import CustomerLogosSlider from "@/components/CustomerLogosSlider";
import SectionContainer from "@/common/SectionContainer";
import Button from "@/common/Button";
import { H1 } from "@/common/headings";
import { Paragraph, SmallText } from "@/common/typography";
import type { Metadata } from "next";
import FeaturesShowcaseSection from "@/components/FeaturesShowcaseSection";
import PatientEngagementDashboardHero from "@/components/PatientEngagementDashboardHero";

export const metadata: Metadata = {
  title: "AI-Powered Patient Communication for Dental Practices | PracticeDilly",
  description: "Combine phones, texting, scheduling, and recalls in one AI-powered communication hub built for multi-location dental groups and healthcare practices. Trusted by 500+ practices.",
  keywords: [
    "dental practice management",
    "patient communication",
    "dental software",
    "appointment reminders",
    "patient texting",
    "online scheduling",
    "dental practice automation",
    "HIPAA compliant",
    "dental practice software",
    "patient engagement"
  ],
  alternates: {
    canonical: "https://practicedilly.com",
  },
  openGraph: {
    title: "AI-Powered Patient Communication for Dental Practices | PracticeDilly",
    description: "Combine phones, texting, scheduling, and recalls in one AI-powered communication hub built for multi-location dental groups and healthcare practices.",
    url: "https://practicedilly.com",
    siteName: "PracticeDilly",
    images: [
      {
        url: "https://practicedilly.com/og-images/home.jpg",
        width: 1200,
        height: 630,
        alt: "PracticeDilly - AI-Powered Patient Communication for Dental Practices",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Patient Communication for Dental Practices | PracticeDilly",
    description: "Combine phones, texting, scheduling, and recalls in one AI-powered communication hub built for multi-location dental groups and healthcare practices.",
    images: ["https://practicedilly.com/og-images/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      {/* <BackgroundElements /> */}

      {/* Hero Section */}
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 lg:px-16 border-b border-border">

        {/* Patient Engagement dashboard (background) */}
        <div className="absolute top-0  left-1/2 inset-0 z-1 flex items-center justify-center pointer-events-none">
          <div className="scale-100 origin-center">
            <PatientEngagementDashboardHero />
          </div>
        </div>

        {/* Grid Background */}
        <GridBackground gridSize={1279 / 11} contentPadding={64} />



        {/* Main Hero Content */}
        <div className="relative z-10 flex w-full max-w-[960px] flex-col items-center gap-10 text-center p-4 md:p-8 lg:p-[64px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/6 px-4 py-2 dark:bg-primary/10">
            <Paragraph variant="sm" className="text-muted-foreground">
              Most affordable
            </Paragraph>
            <span className="text-muted-foreground/60" aria-hidden="true">•</span>
            <Paragraph variant="sm" className="text-muted-foreground">
              Simple to Implement
            </Paragraph>
            <span className="text-muted-foreground/60" aria-hidden="true">•</span>
            <Paragraph variant="sm" className="text-muted-foreground">
              Easy to Use
            </Paragraph>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col gap-7 items-center">
            <H1 className="max-w-[720px] text-balance">
              The Patient Engagement Platform{" "}
              <br className="hidden sm:block" />
              <span className="text-primary bg-clip-text">That Pays for Itself</span>
            </H1>
            <Paragraph className="md:max-w-[550px] text-muted-foreground/90 text-base md:text-lg leading-relaxed">
              Everything your dental practice needs in one place: phones, texting, scheduling, recalls, and patient forms. With AI powered workflows that bind everything together.
            </Paragraph>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Button variant="primary" href="/contact">
              Book Demo
            </Button>
            <Button variant="secondary" href="/pricing">
              See Pricing
            </Button>
          </div>
          <Paragraph variant="sm" className="text-muted-foreground/80 text-center">
            Start free. No setup fee.
          </Paragraph>
        </div>
      </div>

      <SectionContainer
        paddingTop="pt-0"
        paddingBottom="pb-0"
        className="-mt-px border-t-0 border-b border-border"
      >
        <CustomerLogosSlider />
      </SectionContainer>

      <WhyPracticeDilly showGapBefore />
      <TestimonialSection showGapBefore />
      <IntegrationsSection showGapBefore />
      {/* <ModernPracticeSection showGapBefore /> */}

      <IntegrationFeaturesSection
        heading={{
          text: "Efficiently Automate Your ",
          highlighted: "Front Office",
          suffix: "",
        }}
        description="PracticeDilly provides comprehensive tools designed to automate and modernize every aspect of your practice management."
        items={featuresData.map((f) => ({
          icon: f.hero?.category?.icon ?? "",
          title: [f.hero?.heading?.text, f.hero?.heading?.highlighted, f.hero?.heading?.suffix].filter(Boolean).join("").trim() || f.slug,
          description: f.hero?.description ?? "",
          benefits: f.hero?.badges,
          featureSlug: f.slug,
          image: f.hero?.image,
        }))}
        sectionLabel="Features"
        sectionIndex={6}
        sectionTotal={7}
        showGapBefore
      />
      <FeaturesShowcaseSection showGapBefore />

      <PricingSection showGapBefore />
      <HomeFAQSection showGapBefore />
      <CTASection showGapBefore={false} />

      {/* <WaveAnimation /> */}
    </div>
  );
}
