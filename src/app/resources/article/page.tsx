import SectionContainer from "@/common/SectionContainer";
import BlogCard from "@/common/BlogCard";
import blogsData from "@/data/blogs.json";
import GridBackground from "@/components/GridBackground";
import type { Metadata } from "next";
import HeroPill from "@/common/HeroPill";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { getAuthorSlugByName } from "@/utils/authors";

export const metadata: Metadata = {
  title: "Articles - Expert Insights on Dental Practice Management",
  description: "Expert insights on dental practice management, patient engagement, and growth strategies from PracticeDilly.",
  keywords: [
    "dental practice management",
    "dental practice blog",
    "patient communication",
    "dental software",
    "practice management tips",
  ],
};

export default function ArticleIndexPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b border-border py-20">
        {/* Grid Background */}
        <GridBackground gridSize={1280 / 11} contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="FileText" text="Articles" as="h1" />
            <HeadingWithHighlight
              text="Expert Insights on Dental Practice "
              highlighted="Management"
              as="h2"
            />
            <p className="font-sans text-base leading-6 text-foreground max-w-2xl">
              Expert insights on dental practice management, patient engagement, and growth strategies from PracticeDilly.
            </p>


          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <SectionContainer
        className="items-start px-4 md:px-8 lg:px-16"
        sectionLabel="Articles"
        sectionIndex={1}
        sectionTotal={1}
      >
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[37px] max-w-[1280px] mx-auto border-border">
            {blogsData.map((blog) => (
              <BlogCard
                key={blog.slug}
                slug={blog.slug}
                title={blog.title}
                description={blog.description}
                author={blog.author}
                authorSlug={blog.author ? getAuthorSlugByName(blog.author) : undefined}
                date={blog.date}
                readTime={blog.readTime}
                category={blog.category}
                image={`/blog-images/${blog.slug}.png`}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
