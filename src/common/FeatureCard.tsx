import Link from "next/link";
import { getIcon } from "@/utils/iconMap";
import { H3 } from "@/common/headings";
import SectionGap from "./SectionGap";
import CardGap from "./CardGap";

interface FeatureCardProps {
  icon?: string;
  image?: string;
  title: string;
  description: string;
  // Optional props for detailed variant
  href?: string;
  category?: string;
  badges?: string[];
  variant?: "simple" | "detailed";
}

export default function FeatureCard({
  icon,
  image,
  title,
  description,
  href,
  category,
  badges,
  variant = "simple",
}: FeatureCardProps) {
  const IconComponent = icon ? getIcon(icon) : null;

  // Simple variant (existing usage); wraps in Link when href is provided
  if (variant === "simple") {
    const cardContent = (
      <div className="bg-card border border-border flex flex-col items-start overflow-clip p-6 rounded-xl shrink-0 w-full h-full hover:border-primary transition-all duration-200">
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center pb-5 pt-0 px-0">
            <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center p-2 rounded-[10px] shrink-0">
              {IconComponent && (
                <div className="relative shrink-0 size-6 text-primary">
                  <IconComponent className="w-full h-full" />
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-start pb-3 pt-0 px-0 w-full">
            <H3 className="font-sans font-normal leading-6 shrink-0 text-foreground text-base! tracking-normal">
              {title}
            </H3>
            
          </div>
          <p className="font-sans font-normal leading-5 text-muted text-sm tracking-normal w-full">
            {description}
          </p>
        </div>
        
      </div>
    );

    if (href) {
      return (
        <Link href={href} className="block w-full h-full cursor-pointer">
          {cardContent}
        </Link>
      );
    }
    return cardContent;
  }

  // Detailed variant (features page)
  const content = (
    <>
      {/* Large Image/Icon Section */}
      {image ? (
        <div 
          className="w-full min-h-48 md:min-h-56 aspect-square bg-cover bg-center bg-no-repeat border-b"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : IconComponent ? (
        <div className="flex items-center justify-center w-full h-48 md:h-56 bg-background p-6">
          <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center justify-center p-4 rounded-[10px] group-hover:scale-105 transition-transform duration-200">
            <IconComponent className="w-12 h-12 text-primary" />
          </div>
        </div>
      ) : null}

      <div className="p-6 pt-2 flex flex-col gap-2 flex-1">
        {/* Category */}
        {title && (
          <div className="flex items-center gap-3">
            <H3 className="text-lg font-medium">{title}</H3>
          </div>
        )}

        {/* Description */}
        <p className="font-sans font-normal text-sm md:text-sm leading-6 text-muted line-clamp-2">
          {description}
        </p>

        {/* Badges */}
        {/* {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {badges.slice(0, 3).map((badge, index) => (
              <span
                key={index}
                className="text-xs font-medium text-muted rounded-full bg-border-subtle px-2 py-1"
              >
                {badge}
              </span>
            ))}
          </div>
        )} */}

        {/* Link Arrow */}
        {href && (
          <div className="flex items-center gap-2 text-primary font-medium text-sm mt-auto pt-2">
            <span>Learn more</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        )}
      </div>
      <div className="h-20 border-y -mb-px border-border bg-background"><CardGap></CardGap></div>
    </>
  );

  // Render as Link if href provided, otherwise as div
  if (href) {
    return (
      <Link
        href={href}
        className="group bg-transparent border-l last:border-r -ml-px border-b border-border flex flex-col gap-4 hover:bg-border-subtle transition-all duration-200 relative h-full"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="group bg-transparent border-l last:border-r -ml-px border-b border-border flex flex-col gap-4 hover:border-primary transition-all duration-200 relative h-full">
      {content}
    </div>
  );
}
