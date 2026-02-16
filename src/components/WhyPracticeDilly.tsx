import SectionContainer from "@/common/SectionContainer";
import StatCard from "@/common/StatCard";
import SectionHeader from "@/common/SectionHeader";
import { CalendarCheck, Clock, Star, MessageCircleHeart, Phone } from "lucide-react";

export default function WhyPracticeDilly() {
  return (
    <SectionContainer className="items-center">
      {/* Header Section */}
      <SectionHeader
        icon={MessageCircleHeart}
        label="Why PracticeDilly"
        heading={{
          text: "Proven Results That ",
          highlighted: "Drive Success",
        }}
        description="Join 500+ practices that trust PracticeDilly to transform their patient communication and grow their practice."
        className="max-w-[565px] w-full px-4"
      />

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row items-stretch w-full mt-4 md:mt-6">
        <StatCard
          icon={<CalendarCheck className="w-full h-full" />}
          title="Reduce No-Shows"
          value="45"
          valueUnit="%"
          description={`reduction in no-shows`}
          explanation="Smart reminders and automated confirmation flows keep your chairs full."
        />
        <StatCard
          icon={<Clock className="w-full h-full" />}
          title="Saved Staff Time"
          value="15"
          valueUnit="hrs"
          description={`saved per week`}
          explanation="Automate intake forms, insurance verification, and routine inquiries."
        />
        <StatCard
          icon={<Phone className="w-full h-full" />}
          title="Never Miss a Call"
          value="24/7"
          valueUnit=""
          description={`AI answers after hours`}
          explanation="Voice AI handles calls when your office is closed, captures leads, and routes urgent messages to your team."
        />
        <StatCard
          icon={<Star className="w-full h-full" />}
          title="Boost Reputation"
          value="3"
          valueUnit="x"
          description={`more 5-star reviews`}
          explanation="Automatically request reviews after positive visits to grow your online presence."
        />
      </div>

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

