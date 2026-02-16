"use client";

import { useState } from "react";
import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { getIcon } from "@/utils/iconMap";

export interface FeatureTabItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureTab {
  id: string;
  label: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  features: FeatureTabItem[];
}

interface PhonesFeatureTabsProps {
  heading: { text: string; highlighted: string; suffix?: string };
  description: string;
  tabs: FeatureTab[];
}

export default function PhonesFeatureTabs({
  heading,
  description,
  tabs,
}: PhonesFeatureTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? "");

  const activeTab = tabs.find((t) => t.id === activeTabId) ?? tabs[0];

  return (
    <section className="border-b border-border bg-primary/[0.06] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col gap-5 max-w-2xl">
          <HeadingWithHighlight
            text={heading.text}
            highlighted={heading.highlighted}
            suffix={heading.suffix ?? ""}
            className="text-center md:text-left"
            as="h2"
          />
          <p className="font-sans text-base leading-6 text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Tab bar: pill group */}
        <div
          className="flex flex-wrap gap-1.5 p-1.5 rounded-[22px] bg-card border border-border w-fit max-w-full"
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`shrink-0 font-heading font-medium text-sm px-5 py-2.5 rounded-[18px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                activeTabId === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:bg-primary/10"
              }`}
              aria-selected={activeTabId === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active tab panel */}
        <div
          id={activeTab ? `panel-${activeTab.id}` : undefined}
          role="tabpanel"
          aria-labelledby={activeTab ? `tab-${activeTab.id}` : undefined}
          className="flex flex-col gap-8 md:gap-10"
        >
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground tracking-tight">
              {activeTab.subtitle}
            </h3>
            <p className="font-sans text-sm leading-6 text-muted-foreground max-w-2xl">
              {activeTab.description}
            </p>
            <a
              href={activeTab.ctaHref}
              className="inline-flex items-center text-primary font-medium text-sm hover:underline underline-offset-4 w-fit mt-1"
            >
              {activeTab.ctaText}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {activeTab.features.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-200"
                >
                  {IconComponent && (
                    <div
                      className="w-10 h-10 rounded-[10px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0"
                      aria-hidden
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  )}
                  <h4 className="font-heading font-semibold text-base leading-snug text-foreground">
                    {feature.title}
                  </h4>
                  <p className="font-sans text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
