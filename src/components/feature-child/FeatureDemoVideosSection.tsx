import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import DemoVideoCard from "@/app/resources/demo-videos/DemoVideoCard";
import type { DemoVideoItem } from "@/utils/demoVideos";
import { Paragraph } from "@/common/typography";

export type FeatureDemoVideo = DemoVideoItem & {
  categoryId: string;
  categoryName: string;
};

interface FeatureDemoVideosSectionProps {
  heading?: {
    text: string;
    highlighted?: string;
    suffix?: string;
  };
  description?: string;
  videos: FeatureDemoVideo[];
  sectionIndex?: number;
  sectionTotal?: number;
  showGapBefore?: boolean;
}

export default function FeatureDemoVideosSection({
  heading,
  description,
  videos,
  sectionIndex,
  sectionTotal,
  showGapBefore,
}: FeatureDemoVideosSectionProps) {
  if (!videos.length) return null;

  return (
    <SectionContainer
      className="items-center md:items-start w-full"
      sectionLabel="Demo Videos"
      sectionIndex={sectionIndex}
      sectionTotal={sectionTotal}
      showGapBefore={showGapBefore}
    >
      {(heading || description) && (
        <div className="flex flex-col gap-4 items-center md:items-start w-full px-4 md:px-8 lg:px-12 py-6 md:py-12 lg:py-16 max-w-3xl">
          {heading && (
            <HeadingWithHighlight
              text={heading.text}
              highlighted={heading.highlighted}
              suffix={heading.suffix}
              className="text-center md:text-left"
              as="h2"
            />
          )}
          {description && (
            <Paragraph className="w-full text-center md:text-left">
              {description}
            </Paragraph>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 md:px-8 lg:px-12 pb-6 md:pb-12 lg:pb-16">
        {videos.map((video) => (
          <DemoVideoCard
            key={video.id}
            video={{
              id: video.id,
              slug: video.slug,
              title: video.title,
              duration: video.duration,
              youtubeId: video.youtubeId,
            }}
            categoryName={video.categoryName}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
