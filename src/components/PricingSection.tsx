import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import Button from "@/common/Button";
import { H3 } from "@/common/headings";
import { Check, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  showGapBefore?: boolean;
}

export default function PricingSection({ showGapBefore }: PricingSectionProps = {}) {
  const singleLocationFeatures = [
    "Simple setup in under 15 minutes",
    "All-in-one communication hub",
    "Affordable pricing with no hidden fees",
    "Seamless PMS integration",
  ];

  const multiLocationFeatures = [
    "Centralized dashboard for all locations",
    "Consistent patient experience across locations",
    "Volume pricing and dedicated support",
    "Advanced analytics and reporting",
    "Custom workflows for each location",
  ];

  return (
    <SectionContainer
      className="items-start"
      sectionLabel="Pricing"
      sectionIndex={6}
      sectionTotal={7}
      showGapBefore={showGapBefore}
    >
      <div className="w-full">
        <div className="flex flex-col gap-10 items-center mb-10">
          <SectionHeader
            heading={{
              text: "Built for Practices of ",
              highlighted: "Every Size",
            }}
            description="Whether you run one location or manage a multi-location group, PracticeDilly scales with your practice."
            className="max-w-[600px]"
          />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] md:gap-0 gap-y-16 mx-auto mb-8">
          {/* Single Location */}
          <div className=" border border-border flex flex-col gap-6 transition-all duration-200 h-full">
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <H3>
                Single Location
              </H3>
              <p className="font-sans font-normal text-sm leading-5 text-muted">
                Everything you need to run a modern, efficient dental practice from day one.
              </p>
            </div>

            <ul className="flex flex-col">
              {singleLocationFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 py-3 md:p-4 px-4 md:px-6 border-t last:border-b border-border">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-sans font-normal text-sm leading-5 text-muted">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* <div className="flex flex-col gap-2 p-6 md:p-8 border-border">
              <p className="font-sans font-medium text-sm leading-5 text-foreground">
                Join 400+ single-location practices
              </p>
              <p className="font-sans font-normal text-sm leading-5 text-muted italic">
                "Easy to use and incredibly powerful. Has saved us so much time." - Dr. Shivani Patel, Grand Central Dentistry
              </p>
            </div> */}
          </div>

          {/* Multi-Location Groups */}
          <div className="border border-primary flex flex-col gap-6 relative transition-all duration-200 h-full">
            <div className="absolute top-4 right-4">
              <div className="bg-primary text-background px-3 py-1 rounded-lg">
                <p className="font-sans font-medium text-xs leading-4">Most Popular</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-6 md:p-8">
              <H3>
                Multi-Location Groups
              </H3>
              <p className="font-sans font-normal text-sm leading-5 text-muted">
                Manage all your locations from one dashboard with enterprise-grade features.
              </p>
            </div>

            <ul className="flex flex-col">
              {multiLocationFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 py-3 md:p-4 px-4 md:px-6 border-t last:border-b border-border">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-sans font-normal text-sm leading-5 text-muted">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* <div className="flex flex-col gap-2 p-6 md:p-8 border-border">
              <p className="font-sans font-medium text-sm leading-5 text-foreground">
                Trusted by 100+ multi-location groups
              </p>
              <p className="font-sans font-normal text-sm leading-5 text-muted">
                "Scaled seamlessly across multiple locations. Game-changer for our practice group." - Pacific Ocean Dental Group
              </p>
            </div> */}
          </div>
        </div>

        {/* Footer Note */}
        {/* <div className="flex flex-col gap-2 items-center max-w-[600px] mx-auto mb-12">

          <div className="flex items-center gap-4">
            <p className="font-sans font-normal text-sm leading-5 text-muted">
              No contracts
            </p>
            <span className="text-[#e5e7eb]">•</span>
            <p className="font-sans font-normal text-sm leading-5 text-muted">
              Cancel anytime
            </p>
            <span className="text-[#e5e7eb]">•</span>
            <p className="font-sans font-normal text-sm leading-5 text-muted">
              Add locations as you grow
            </p>
          </div>
        </div> */}

        {/* CTA Section */}
        <section className="flex flex-col gap-6 items-center max-w-[600px] mx-auto pt-8" aria-labelledby="pricing-cta-heading">
          <div className="flex flex-col gap-3 items-center text-center">
            <h2 id="pricing-cta-heading" className="font-heading font-semibold text-2xl leading-7">
              Ready to get started?
            </h2>
            <p className="font-sans font-normal text-base leading-6 text-muted">
            From startups to established groups, PracticeDilly grows with you
            </p>
          </div>
          <Button
            variant="secondary"
            className="px-8 py-3 text-base font-medium"
            href="/contact"
          >
            Book Demo
          </Button>
          <p className="font-sans font-normal text-xs leading-4 text-muted text-center">
            Setup takes less than 15 minutes • No credit card required
          </p>
        </section>
      </div>
    </SectionContainer>
  );
}
