import Image from "next/image";
import AnimatedMolar from "@/components/AnimatedMolar";
import BackgroundElements from "@/components/BackgroundElements";
import GridBackground from "@/components/GridBackground";
import WhyPracticeDilly from "@/components/WhyPracticeDilly";
import WaveAnimation from "@/components/WaveAnimation";
import TestimonialSection from "@/components/TestimonialSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ModernPracticeSection from "@/components/ModernPracticeSection";
import FeaturesShowcaseSection from "@/components/FeaturesShowcaseSection";
import PricingSection from "@/components/PricingSection";
import HomeFAQSection from "@/components/HomeFAQSection";
import CTASection from "@/components/CTASection";
import Button from "@/common/Button";
import { H1 } from "@/common/headings";
import { Paragraph, SmallText } from "@/common/typography";
import { Play,Star, Check, Circle, LucideArrowRight } from "lucide-react";
import type { Metadata } from "next";

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

// Avatar images from Unsplash
const img1 = "/images/avatar-1.png";
const img2 = "/images/avatar-2.png";
const img3 = "/images/avatar-3.png";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      {/* <BackgroundElements /> */}
      
      {/* Hero Section */}
      <div className="relative flex min-h-screen items-center justify-center px-4 py-20 lg:px-16 border-b border-border">
        {/* Grid Background */}
        <GridBackground gridSize={1280/11} contentPadding={64} />

        {/* Main Hero Content */}
        <div className="relative z-10 flex w-full max-w-[960px] flex-col items-center gap-8 text-center p-4 md:p-8 lg:p-[64px]">
          {/* Value Prop Pill: Affordable • Feature-Rich • Highest ROI */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 rounded-full border border-border bg-card/50 px-4 py-2 shadow-sm">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary shrink-0" aria-hidden />
              <Paragraph variant="sm" weight="medium">Most affordable</Paragraph>
            </span>
            <span className="hidden sm:inline text-muted" aria-hidden>•</span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary shrink-0" aria-hidden />
              <Paragraph variant="sm" weight="medium">Simple to Implement</Paragraph>
            </span>
            <span className="hidden sm:inline text-muted" aria-hidden>•</span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary shrink-0" aria-hidden />
              <Paragraph variant="sm" weight="medium">Easy to Use</Paragraph>
            </span>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col gap-6 items-center">
            <H1>
              The Patient Engagement Platform{" "}<br/>
              <span className="text-primary">That Pays for Itself</span>
            </H1>
            <div className="mx-auto max-w-[520px] space-y-4 text-center">
              <Paragraph variant="lg" className="leading-7 text-foreground/90">
                Everything your dental practice needs in one place: phones, texting, scheduling, recalls, and patient forms. With AI powered workflows that bind everything together.
              </Paragraph>
              <Paragraph variant="base" className="leading-7 text-muted">
                More features than the big-name tools, at a fraction of the cost.
              </Paragraph>
              <Paragraph variant="base" weight="medium" className="block pt-2 text-foreground">
                Start free. No setup fee.
              </Paragraph>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="primary" href="#get-started" className="px-8 py-4 text-base font-semibold">
              Book Demo
            </Button>
            <Button variant="secondary" href="/pricing" className="px-6 py-3">
              See Pricing
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-warning fill-warning" />
                ))}
              </div>
              <Paragraph variant="sm" weight="medium" className="sm:text-base sm:leading-6 text-center sm:text-left">
                Trusted by <span className="text-primary">500+</span> dental practices
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Left Widget - Action Items */}
        {/* Outer border-radius: 6.4px, inner adjusted to match (no gap between them) */}
        <div className="absolute z-40 left-4 top-[388px] hidden w-[280px] md:w-[328.8px] rounded-[6.4px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.1)] lg:left-[91px] xl:block">
          <div className="overflow-hidden rounded-[6.4px] border border-border bg-card">
            {/* Header */}
            <header className="border-b border-border px-2.5 py-3.5">
              <h2 className="text-sm font-medium leading-[22.4px] text-foreground m-0">Action Items</h2>
              <p className="text-right text-[9.6px] leading-[12.8px] text-muted m-0">Priority To-Dos</p>
            </header>

            {/* Items */}
            <div className="border-b border-border bg-muted/5 px-2.5 py-2.5">
              <div className="flex gap-4">
                <div className="flex items-center pt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div className="flex w-16 flex-col text-xs leading-[12.8px] text-muted">
                  <p className="text-xs leading-[19.2px] text-foreground">11:23 AM</p>
                  <p className="text-[9.6px] leading-[12.8px]">30 mins</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs leading-[19.2px] text-foreground">Follow up: Missed call</p>
                  <p className="text-[9.6px] leading-[12.8px] text-muted">(949) 555-0123 - 11:23 AM</p>
                  <p className="text-[9.6px] leading-[12.8px] text-muted">Patient called about insurance</p>
                </div>
              </div>
            </div>

            <div className="border-b border-border px-2.5 py-2.5">
              <div className="flex gap-4">
                <div className="flex items-center pt-0.5">
                  <Circle className="h-4 w-4 text-muted" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-xs leading-[19.2px] text-foreground">Confirm: Neville L. appointment</p>
                  <p className="text-[9.6px] leading-[12.8px] text-muted">10:30 AM tomorrow</p>
                  <p className="text-[9.6px] leading-[12.8px] text-muted">Crown prep - 90 min blocked</p>
                </div>
              </div>
            </div>

            <div className="border-b border-border px-2.5 py-2.5">
              <div className="flex gap-4">
                <div className="flex items-center pt-0.5">
                  <Circle className="h-4 w-4 text-muted" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-xs leading-[19.2px] text-foreground">Recalls Due</p>
                  <p className="text-[9.6px] leading-[12.8px] text-muted">Cho C. - 6mo Hygiene</p>
                  <p className="text-[9.6px] leading-[12.8px] text-muted">Last visit: 6 months ago</p>
                  <p className="text-[9.6px] leading-[12.8px] text-muted">Preferred: Weekday mornings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Widget - Today's Appointments */}
        {/* Outer border-radius: 6.4px, inner adjusted to match (no gap between them) */}
        <div className="absolute z-50 right-4 top-[467.1px] hidden w-[280px] md:w-[355.2px] rounded-[6.4px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.1)] xl:right-[calc(50%+285px)] xl:block">
          <div className="overflow-hidden rounded-[6.4px] border border-border bg-card">
            {/* Header */}
            <header className="border-b border-border px-2.5 py-3.5">
              <h2 className="text-sm font-medium leading-[22.4px] text-foreground m-0">Today's Appointments</h2>
              <p className="text-right text-[9.6px] leading-[12.8px] text-muted m-0">3 appointments</p>
            </header>

            {/* Appointment 1 */}
            <div className="border-b border-border px-2.5 py-2.5">
              <div className="flex items-center gap-4">
                <div className="flex w-20 flex-col text-xs leading-[12.8px] text-muted">
                  <p className="text-xs leading-[19.2px] text-foreground">09:00 AM</p>
                  <p className="text-[9.6px] leading-[12.8px]">30 mins</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <img alt="" className="h-full w-full object-cover" src={img1} role="presentation" />
                  </div>
                  <div className="flex w-[120px] flex-col gap-0.5">
                    <p className="text-xs leading-[19.2px] text-foreground">Luna L.</p>
                    <p className="text-[9.6px] leading-[12.8px] text-muted">Cleaning & Checkup</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="rounded-[10px] border border-green-300 bg-green-50 dark:border-green-600 dark:bg-green-950 px-1.5 py-1">
                    <p className="text-[8px] leading-[8.8px] text-green-700 dark:text-green-200">Confirmed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment 2 */}
            <div className="border-b border-border px-2.5 py-2.5">
              <div className="flex items-center gap-4">
                <div className="flex w-20 flex-col text-xs leading-[12.8px] text-muted">
                  <p className="text-xs leading-[19.2px] text-foreground">10:30 AM</p>
                  <p className="text-[9.6px] leading-[12.8px]">90 min</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <img alt="" className="h-full w-full object-cover" src={img2} role="presentation" />
                  </div>
                  <div className="flex w-[120px] flex-col gap-0.5">
                    <p className="text-xs leading-[19.2px] text-foreground">Neville L.</p>
                    <p className="text-[9.6px] leading-[12.8px] text-muted">Crown Prep</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="rounded-[10px] border border-warning/30 bg-warning/10 dark:border-warning/50 dark:bg-warning/20 px-1.5 py-1">
                    <p className="text-[8px] leading-[8.8px] text-warning-700 dark:text-warning-200">Pending</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment 3 */}
            <div className="border-b border-border px-2.5 py-2.5">
              <div className="flex items-center gap-4">
                <div className="flex w-20 flex-col text-xs leading-[12.8px] text-muted">
                  <p className="text-xs leading-[19.2px] text-foreground">02:00 PM</p>
                  <p className="text-[9.6px] leading-[12.8px]">1 hr 30 mins</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <img alt="" className="h-full w-full object-cover" src={img3} role="presentation" />
                  </div>
                  <div className="flex w-[120px] flex-col gap-0.5">
                    <p className="text-xs leading-[19.2px] text-foreground">Ginny W.</p>
                    <p className="text-[9.6px] leading-[12.8px] text-muted">Root Canal Follow-up</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="rounded-[10px] border border-blue-300 bg-blue-50 dark:border-blue-600 dark:bg-blue-950 px-1.5 py-1">
                    <p className="text-[8px] leading-[8.8px] text-blue-700 dark:text-blue-200">Checked out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyPracticeDilly />
      <div className="flex justify-center py-10">
        <Button variant="primary" href="#get-started" className="px-8 py-3.5">Book Demo</Button>
      </div>
      <TestimonialSection />
      <div className="flex justify-center py-10">
        <Button variant="primary" href="#get-started" className="px-8 py-3.5">Book Demo</Button>
      </div>
      <IntegrationsSection />
      <div className="flex justify-center py-10">
        <Button variant="primary" href="#get-started" className="px-8 py-3.5">Book Demo</Button>
      </div>
      <ModernPracticeSection />
      <div className="flex justify-center py-10">
        <Button variant="primary" href="#get-started" className="px-8 py-3.5">Book Demo</Button>
      </div>
      <FeaturesShowcaseSection />
      <div className="flex justify-center py-10">
        <Button variant="primary" href="#get-started" className="px-8 py-3.5">Book Demo</Button>
      </div>
      <PricingSection />
      <div className="flex justify-center py-10">
        <Button variant="primary" href="#get-started" className="px-8 py-3.5">Book Demo</Button>
      </div>
      <HomeFAQSection />
      <CTASection />
      
      {/* <WaveAnimation /> */}
    </div>
  );
}
