"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { searchAll, type SearchResult } from "@/utils/search";
import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import BlogCard from "@/common/BlogCard";
import FeatureCard from "@/common/FeatureCard";
import GridBackground from "@/components/GridBackground";
import { Search, BookOpen, Zap, Plug, MessageCircleHeart, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import testimonialsData from "@/data/testimonials.json";

interface SearchResults {
  blogs: SearchResult[];
  features: SearchResult[];
  integrations: SearchResult[];
  testimonials: SearchResult[];
  total: number;
}

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResults>({
    blogs: [],
    features: [],
    integrations: [],
    testimonials: [],
    total: 0,
  });
  const [searchInput, setSearchInput] = useState(query);

  useEffect(() => {
    setSearchInput(query);
    if (query) {
      const searchResults = searchAll(query);
      setResults(searchResults);
    } else {
      setResults({
        blogs: [],
        features: [],
        integrations: [],
        testimonials: [],
        total: 0,
      });
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchInput.trim())}`;
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b border-border py-20">
        <GridBackground
          gridSize={1280 / 11}
        
          contentWidth={960}
          contentPadding={64}
        />
        <div className="relative z-10 max-w-[1112px] mx-auto px-4 py-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <SectionHeader
              icon={Search}
              label="Search"
              heading={{
                text: query ? `Search Results for "${query}"` : "Search",
                highlighted: "",
              }}
              description={
                query
                  ? `Found ${results.total} result${results.total !== 1 ? "s" : ""}`
                  : "Search across our articles, features, integrations, and testimonials"
              }
              headingAs="h1"
            />

            {/* Search Input */}
            <form onSubmit={handleSearch} className="w-full max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search for articles, features, integrations..."
                  className="w-full px-6 py-4 pr-14 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5e48f0] focus:border-transparent font-sans text-base text-foreground bg-card"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-primary text-card rounded-lg hover:bg-[#4d3acf] transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {query ? (
        <div className="pb-20">
          {/* Articles Section */}
          {results.blogs.length > 0 && (
            <SectionContainer className="items-start px-4 md:px-8 lg:px-16">
              <div className="w-full">
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    Articles ({results.blogs.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[37px] max-w-[1280px] mx-auto border-t border-border pt-8">
                  {results.blogs.map((result) => (
                    <BlogCard
                      key={result.id}
                      slug={result.id}
                      title={result.title}
                      description={result.description}
                      author={result.metadata?.author || ""}
                      date={result.metadata?.date || ""}
                      readTime={result.metadata?.readTime || ""}
                      category={result.metadata?.category || ""}
                      image={`/blog-images/${result.id}.png`}
                    />
                  ))}
                </div>
              </div>
            </SectionContainer>
          )}

          {/* Features Section */}
          {results.features.length > 0 && (
            <SectionContainer className="items-start px-4 md:px-8 lg:px-16">
              <div className="w-full">
                <div className="flex items-center gap-3 mb-8">
                  <Zap className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    Features ({results.features.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[37px] max-w-[1280px] mx-auto border-t border-border pt-8">
                  {results.features.map((result) => (
                    <FeatureCard
                      key={result.id}
                      icon={result.metadata?.icon || "Zap"}
                      title={result.title}
                      description={result.description}
                      href={result.url}
                      category={result.metadata?.category}
                      badges={result.metadata?.badges}
                      variant="detailed"
                    />
                  ))}
                </div>
              </div>
            </SectionContainer>
          )}

          {/* Integrations Section */}
          {results.integrations.length > 0 && (
            <SectionContainer className="items-start px-4 md:px-8 lg:px-16">
              <div className="w-full">
                <div className="flex items-center gap-3 mb-8">
                  <Plug className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    Integrations ({results.integrations.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[37px] max-w-[1280px] mx-auto border-t border-border pt-8">
                  {results.integrations.map((result) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      className="group bg-card border border-border flex flex-col overflow-hidden rounded-xl hover:border-primary transition-all duration-200 hover:shadow-lg h-full"
                    >
                      <div className="p-6 flex flex-col gap-4 flex-1">
                        <div className="flex items-center gap-3">
                          <Plug className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-heading font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {result.title}
                          </h3>
                        </div>
                        <p className="font-sans text-sm leading-6 text-muted line-clamp-3 flex-1">
                          {result.description}
                        </p>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm mt-auto pt-2">
                          <span>Learn more</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </SectionContainer>
          )}

          {/* Reviews Section */}
          {results.testimonials.length > 0 && (
            <SectionContainer className="items-start px-4 md:px-8 lg:px-16">
              <div className="w-full">
                <div className="flex items-center gap-3 mb-8">
                  <MessageCircleHeart className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    Reviews ({results.testimonials.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[37px] max-w-[1280px] mx-auto border-t border-border pt-8">
                  {results.testimonials.map((result) => {
                    const testimonial = testimonialsData.find((t) => t.id === result.id);
                    return (
                      <Link
                        key={result.id}
                        href={result.url}
                        className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-200 hover:shadow-lg flex flex-col"
                      >
                        <div className="p-6 flex flex-col gap-4 flex-1">
                          {/* Author Info */}
                          <div className="flex items-center gap-3">
                            {testimonial?.authorImage && (
                              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                                <Image
                                  src={testimonial.authorImage}
                                  alt={result.metadata?.authorName || ""}
                                  fill
                                  className="object-cover"
                                  sizes="48px"
                                />
                              </div>
                            )}
                            <div className="flex flex-col flex-1 min-w-0">
                              <p className="font-sans font-semibold text-base leading-6 text-foreground">
                                {result.metadata?.authorName || ""}
                              </p>
                              <p className="font-sans text-sm leading-5 text-muted">
                                {result.title}
                              </p>
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="flex gap-1 items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < (result.metadata?.rating || 5)
                                    ? "text-warning fill-warning"
                                    : "text-[#e5e7eb]"
                                }`}
                              />
                            ))}
                          </div>

                          {/* Quote */}
                          <p className="font-sans text-sm leading-6 text-foreground line-clamp-4 flex-1">
                            "{result.description}"
                          </p>

                          {/* Link */}
                          <div className="flex items-center gap-2 text-primary font-medium text-sm mt-auto pt-2">
                            <span>Read full testimonial</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SectionContainer>
          )}

          {/* No Results */}
          {results.total === 0 && (
            <SectionContainer className="items-center px-4 md:px-8 lg:px-16">
              <div className="w-full max-w-2xl mx-auto text-center py-20">
                <Search className="h-16 w-16 text-[#e5e7eb] mx-auto mb-6" />
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  No results found
                </h2>
                <p className="font-sans text-base text-muted mb-8">
                  We couldn't find any results for "{query}". Try searching with different keywords.
                </p>
                <form onSubmit={handleSearch} className="max-w-md mx-auto">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      placeholder="Search again..."
                      className="w-full px-6 py-4 pr-14 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5e48f0] focus:border-transparent font-sans text-base text-foreground bg-card"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-primary text-card rounded-lg hover:bg-[#4d3acf] transition-colors"
                      aria-label="Search"
                    >
                      <Search className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            </SectionContainer>
          )}
        </div>
      ) : (
        <SectionContainer className="items-center px-4 md:px-8 lg:px-16">
          <div className="w-full max-w-2xl mx-auto text-center py-20">
            <p className="font-sans text-base text-muted">
              Enter a search term above to find articles, features, integrations, and testimonials.
            </p>
          </div>
        </SectionContainer>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="relative min-h-screen bg-background">
          <div className="relative border-b border-border py-20">
            <GridBackground
              gridSize={1280 / 11}
            
              contentWidth={960}
              contentPadding={64}
            />
            <div className="relative z-10 max-w-[1112px] mx-auto px-4 py-16">
              <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
                <SectionHeader
                  icon={Search}
                  label="Search"
                  heading={{
                    text: "Search",
                    highlighted: "",
                  }}
                  description="Search across our articles, features, integrations, and testimonials"
                />
              </div>
            </div>
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
