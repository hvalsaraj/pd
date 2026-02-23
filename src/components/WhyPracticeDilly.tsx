import Link from "next/link";
import SectionContainer from "@/common/SectionContainer";
import StatCard from "@/common/StatCard";
import SectionHeader from "@/common/SectionHeader";
import { CalendarCheck, Clock, Phone, Star } from "lucide-react";

const SECTION_INDEX = 1;
const SECTION_TOTAL = 7;

export default function WhyPracticeDilly({ showGapBefore }: { showGapBefore: boolean }) {
  return (
    <SectionContainer
      className="items-center -mt-px"
      sectionLabel="Why PracticeDilly"
      sectionIndex={SECTION_INDEX}
      sectionTotal={SECTION_TOTAL}
      showGapBefore={showGapBefore}
      paddingTop="pt-0"
    >
      {/* Header Section */}
      <SectionHeader
        heading={{
          text: "Proven Results That ",
          highlighted: "Drive Success",
        }}
        description="Join hundreds of practices that trust PracticeDilly to transform their patient communication and grow their practice."
        className="max-w-[565px] w-full px-4"
      />

      {/* Stats Section - 2x2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch w-full mt-4 md:mt-6 border border-b overflow-hidden">
        <StatCard
          icon={<CalendarCheck className="w-full h-full" />}
          title="Reduce No-Shows"
          value="45"
          valueUnit="%"
          description="reduction in no-shows"
          explanation="Smart reminders and automated confirmation flows keep your chairs full."
        />
        <StatCard
          icon={<Clock className="w-full h-full" />}
          title="Saved Staff Time"
          value="15"
          valueUnit="hrs"
          description="saved per week"
          explanation="Automate intake forms, insurance verification, and routine inquiries."
          className="md:border-r-0!"
        />
        <StatCard
          icon={<Phone className="w-full h-full" />}
          title="Never Miss a Call"
          value="24"
          valueUnit="x7"
          description="AI answers after hours"
          explanation="Voice AI handles calls when your office is closed, captures leads, and routes urgent messages to your team."
          className="md:border-b-0!"
        />
        <StatCard
          icon={<Star className="w-full h-full" />}
          title="Boost Reputation"
          value="3"
          valueUnit="x"
          description="more 5-star reviews"
          explanation="Automatically request reviews after positive visits to grow your online presence."
          className="md:border-b-0! md:border-r-0!"
        />
      </div>

      {/* Case study link */}
      <p className="font-sans text-base text-muted mt-6 text-center">
        <Link
          href="/resources/case-study"
          className="text-primary font-medium underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
        >
          Read how practices achieve these results
        </Link>
      </p>

      {/* 5-Star Rating Section */}
      {/* <div className="flex flex-col gap-2.5 items-center mt-10 md:mt-12 pt-8 border-t border-border w-full max-w-2xl">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-warning fill-warning" />
          ))}
        </div>
        <p className="font-sans font-medium text-base leading-6 text-foreground text-center">
          Trusted and rated 5 stars by <span className="text-primary font-semibold">500+ practices</span> nationwide
        </p>
      </div> */}
    </SectionContainer>
  );
}

