import { notFound } from "next/navigation";
import Link from "next/link";
import caseStudiesData from "@/data/case-studies.json";
import SectionContainer from "@/common/SectionContainer";
import { H1, H3 } from "@/common/headings";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { ArrowLeft, ExternalLink, MapPin } from "lucide-react";
import type { Metadata } from "next";
import CaseStudyCard from "@/common/CaseStudyCard";
import { generateCaseStudyArticleSchema } from "@/utils/generateArticleSchema";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | PracticeDilly Case Studies`,
    description: caseStudy.description,
    keywords: [
      "dental practice case study",
      "dental practice success story",
      "patient engagement results",
      caseStudy.title.toLowerCase(),
      ...caseStudy.description.split(" ").slice(0, 5),
    ],
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: "article",
      images: [`/case-studies/${caseStudy.slug}.png`],
    },
  };
}

export default async function CaseStudySlugPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const articleSchema = generateCaseStudyArticleSchema({
    slug: caseStudy.slug,
    title: caseStudy.title,
    description: caseStudy.description,
    image: `/case-studies/${caseStudy.slug}.png`,
  });

  // Find related case studies
  const relatedCaseStudies = caseStudiesData
    .filter((cs) => caseStudy.relatedSlugs?.includes(cs.slug))
    .slice(0, 3);

  // Parse content into paragraphs
  const contentParagraphs = caseStudy.content.split("\n\n").filter((p) => p.trim());

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="relative min-h-screen bg-background">
        {/* Back Link */}
      <SectionContainer className="px-4 md:px-8 lg:px-16 pt-8 pb-4">
        <Link
          href="/resources/case-study"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all case studies</span>
        </Link>
      </SectionContainer>

      {/* Article Content */}
      <SectionContainer className="px-4 md:px-8 lg:px-16 py-12">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-6 mb-12">
            {/* Category Badge */}
            <div className="flex items-center">
              <span className="text-xs font-medium text-primary bg-[rgba(94,72,240,0.1)] px-2.5 py-1 rounded-full">
                Case Study
              </span>
            </div>

            {/* Title */}
            <HeadingWithHighlight text={caseStudy.title} className="!text-4xl !md:text-5xl !lg:text-6xl font-heading font-bold text-foreground !leading-tight" as="h1" />
           
           

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted">
              {caseStudy.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>{caseStudy.location}</span>
                </div>
              )}
              {caseStudy.website && (
                <div className="flex items-center gap-1.5">
                  <ExternalLink className="h-4 w-4" />
                  <a
                    href={caseStudy.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                    aria-label="Visit website (opens in new window)"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Stats Section (if available) */}
          {caseStudy.stats && caseStudy.stats.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 list-none" aria-label="Key results">
              {caseStudy.stats.map((stat, index) => (
                <li key={index} className="flex flex-col items-center text-center p-6 bg-card border border-border">
                  <p className="text-3xl md:text-4xl font-heading font-medium text-primary mb-2 m-0">
                    {stat.value}
                  </p>
                  <p className="text-sm font-sans text-muted m-0">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {contentParagraphs.map((paragraph, index) => {
              // Check if it's a heading
              if (paragraph.startsWith("## ")) {
                const headingText = paragraph.replace("## ", "");
                return (
                  <HeadingWithHighlight
                    key={index}
                    text={headingText}
                    className="!text-3xl !leading-tight font-heading font-semibold text-foreground mt-8 mb-4"
                    as="h2"
                  />
                );
              }

              // Check if it's a subheading
              if (paragraph.startsWith("### ")) {
                const headingText = paragraph.replace("### ", "");
                return (
                  <H3
                    key={index}
                    className="!text-2xl !leading-tight font-heading font-semibold text-foreground mt-6 mb-3"
                  >
                    {headingText}
                  </H3>
                );
              }

              // Check if it's a list item
              if (paragraph.startsWith("- ")) {
                const listItems = paragraph
                  .split("\n")
                  .filter((line) => line.trim().startsWith("- "))
                  .map((line) => line.replace("- ", "").trim());

                return (
                  <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-foreground">
                    {listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="font-sans text-base leading-6">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Regular paragraph
              if (paragraph.trim()) {
                // Check if it's a quote (starts and ends with quotes)
                if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-primary pl-4 py-2 my-6 italic text-foreground font-sans text-base leading-7"
                    >
                      {paragraph.slice(1, -1)}
                    </blockquote>
                  );
                }

                return (
                  <p
                    key={index}
                    className="font-sans text-base leading-7 text-foreground mb-6"
                  >
                    {paragraph}
                  </p>
                );
              }

              return null;
            })}
          </div>
        </article>
      </SectionContainer>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <SectionContainer className="px-4 md:px-8 lg:px-16 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">
              Related Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedCaseStudies.map((relatedCaseStudy) => (
                <CaseStudyCard
                  key={relatedCaseStudy.slug}
                  slug={relatedCaseStudy.slug}
                  title={relatedCaseStudy.title}
                  description={relatedCaseStudy.description}
                  image={`/case-studies/${relatedCaseStudy.slug}.png`}
                  featured={relatedCaseStudy.featured}
                />
              ))}
            </div>
          </div>
        </SectionContainer>
      )}
      </div>
    </>
  );
}
