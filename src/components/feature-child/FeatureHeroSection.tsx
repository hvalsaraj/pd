import Button from "@/common/Button";
import Badge from "@/common/Badge";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Image from "next/image";
import HeroPill from "@/common/HeroPill";
import GridBackground from "@/components/GridBackground";

interface FeatureHeroSectionProps {
  category: {
    icon: string;
    text: string;
  };
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  description: string;
  cta: {
    text: string;
    href: string;
  };
  badges: string[];
  image: string;
}

export default function FeatureHeroSection({
  category,
  heading,
  description,
  cta,
  badges,
  image
}: FeatureHeroSectionProps) {
  return (
    <div className="relative flex min-h-[600px] md:min-h-[80vh] items-center justify-center w-full py-12 md:py-0">
      {/* Grid Background */}
      <GridBackground gridSize={1280 / 9} contentWidth={1280} contentPadding={64} />

      <div className="flex w-full flex-col items-center gap-8 md:gap-16 lg:gap-20 relative z-10">
        {/* Main Content Card */}

        <div className="flex max-w-[1280px] md:flex-row items-center flex-col gap-6 md:gap-12 w-full px-4 md:px-8 lg:px-12">

          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 flex-1">
            <div className="flex flex-col gap-6 md:gap-8 w-full">
              {/* Category Badge */}
              <div className="flex flex-col gap-4 md:gap-6 justify-center md:justify-start items-center md:items-start w-full">
                <HeroPill icon={category.icon} text={category.text} as="h1" />

                {/* Heading */}
                <HeadingWithHighlight
                  text={heading.text}
                  highlighted={heading.highlighted}
                  suffix={heading.suffix}
                  className="text-center md:text-left w-full"
                  as="h2"
                />

                {/* Description */}
                <p className="font-sans font-normal leading-6 text-foreground text-base tracking-normal max-w-[572px] w-full text-center md:text-left">
                  {description}
                </p>

              </div>

              {/* CTA Button */}
              <div className="flex justify-center md:justify-start w-full">
                <Button href={cta.href} variant="primary" className="flex items-center justify-center w-full md:w-auto">
                  {cta.text}
                </Button>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3 md:gap-4 items-center md:items-start justify-center md:justify-start px-0 w-full">
                {badges.map((badge, index) => (
                  <Badge key={index} text={badge} />
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full flex items-center justify-center px-4 md:px-0">
            <Image
              src={image || ""}
              alt={heading.text}
              width={592}
              height={592}
              className="w-full h-auto max-w-full"
            />
          </div>

        </div>



      </div>
    </div>
  );
}
