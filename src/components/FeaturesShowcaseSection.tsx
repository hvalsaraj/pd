import Button from "@/common/Button";
import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import { H3 } from "@/common/headings";
import { getIcon } from "@/utils/iconMap";
import { Phone, MessageSquare, Mail, Voicemail, Workflow, Check } from "lucide-react";
import Link from "next/link";

interface FeaturesShowcaseSectionProps {
  showGapBefore?: boolean;
}

export default function FeaturesShowcaseSection({ showGapBefore }: FeaturesShowcaseSectionProps = {}) {
  const features = [
    {
      icon: "Phone",
      title: "Call Intelligence",
      description: "Analyze patient calls to detect sentiment and surface revenue opportunities automatically.",
      bullets: [
        "Less time on the phone",
        "Identify missed revenue",
        "Automated transcripts",
        "Sentiment analysis",
      ],
    },
    {
      icon: "MessageSquare",
      title: "Response Assistant",
      description: "Automatically draft professional responses for Google reviews. Keep your tone consistent.",
      bullets: [
        "Reputation management",
        "Professional responses",
        "Improve trust score",
        "Manage reviews",
      ],
    },
    {
      icon: "Mail",
      title: "Email Assistant",
      description: "Generate effective recall and promotional emails that drive bookings. Save front-desk time.",
      bullets: [
        "Better performance",
        "Creative ideas instantly",
        "Save staff time",
        "Higher engagement",
      ],
    },
    {
      icon: "Voicemail",
      title: "Voicemail Transcription",
      description: "Turn voicemails into text automatically. Tag urgent messages and route them to the right staff.",
      bullets: [
        "Visual voicemail",
        "Auto-tagging urgency",
        "Shared team inbox",
        "Faster callbacks",
      ],
    },
  ];

  const smartWorkflows = {
    title: "Smart Workflows",
    description: "Intelligent automations that grow your practice",
    subtitle: "Smart workflows for every patient touchpoint, from booking to retention.",
    features: [
      {
        icon: "Phone",
        title: "Call Intelligence",
        description: "Analyze patient calls to detect sentiment and surface revenue opportunities automatically. Identify trends and improve staff performance.",
      },
      {
        icon: "MessageSquare",
        title: "Response Assistant",
        description: "",
      },
      {
        icon: "Mail",
        title: "Email Assistant",
        description: "",
      },
      {
        icon: "Voicemail",
        title: "Voicemail Transcription",
        description: "",
      },
    ],
  };

  return (
    <SectionContainer
      className="items-start"
      sectionLabel="Features"
      sectionIndex={5}
      sectionTotal={7}
      showGapBefore={showGapBefore}
    >
      <div className="w-full">
        <div className="flex flex-col gap-10 items-center mb-10">
          <SectionHeader
            heading={{
              text: "Efficiently Automate Your ",
              highlighted: "Front Office",
            }}
            description="PracticeDilly provides comprehensive tools designed to automate and modernize every aspect of your practice management."
            className="max-w-[600px]"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto mb-16 gap-y-16 max-w-[960px] border-x border-border">
          {features.map((feature, index) => {
            const IconComponent = getIcon(feature.icon) || Phone;
            return (
              <div
                key={index}
                className="border-l -ml-px border-border flex flex-col gap-4  transition-all duration-200  h-full border-y"
              >
                <div className="p-6 md:p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3 ">
                    <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center justify-center p-2.5 rounded-[10px] shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <H3>
                      {feature.title}
                    </H3>
                  </div>
                  <p className="font-sans font-normal text-sm leading-5 text-muted">
                    {feature.description}
                  </p>
                </div>
                <ul className="flex flex-col ">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 border-t border-border py-3 md:p-4 px-4 md:px-6">
                      {/* <span className="text-primary border flex">•</span> */}
                      <Check className="w-5 h-5 text-primary" />
                      <span className="font-sans font-normal text-sm leading-5 text-muted">
                        {bullet}
                      </span>
                    </li>
                  ))}
                  
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto mb-16">
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary transition-colors">
            <H3>
              Online Scheduling
            </H3>
            <p className="font-sans font-normal text-sm leading-5 text-muted">
              Online booking, recalls, and waitlists that keep your chairs full without the back-and-forth calls
            </p>
            <button className="font-sans font-medium text-sm text-primary hover:underline text-left">
              See Online Scheduling →
            </button>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary transition-colors">
            <H3>
              Online Forms
            </H3>
            <p className="font-sans font-normal text-sm leading-5 text-muted">
              Calls, texts, and emails in a single inbox with templates and campaigns your whole team can use
            </p>
            <button className="font-sans font-medium text-sm text-primary hover:underline text-left">
              See Online Forms →
            </button>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary transition-colors">
            <H3>
              Phone system & call intelligence
            </H3>
            <p className="font-sans font-normal text-sm leading-5 text-muted">
              Cloud phones, smart routing, recordings, transcripts, and missed-call follow-up to capture every opportunity
            </p>
            <button className="font-sans font-medium text-sm text-primary hover:underline text-left">
              See Phone system & call intelligence →
            </button>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary transition-colors">
            <H3>
              Payments
            </H3>
            <p className="font-sans font-normal text-sm leading-5 text-muted">
              Text-to-pay links, saved cards, and automated reminders that collect balances without awkward follow-ups.
            </p>
            <button className="font-sans font-medium text-sm text-primary hover:underline text-left">
              See Payments →
            </button>
          </div>
        </div> */}

        <div className="flex justify-center">
          <Link href="/features">
            <Button variant="secondary" className="">
              See All Features
            </Button>
          </Link>
        </div>


      </div>
    </SectionContainer>
  );
}
