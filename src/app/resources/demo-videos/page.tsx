import type { Metadata } from "next";
import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import HeroPill from "@/common/HeroPill";
import GridBackground from "@/components/GridBackground";
import DemoVideoCard from "./DemoVideoCard";
import { getDemoCategories } from "@/utils/demoVideos";
import demoVideosData from "@/data/demo-videos.json";

export const metadata: Metadata = {
  title: "Demo Videos",
  description:
    "Watch short PracticeDilly demo videos at your own pace. Appointment reminders, texting, reviews, paperless forms, campaigns, and more. Questions? Call (949) 407-5907.",
  alternates: {
    canonical: "https://practicedilly.com/resources/demo-videos",
  },
  openGraph: {
    title: "Demo Videos | PracticeDilly - See Features in Action",
    description:
      "Short demo videos so you can explore PracticeDilly at your own pace. Questions? Call (949) 407-5907.",
    url: "https://practicedilly.com/resources/demo-videos",
  },
};

export default function DemoVideosPage() {
  const { intro, phoneNumber, phoneHref } = demoVideosData as {
    intro: string;
    phoneNumber: string;
    phoneHref: string;
  };
  const categories = getDemoCategories();

  return (
    <div className="relative min-h-screen bg-background" data-page="demo-videos">
      {/* Hero */}
      <div className="relative border-b border-border py-20">
        <GridBackground
          gridSize={1280 / 11}
          contentWidth={960}
          contentPadding={64}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="Videotape" text="Demo Videos" as="h1" />
            <HeadingWithHighlight
              text="See Features in "
              highlighted="Action"
              className="text-center"
              as="h2"
            />
            <p className="font-sans text-base leading-6 text-muted">
              {intro.split(phoneNumber)[0].trim()}{" "}
              <a
                href={phoneHref}
                className="font-medium text-primary hover:underline"
              >
                {phoneNumber}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Video categories */}
      <SectionContainer
        className="px-4 lg:px-16"
        sectionLabel="Demo Videos"
        sectionIndex={1}
        sectionTotal={1}
      >
        <div className="flex flex-col gap-16">
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="flex flex-col gap-6 scroll-mt-24">
              <HeadingWithHighlight text={category.name} className="text-2xl md:text-3xl" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
                {category.videos.map((video) => (
                  <li key={video.id}>
                    <DemoVideoCard
                      video={video}
                      categoryName={category.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
