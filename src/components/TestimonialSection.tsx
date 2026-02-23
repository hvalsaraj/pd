"use client";

import SectionContainer from "@/common/SectionContainer";
import TestimonialCard from "@/common/TestimonialCard";
import SectionHeader from "@/common/SectionHeader";
import testimonialsData from "@/data/testimonials.json";
import Button from "@/common/Button";
import Link from "next/link";

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

interface TestimonialCardData {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  authorImage?: string;
  practiceLogo?: string;
}

interface TestimonialRowProps {
  testimonials: TestimonialCardData[];
  direction?: "left" | "right";
  speed?: number;
}

function TestimonialRow({ testimonials, direction = "left", speed = 30 }: TestimonialRowProps) {
  // Duplicate testimonials multiple times for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const cardWidth = 400;
  const gap = 24; // gap-6 = 24px
  const totalWidth = testimonials.length * (cardWidth + gap);
  const animationId = `testimonial-${direction}-${totalWidth}`;
  const animationName = `scroll-${direction}-${animationId}`;

  return (
    <>
      <style>
        {`
          @keyframes scroll-left-${animationId} {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${totalWidth}px);
            }
          }
          @keyframes scroll-right-${animationId} {
            0% {
              transform: translateX(-${totalWidth}px);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
      <div className="relative overflow-hidden w-full border-b">
        <div
          className="flex"
          style={{
            width: "max-content",
            animation: `${animationName} ${speed}s linear infinite`,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} {...testimonial} />
          ))}
        </div>
      </div>
    </>
  );
}

interface TestimonialSectionProps {
  /** Override section index when used on internal pages (e.g. 4 for pricing) */
  sectionIndex?: number;
  /** Override section total when used on internal pages (e.g. 5 for pricing) */
  sectionTotal?: number;
  /** When true, renders SectionGap before section identifier (e.g. on home page between sections) */
  showGapBefore?: boolean;
}

export default function TestimonialSection({
  sectionIndex,
  sectionTotal,
  showGapBefore,
}: TestimonialSectionProps = {}) {
  // Convert testimonials data to the format expected by TestimonialCard
  const allTestimonials: Testimonial[] = testimonialsData as Testimonial[];
  
  // Split testimonials into two rows for scrolling animation
  const row1Testimonials = allTestimonials.slice(0, Math.ceil(allTestimonials.length / 2));
  const row2Testimonials = allTestimonials.slice(Math.ceil(allTestimonials.length / 2));
  
  // Convert to TestimonialCard format
  const convertToCardFormat = (testimonial: Testimonial) => ({
    id: testimonial.id,
    name: testimonial.authorName,
    role: testimonial.authorTitle,
    company: testimonial.practiceName,
    quote: testimonial.quote,
    rating: testimonial.rating,
    authorImage: testimonial.authorImage,
    practiceLogo: testimonial.practiceLogo,
  });
  
  const row1Cards = row1Testimonials.map(convertToCardFormat);
  const row2Cards = row2Testimonials.map(convertToCardFormat);

  return (
    <SectionContainer
      className="items-center"
      sectionLabel="Reviews"
      sectionIndex={sectionIndex ?? 2}
      sectionTotal={sectionTotal ?? 7}
      showGapBefore={showGapBefore}
    >
      {/* Header Section */}
      <SectionHeader
        heading={{
          text: "",
          highlighted: "Loved by Dentists ",
          suffix: "Across the Country",
        }}
        description="Real results from practices just like yours"
        className="max-w-[600px] px-4"
      />

      {/* Testimonial Rows */}
      <div className="flex flex-col w-full overflow-hidden border-t border-border">
        {/* Row 1 - Left scrolling */}
        <TestimonialRow testimonials={row1Cards} direction="left" speed={30} />

        {/* Row 2 - Right scrolling (reverse direction) */}
        <TestimonialRow testimonials={row2Cards} direction="right" speed={35} />
      </div>

      {/* Read More Link */}
      <div className="flex justify-center mt-8">
        <Link href="/reviews">
        <Button variant="secondary" className="">
          Read More Success Stories
        </Button>
        </Link>
      </div>
    </SectionContainer>
  );
}
