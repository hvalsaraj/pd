import SectionContainer from "@/common/SectionContainer";
import CaseStudyCard from "@/common/CaseStudyCard";
import caseStudiesData from "@/data/case-studies.json";
import GridBackground from "@/components/GridBackground";
import type { Metadata } from "next";
import HeroPill from "@/common/HeroPill";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";

export const metadata: Metadata = {
  title: "Case Studies - Success Stories from Dental Practices | PracticeDilly",
  description: "Real results from real dental practices using PracticeDilly. See how dental practices have improved efficiency, increased reviews, and grown their practices.",
  keywords: [
    "dental practice case studies",
    "dental practice success stories",
    "patient engagement results",
    "dental software case studies",
    "practice management success",
  ],
};

export default function CaseStudyIndexPage() {
  const featuredCaseStudy = caseStudiesData.find((cs) => cs.featured);
  const recentCaseStudies = caseStudiesData.filter((cs) => !cs.featured);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b border-border py-20">
        {/* Grid Background */}
        <GridBackground gridSize={1280 / 11} contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="FileText" text="Case Studies" as="h1" />
            <HeadingWithHighlight
              text="Case Studies"
              as="h2"
            />
            <p className="font-sans text-base leading-6 text-foreground max-w-2xl">
              Real results from real dental practices using PracticeDilly
            </p>

          </div>
        </div>
      </div>

      {/* Featured Case Study */}
      {featuredCaseStudy && (
        <SectionContainer
          className="items-start px-4 md:px-8 lg:px-16 py-12"
          sectionLabel="Featured"
          sectionIndex={1}
          sectionTotal={2}
        >
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-6 mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground">Featured</h2>
            </div>
            <div className="max-w-4xl">
              <CaseStudyCard
                slug={featuredCaseStudy.slug}
                title={featuredCaseStudy.title}
                description={featuredCaseStudy.description}
                image={`/case-studies/${featuredCaseStudy.slug}.png`}
                featured={true}
              />
            </div>
          </div>
        </SectionContainer>
      )}
      {/* Recent Case Studies */}
      <SectionContainer
        className="items-start px-4 md:px-8 lg:px-16 border-t border-border"
        sectionLabel="Recent Case Studies"
        sectionIndex={2}
        sectionTotal={2}
        showGapBefore={!!featuredCaseStudy}
      >
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-6 mb-8 pt-12">
            <h2 className="text-2xl font-heading font-semibold text-foreground">Recent Case Studies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[37px]">
            {recentCaseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.slug}
                slug={caseStudy.slug}
                title={caseStudy.title}
                description={caseStudy.description}
                image={`/case-studies/${caseStudy.slug}.png`}
                featured={false}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
