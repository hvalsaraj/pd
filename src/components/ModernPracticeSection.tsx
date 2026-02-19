"use client";

import { useState } from "react";
import Link from "next/link";
import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import { getIcon } from "@/utils/iconMap";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "@/common/Button";

const categories = [
  {
    id: "attract",
    label: "Attract Patients",
    title: "Bring in more new patients every day",
    description:
      "Turn every missed call into a booked appointment. Smart phones, automated reviews, and online scheduling work together so your practice never stops growing.",
    features: [
      {
        slug: "phones",
        icon: "PhoneCall",
        name: "Phones",
        tagline: "Never miss a patient call",
        description:
          "AI powered call routing, voicemail transcription, and 24/7 handling that captures every opportunity.",
      },
      {
        slug: "reviews",
        icon: "Star",
        name: "Online Reviews",
        tagline: "Build your reputation on autopilot",
        description:
          "Automatically request five star reviews after positive visits and manage everything from one dashboard.",
      },
      {
        slug: "scheduling",
        icon: "CalendarCheck",
        name: "Online Scheduling",
        tagline: "Open 24/7, even when you're not",
        description:
          "Let patients book from your website or Google any time. Syncs with your PMS in real time.",
      },
    ],
  },
  {
    id: "engage",
    label: "Engage & Retain",
    title: "Keep patients connected and coming back",
    description:
      "Meet patients where they are with the channels they actually use. Automated reminders, instant texting, and paperless forms make every touchpoint effortless.",
    features: [
      {
        slug: "reminders",
        icon: "Bell",
        name: "Smart Reminders",
        tagline: "Cut no shows by up to 80%",
        description:
          "Personalized reminder sequences via text, email, and voice that keep your schedule full.",
      },
      {
        slug: "texting",
        icon: "MessageCircle",
        name: "Two Way Texting",
        tagline: "98% open rate",
        description:
          "HIPAA compliant texting that reaches patients instantly. Confirm appointments, answer questions, send updates.",
      },
      {
        slug: "email-marketing",
        icon: "Mail",
        name: "Email Marketing",
        tagline: "Beautiful emails, zero design skills",
        description:
          "Create stunning recall and promotional campaigns that bring patients back through the door.",
      },
      {
        slug: "digital-forms",
        icon: "Clipboard",
        name: "Digital Forms",
        tagline: "Paperless from day one",
        description:
          "Patients complete intake on their phone before they walk in. Less clipboard, more chairtime.",
      },
    ],
  },
  {
    id: "revenue",
    label: "Grow Revenue",
    title: "Get paid faster and spot every opportunity",
    description:
      "One tap payments and AI powered call insights designed to improve your bottom line and free up your team to focus on what matters.",
    features: [
      {
        slug: "text-to-pay",
        icon: "CreditCard",
        name: "Text to Pay",
        tagline: "Patients pay in seconds",
        description:
          "Send payment links via text or email. Patients pay from anywhere, on any device. No more chasing balances.",
      },
      {
        slug: "call-intelligence",
        icon: "Brain",
        name: "Call Intelligence",
        tagline: "AI that finds missed revenue",
        description:
          "Analyze every call for sentiment, missed opportunities, and coaching moments. See what's really happening on the phones.",
      },
    ],
  },
];

function FeatureCard({
  slug,
  icon,
  name,
  tagline,
  description,
}: {
  slug: string;
  icon: string;
  name: string;
  tagline: string;
  description: string;
}) {
  const IconComponent = getIcon(icon);

  return (
    <Link
      href={`/features/${slug}`}
      className="group relative flex flex-col gap-5 p-6 rounded-xl border border-border bg-card transition-all duration-200 hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(94,72,240,0.15)]"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-center p-2.5 rounded-[10px] bg-primary/10 border border-primary/20">
          {IconComponent && (
            <IconComponent className="size-5 text-primary" aria-hidden />
          )}
        </div>
        <ArrowUpRight
          className="size-4 text-muted opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary"
          aria-hidden
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <h4 className="font-heading font-medium text-base text-foreground">
          {name}
        </h4>
        <span className="font-sans text-xs font-semibold tracking-wide uppercase text-primary">
          {tagline}
        </span>
      </div>

      <p className="font-sans text-sm leading-relaxed text-muted">{description}</p>
    </Link>
  );
}

export default function ModernPracticeSection() {
  const [activeTab, setActiveTab] = useState("attract");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  const gridClass = (() => {
    const count = activeCategory.features.length;
    if (count <= 2) return "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto";
    if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2";
  })();

  return (
    <SectionContainer className="items-center border-t border-border">
      <div className="w-full flex flex-col items-center">
        <SectionHeader
          heading={{
            text: "Everything Your Practice ",
            highlighted: "Needs",
          }}
          description="One platform built for teams who want results, not more software to manage."
          className="max-w-[565px]"
        />

        {/* Tab Bar */}
        <nav className="flex justify-center px-4 mt-8 md:mt-10" aria-label="Feature categories">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-border bg-card shadow-sm">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted hover:text-foreground"
                  }`}
                  aria-pressed={isActive}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Tab Content */}
        <div className="w-full mt-10 md:mt-14 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Category Header */}
            <div className="flex flex-col gap-3 items-center text-center mb-8 md:mb-10 max-w-2xl mx-auto">
              <h3 className="font-heading font-medium text-xl md:text-2xl lg:text-[28px] lg:leading-[34px] text-foreground">
                {activeCategory.title}
              </h3>
              <p className="font-sans text-sm md:text-base leading-6 text-muted max-w-lg">
                {activeCategory.description}
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className={`grid gap-4 md:gap-5 ${gridClass}`}>
              {activeCategory.features.map((feature) => (
                <FeatureCard key={feature.slug} {...feature} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-14">
          <Button
            variant="secondary"
            href="/features"
            icon={<ArrowRight className="size-4" />}
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
