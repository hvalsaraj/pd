import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import testimonialsData from "@/data/testimonials.json";
import Image from "next/image";
import { Star } from "lucide-react";

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

interface SingleTestimonialSectionProps {
  /** Testimonial id from testimonials.json (e.g. "10"). Defaults to first item. */
  testimonialId?: string;
  /** Override section index when used on internal pages */
  sectionIndex?: number;
  /** Override section total when used on internal pages */
  sectionTotal?: number;
  /** When true, renders SectionGap before section identifier */
  showGapBefore?: boolean;
}

export default function SingleTestimonialSection({
  testimonialId,
  sectionIndex,
  sectionTotal,
  showGapBefore,
}: SingleTestimonialSectionProps = {}) {
  const allTestimonials = testimonialsData as Testimonial[];
  const testimonial = testimonialId
    ? allTestimonials.find((t) => t.id === testimonialId)
    : allTestimonials[0];

  if (!testimonial) {
    return null;
  }

  const { quote, rating, authorName, authorTitle, practiceName, authorImage, practiceLogo } =
    testimonial;

  return (
    <SectionContainer
      className="items-center"
      sectionLabel="Testimonials"
      sectionIndex={sectionIndex}
      sectionTotal={sectionTotal}
      showGapBefore={showGapBefore}
    >
      <SectionHeader
        heading={{
          text: "What our ",
          highlighted: "clients say",
        }}
        description="Real results from practices just like yours"
        className="max-w-[600px] px-4"
      />

      {/* Single testimonial card: outer rounded-2xl (16px), p-6 (24px) → inner image rounded-xl (12px) */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <article
          className="bg-card border border-border-subtle overflow-hidden"
          aria-label={`Testimonial from ${authorName}`}
        >
          <div className="flex flex-col md:flex-row">
            {/* Reviewer image - left column */}
            {authorImage && (
              <div className="relative shrink-0 w-full md:w-[225px] aspect-square md:aspect-2/3 md:min-h-[280px]">
                <Image
                  src={authorImage}
                  alt={authorName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 200px"
                  priority
                />
              </div>
            )}

            {/* Content - right column */}
            <div className="flex flex-1 flex-col p-6 md:p-8 gap-4">
              {/* Decorative quote marks */}
              {/* <span
                className="font-heading text-4xl md:text-5xl leading-none text-primary select-none"
                aria-hidden
              >
                ""
              </span> */}

              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < rating ? "text-primary fill-primary" : "text-[#e5e7eb]"
                        }`}
                    />
                  ))}
                </div>
                <span className="font-sans text-sm text-foreground">
                  {rating} out of 5
                </span>
              </div>

              <p className="font-sans font-normal text-base leading-6 text-foreground mt-4">
                {quote}
              </p>

              {/* Rating */}


              {/* Author name & title */}
              <div className="flex flex-col gap-0.5">
                <p className="font-sans font-medium text-base text-foreground">{authorName}</p>
                <p className="font-sans font-normal text-sm text-muted">{authorTitle}</p>
              </div>

              {/* Practice logo */}
              {/* {practiceLogo && (
                <div className="mt-auto pt-4">
                  <div className="relative h-8 w-32">
                    <Image
                      src={practiceLogo}
                      alt={`${practiceName} logo`}
                      fill
                      className="object-contain object-left"
                      sizes="128px"
                    />
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </article>
      </div>
    </SectionContainer>
  );
}
