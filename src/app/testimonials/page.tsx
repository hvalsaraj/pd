"use client";

import { useState } from "react";
import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import FAQItem from "@/common/FAQItem";
import Button from "@/common/Button";
import { Star, MessageCircleHeart, Clock, Headphones, DollarSign, CheckCircle2 } from "lucide-react";
import GridCard from "@/common/GridCard";
import GridBackground from "@/components/GridBackground";
import testimonialsData from "@/data/testimonials.json";
import HeroPill from "@/common/HeroPill";

interface Testimonial {
  id: string;
  practiceName: string;
  practiceLogo?: string;
  quote: string;
  rating: number;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
}

interface WhyChooseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Testimonial Card Component
function TestimonialCard({ practiceName, practiceLogo, quote, rating, authorName, authorTitle, authorImage }: Testimonial) {
  const [logoError, setLogoError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);
  const logoUrl = practiceLogo || "/placeholder-practice-logo.svg";
  
  return (
    <div className="flex flex-col border-b rounded-none overflow-hidden w-full border-t -mb-px py-2 border-l -ml-px border-border">
      {/* Practice Logo/Name Section */}
      {/* <div className="px-6 py-4 border-b border-border bg-background">
        <div className="flex items-center gap-3">
          {!logoError ? (
            <img 
              src={logoUrl} 
              alt={practiceName} 
              className="h-8 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-card text-xs font-medium">
                {practiceName.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <p className="font-sans font-medium text-sm text-foreground">{practiceName}</p>
        </div>
      </div> */}

      {/* Rating and Author Section */}
      <div className="px-6 py-4 border-border">
  
        <div className="flex items-center gap-3">
          {authorImage && !authorImageError ? (
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <img
                src={authorImage}
                alt={authorName}
                className="h-full w-full object-cover"
                onError={() => setAuthorImageError(true)}
              />
            </div>
          ) : null}
          <div className="flex flex-col">
            <p className="font-sans font-medium text-sm text-foreground">{authorName}</p>
            <p className="font-sans font-normal text-xs text-muted">{practiceName}</p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="px-6 py-6 flex-1">
      <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-warning fill-warning" : "text-[#e5e7eb]"
              }`}
            />
          ))}
          {/* <span className="font-sans font-normal text-sm text-muted ml-1">
            {rating} out of 5
          </span> */}
        </div>
        <blockquote className="font-sans font-normal text-base leading-6 text-foreground mb-3">
          "{quote}"
        </blockquote>
      </div>

      
    </div>
  );
}

export default function TestimonialsPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const testimonials: Testimonial[] = testimonialsData as Testimonial[];

  const whyChooseItems: WhyChooseItem[] = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "15 MINS",
      description: "We understand how busy you are! Give us just 15 minutes to integrate with Dentrix and then enjoy all the benefits.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-primary" />,
      title: "Great Support",
      description: "We even have our support staff providing you with assistance after hours or during the weekend.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Fair Pricing",
      description: "We provide highly affordable pricing plans designed to assist you in growing your dental practice.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      title: "No Contracts, No Setup Fee, and 30-day Free Trial",
      description:
        "We want you to be completely satisfied before you commit to making any payments. That's why we offer our service without any setup fees or contracts.",
    },
  ];

  const faqItems = [
    {
      question: "Is PracticeDilly HIPAA compliant?",
      answer:
        "Yes, PracticeDilly is fully HIPAA compliant. We take data security and patient privacy seriously, implementing industry-standard encryption and security measures to protect all patient information.",
    },
    {
      question: "Why would you offer a free trial?",
      answer:
        "We believe in the quality of our product and want you to experience its benefits firsthand. Our 30-day free trial allows you to fully explore all features and see how PracticeDilly can transform your practice's communication without any financial commitment.",
    },
    {
      question: "What practice management softwares are you compatible with?",
      answer:
        "PracticeDilly integrates seamlessly with major dental practice management software including Dentrix, Eaglesoft, Open Dental, and many others. Our team can help you set up the integration in just 15 minutes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b border-border py-20">
        {/* Grid Background */}
        <GridBackground gridSize={1280/11}  contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="MessageCircleHeart" text="Reviews" as="h1" />
            <HeadingWithHighlight
              text="Customer "
              highlighted="Reviews"
              as="h2"
            />
            <p className="font-sans text-base leading-6 text-foreground max-w-2xl">
              Dental practices owners and office managers share their stories about why they're passionate about what they do and how PracticeDilly helped them along the way.
            </p>

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

      {/* Testimonials Section */}
      <SectionContainer className="items-start">
        <div className="w-full">
          <SectionHeader
            icon={MessageCircleHeart}
            label="PracticeDilly Reviews"
            heading={{
              text: "Stories From Our ",
              highlighted: "Clients",
            }}
            description="Real feedback from dental practices using PracticeDilly"
            className="mb-12"
          />

          {/* Testimonials Grid - Pinterest Style Masonry Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 column-gap-2 " style={{ columnGap: 0 }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="break-inside-avoid mb-0 border-l">
                <TestimonialCard {...testimonial} />
                <div className="h-16 border-y -mb-px border-border"></div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Why Choose Us Section */}
      <SectionContainer className="items-center">
        <div className="w-full px-4 lg:px-16 items-center">
          <div className="flex flex-col gap-4 items-center mb-12">
            <HeadingWithHighlight
              text="Why Choose "
              highlighted="Us?"
              className="text-center"
            />
            <p className="font-sans font-normal text-base leading-6 text-foreground text-center max-w-2xl">
              Our Dentist clients appreciate our easy to use patient engagement software and you will love it too!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[37px] items-start w-full max-w-4xl mx-auto">
            {whyChooseItems.map((item, index) => (
              <div
                key={index}
                className="border border-border flex flex-col items-start overflow-clip p-7 rounded-xl shrink-0 w-full h-full"
              >
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center pb-5 pt-0 px-0">
                    <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center p-2 rounded-[10px] shrink-0">
                      <div className="relative shrink-0 size-6 text-primary">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start pb-3 pt-0 px-0 w-full">
                    <h3 className="font-sans font-normal leading-6 shrink-0 text-foreground text-base tracking-normal">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans font-normal leading-5 text-muted text-sm tracking-normal w-full">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="items-start">
        <div className="w-full flex flex-col md:flex-row border-t">
          <div className="border-border border-r border-b flex flex-col gap-4 items-start justify-start px-4 md:px-8 lg:px-16 py-8 md:py-10 lg:py-14 relative shrink-0 w-full md:w-1/2">
            <HeadingWithHighlight
              text="Frequently Asked "
              highlighted="Questions"
            />
            <p className="font-sans font-normal leading-6 text-foreground text-base tracking-normal w-full">
              Have questions? We're here to help.
            </p>
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            {faqItems.map((faq, index) => (
              <FAQItem
                key={index}
                id={`faq-testimonials-${index}`}
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
