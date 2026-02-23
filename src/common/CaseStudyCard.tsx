import Link from "next/link";
import Image from "next/image";
import { H3 } from "@/common/headings";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  description: string;
  image?: string;
  featured?: boolean;
}

export default function CaseStudyCard({
  slug,
  title,
  description,
  image,
  featured = false,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/resources/case-study/${slug}`}
      className="group bg-card border border-border flex flex-col overflow-hidden rounded-xl hover:border-primary transition-all duration-200 h-full"
    >
      {/* Image */}
      <div className="relative w-full h-48 bg-gradient-to-br from-[#5e48f0]/10 to-[#5e48f0]/5 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl font-heading font-bold text-primary/20">
              {title.charAt(0)}
            </div>
          </div>
        )}
        {featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-primary text-background px-3 py-1 rounded-lg">
              <p className="font-sans font-medium text-xs leading-4">Featured</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Title */}
        <H3 className="text-xl font-heading font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </H3>

        {/* Description */}
        <p className="font-sans text-sm leading-6 text-muted line-clamp-3 flex-1">
          {description}
        </p>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-sm text-primary font-medium pt-2 border-t border-border group-hover:gap-3 transition-all">
          <span>Read More</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
