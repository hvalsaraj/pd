import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Button from "@/common/Button";
import { ArrowRight, Check } from "lucide-react";
import MeshGradientCanvas from "./MeshGradientCanvas";

interface CTASectionProps {
  sectionLabel?: string;
  sectionIndex?: number;
  sectionTotal?: number;
  showGapBefore?: boolean;
}

export default function CTASection({
  sectionLabel,
  sectionIndex,
  sectionTotal,
  showGapBefore,
}: CTASectionProps = {}) {
  return (
    <SectionContainer
      className="items-center bg-primary dark:bg-primary/30 relative"
      sectionLabel={sectionLabel}
      sectionIndex={sectionIndex}
      sectionTotal={sectionTotal}
      showGapBefore={showGapBefore}
    >

      <div className="w-full px-4 lg:px-16 z-10">
        {/* Main CTA Card with border and background */}
        <div className="flex flex-col gap-8 items-center max-w-4xl mx-auto py-12 md:py-16 px-6 md:px-8 lg:px-12 rounded-2xl border border-white/20 bg-linear-to-b from-card to-card">
          <div className="flex flex-col gap-6 items-center text-center">
            <HeadingWithHighlight
              text="Ready to transform your practice? "
              highlighted="Start free today"
              className="text-center md:text-5xl! md:leading-[56px]!"
              as="h2"
            />
            <p className="font-sans font-normal text-lg leading-7 text-card-foreground/95 text-center max-w-[560px]">
              Join <span className="font-semibold text-primary">500+ dental practices</span> already using PracticeDilly to streamline patient communication and grow their practice.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="flex md:flex-row flex-col items-center justify-center gap-3 sm:gap-4 w-full">
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/60 dark:bg-card border border-white/30 dark:border-border transition-shadow">
              <div className="shrink-0 h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
              </div>
              <p className="font-sans font-medium text-sm leading-5 text-card-foreground">
                No credit card
              </p>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/60 dark:bg-card border border-white/30 dark:border-border transition-shadow">
              <div className="shrink-0 h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
              </div>
              <p className="font-sans font-medium text-sm leading-5 text-card-foreground">
                30-day free trial
              </p>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/60 dark:bg-card border border-white/30 dark:border-border transition-shadow">
              <div className="shrink-0 h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
              </div>
              <p className="font-sans font-medium text-sm leading-5 text-card-foreground">
                Cancel anytime
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col gap-3 items-center w-full">
            <Button
              variant="primary"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold transition-shadow"
            >
              Book Demo
            </Button>
            <p className="font-sans font-normal text-xs leading-4 text-muted/90 text-center">
              Setup takes less than 5 minutes • No commitment required
            </p>
          </div>
        </div>
      </div>

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
    </SectionContainer>
  );
}
