"use client";

import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import Button from "@/common/Button";
import WhyPracticeDilly from "@/components/WhyPracticeDilly";
import TestimonialSection from "@/components/TestimonialSection";
import HomeFAQSection from "@/components/HomeFAQSection";
import GridBackground from "@/components/GridBackground";
import { H1, H2, H3 } from "@/common/headings";
import { Paragraph, ContentListItem } from "@/common/typography";
import { Check, ArrowRight } from "lucide-react";
import FAQItem from "@/common/FAQItem";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import FeatureCard from "@/common/FeatureCard";
import CTACard from "@/common/CTACard";
import HeroPill from "@/common/HeroPill";
import { useState } from "react";

export default function PricingPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const pricingPlans = [
    {
      name: "Basic",
      description: "For dental practices averaging 5-10 appointments daily",
      price: "$99",
      period: "per month",
      cta: "Start 30 Day Free Trial",
      popular: false,
    },
    {
      name: "Pro",
      description: "For dental practices averaging 11-20 appointments daily",
      price: "$129",
      period: "per month",
      cta: "Start 30 Day Free Trial",
      popular: true,
    },
    {
      name: "Premier",
      description: "For dental practices averaging 21-50 appointments daily",
      price: "$179",
      period: "per month",
      cta: "Start 30 Day Free Trial",
      popular: false,
    },
  ];

  const allFeatures = [
    {
      category: "Appointment Reminders",
      description: "Keep patients informed and reduce no-shows",
      items: [
        "Appointment Reminders",
        "Automated Confirmations",
        "Email Reminders",
        "Text Reminders",
        "Voice Call Reminders",
      ],
    },
    {
      category: "Texting",
      description: "Engage with patients through messaging",
      items: [
        "2-way Texting",
        "Landline Texting",
        "Custom Reminders",
        "Family Grouping",
        "Group Messaging",
      ],
    },
    {
      category: "Recall",
      description: "Bring patients back with follow-ups",
      items: [
        "On-Demand Recall",
        "Automated Recall",
        "Yearly Recall",
        "Staff Mobile App",
        "Mobile App Texting",
      ],
    },
    {
      category: "Bulk Messaging",
      description: "Reach multiple patients at once efficiently",
      items: [
        "Mass Texting",
        "Mass Emails",
        "Birthday Greetings",
        "Welcome Email",
        "Email Templates",
      ],
    },
    {
      category: "Reviews",
      description: "Build your online reputation effortlessly",
      items: [
        "Google Reviews",
        "Facebook Reviews",
        "Yelp Reviews",
        "Auto Requests",
        "Manual Requests",
      ],
    },
    {
      category: "Paperless Forms",
      description: "Streamline patient intake digitally",
      items: [
        "Covid-19 Pre-Screening",
        "New Patient Forms",
        "Treatment Consent Form",
        "Form Customization",
        "Auto Fill Forms",
      ],
    },
  ];

  const whyPracticeDillyItems = [
    {
      title: "All In One",
      description: "You don't need multiple tools. Appointment Reminders, Texting, Paperless Forms, Reputation Management, etc. all available in one platform.",
      icon: "Plug",
    },
    {
      title: "Great Support",
      description: "We even have our support staff providing you with assistance after hours or during the weekend.",
      icon: "MessageCircle",
    },
    {
      title: "Best Pricing",
      description: "We want technology to be widely available to dental practices of all sizes and offer the best price in the market.",
      icon: "DollarSign",
    },
    {
      title: "Real-Time Communication",
      description: "Our No-Sync technology enables us to obtain accurate information, so you will not see reminders sent out for canceled appointments.",
      icon: "Zap",
    },
  ];

  const faqItems = [
    {
      question: "Is PracticeDilly HIPAA compliant?",
      answer: "PracticeDilly is a result of collaboration between dentists and software engineers. As such, we knew from the start to make sure PracticeDilly must be completely HIPAA compliant. Our No-Sync approach to patient data enables us to use the data only to perform necessary functions and is never stored on our servers.",
    },
    {
      question: "Why would you offer a free trial?",
      answer: "We believe our product offers important features not included with other patient communication services. But we want to be even better! Your experience will help us learn how to improve PracticeDilly even more. Plus, we are confident you will love our service and be happy to become a customer.",
    },
    {
      question: "What practice management softwares are you compatible with?",
      answer: "PracticeDilly currently works seamlessly with Dentrix, Eaglesoft, and Opendental. We are constantly adding new software integrations.",
    },
  ];


  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b border-border py-20">
        {/* Grid Background */}
        <GridBackground gridSize={1280/11} contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="DollarSign" text="Pricing" as="h1" />
            <HeadingWithHighlight
              text="Affordable Plans for "
              highlighted="All"
              className="text-center"
              as="h2"
            />
            <Paragraph className="max-w-2xl">
              We want dental practices of all sizes to take advantage of technology and automation. That's why our pricing is based on practice size and offers all the features.
            </Paragraph>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Button href="#get-started" variant="primary" className="px-6">
                Get Started - No Setup Fee!
              </Button>
              <Button href="tel:+19494075907" variant="secondary" className="px-6">
                Call (949) 407-5907
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <SectionContainer className="items-center">
        <div className="w-full px-4 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] mx-auto md:gap-0 gap-y-16 border-x border-border">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className="relative border-l -ml-px border-border flex flex-col gap-6 transition-all duration-200 h-full border-y"
              >
                <div className="flex flex-col gap-4 p-6 md:p-8">
                  <H3 className="font-semibold">
                    {plan.name}
                  </H3>
                  <Paragraph variant="sm" color="muted">
                    {plan.description}
                  </Paragraph>
                </div>

                <div className="flex flex-col gap-1 px-6 md:px-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-semibold text-4xl leading-tight text-foreground">
                      {plan.price}
                    </span>
                    <span className="font-sans font-normal text-base text-muted">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <Button 
                    variant="secondary" 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>

                <div className="flex flex-col gap-2 py-3 md:p-4 px-4 md:px-6 border-t border-border">
                  <Paragraph variant="xs" color="muted" className="text-center">
                    No contracts, No setup fee
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* All Features Included Section */}
      <SectionContainer className="items-center">
        <div className="w-full px-4 lg:px-16">
          <div className="flex flex-col gap-10 items-center max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 items-center">
              <HeadingWithHighlight text="" highlighted="All Features " suffix="Included in Each Plan" className="text-center" />
              <Paragraph className="text-center">
                Regardless of the plan you choose, you will enjoy every feature listed below
              </Paragraph>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border">
              {allFeatures.map((category, index) => (
                <div key={index} className="flex flex-col border-l -ml-px border-border">
                  <div className="py-3 md:p-4 px-4 md:px-6">
                  <H3 className="font-medium">
                    {category.category}
                  </H3>
                  <Paragraph variant="sm" color="muted" className="mt-1.5">
                    {category.description}
                  </Paragraph>
                  </div>
                  <ul className="flex flex-col w-full">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 py-3 md:p-4 px-4 md:px-6 border-t last:border-b border-border">
                        <ContentListItem variant="check">
                          {item}
                        </ContentListItem>
                      </li>
                    ))}
                  </ul>
                  <div className="h-16 border-b -mb-px border-border bg-background"></div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 items-center border-border w-full">
              <Paragraph className="text-center">
                Looking for only a specific feature listed above? Let us know, we can certainly help you with that.
              </Paragraph>
              <Paragraph weight="medium" color="primary" className="text-center">
                Call us at (949) 407-5907
              </Paragraph>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Why PracticeDilly Section */}
      <SectionContainer className="items-center">
        <div className="w-full px-4 lg:px-16">
          <div className="flex flex-col gap-10 items-center max-w-4xl mx-auto">
            <div className="flex flex-col gap-4 items-center">
              <HeadingWithHighlight
                text="Why "
                highlighted="PracticeDilly"
                suffix="?"
                className="text-center"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {whyPracticeDillyItems.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  variant="simple"
                />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* No Contracts Section */}
      <CTACard
        headingHighlighted="No Contracts"
        headingSuffix=", No Setup Fee"
        description="We want you to be completely satisfied before you commit to making any payments. That's why we offer our service without any setup fees or contracts."
        buttonText="Get Started"
      />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <SectionContainer className="items-start">
        <div className="w-full flex flex-col md:flex-row border-t">
          <div className="border-border border-r border-b flex flex-col gap-4 items-start justify-start px-4 md:px-8 lg:px-16 py-8 md:py-10 lg:py-14 relative shrink-0 w-full md:w-1/2">
            <HeadingWithHighlight
              text="Frequently Asked "
              highlighted="Questions"
            />
            <Paragraph className="w-full">
              Everything you need to know about PracticeDilly pricing and features.
            </Paragraph>
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            {faqItems.map((faq, index) => (
              <FAQItem
                key={index}
                id={`faq-pricing-${index}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQIndex === index}
                onToggle={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
