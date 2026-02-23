import blogsData from "@/data/blogs.json";
import featuresData from "@/data/features.json";
import integrationsData from "@/data/integrations.json";
import testimonialsData from "@/data/testimonials.json";

export interface SearchResult {
  type: "blog" | "feature" | "integration" | "testimonial";
  id: string;
  title: string;
  description: string;
  url: string;
  metadata?: Record<string, any>;
}

/**
 * Normalize text for search comparison
 */
function normalizeText(text: string): string {
  return text.toLowerCase().trim();
}

/**
 * Check if search term matches text
 */
function matchesSearch(text: string, searchTerm: string): boolean {
  const normalizedText = normalizeText(text);
  const normalizedSearch = normalizeText(searchTerm);
  return normalizedText.includes(normalizedSearch);
}

/**
 * Extract searchable text from an object
 */
function extractSearchableText(obj: any, fields: string[]): string {
  return fields
    .map((field) => {
      const value = getNestedValue(obj, field);
      return value ? String(value) : "";
    })
    .join(" ");
}

/**
 * Get nested value from object using dot notation
 */
function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

/**
 * Search blogs
 */
function searchBlogs(searchTerm: string): SearchResult[] {
  if (!searchTerm) return [];

  return blogsData
    .filter((blog) => {
      const searchableText = extractSearchableText(blog, [
        "title",
        "description",
        "content",
        "category",
        "author",
      ]);
      return matchesSearch(searchableText, searchTerm);
    })
    .map((blog) => ({
      type: "blog" as const,
      id: blog.slug,
      title: blog.title,
      description: blog.description,
      url: `/resources/article/${blog.slug}`,
      metadata: {
        author: blog.author,
        date: blog.date,
        category: blog.category,
        readTime: blog.readTime,
      },
    }));
}

/**
 * Search features
 */
function searchFeatures(searchTerm: string): SearchResult[] {
  if (!searchTerm) return [];

  return featuresData
    .filter((feature) => {
      const searchableText = extractSearchableText(feature, [
        "hero.heading.text",
        "hero.heading.highlighted",
        "hero.heading.suffix",
        "hero.description",
        "hero.category.text",
        "list.heading.text",
        "list.heading.highlighted",
        "list.description",
      ]);
      return matchesSearch(searchableText, searchTerm);
    })
    .map((feature) => ({
      type: "feature" as const,
      id: feature.slug,
      title:
        feature.hero.heading.text +
        (feature.hero.heading.highlighted || "") +
        (feature.hero.heading.suffix || ""),
      description: feature.hero.description,
      url: `/features/${feature.slug}`,
      metadata: {
        category: feature.hero.category.text,
        badges: feature.hero.badges,
        icon: feature.hero.category.icon,
      },
    }));
}

/**
 * Search integrations
 */
function searchIntegrations(searchTerm: string): SearchResult[] {
  if (!searchTerm) return [];

  return integrationsData
    .filter((integration) => {
      const searchableText = extractSearchableText(integration, [
        "hero.heading.text",
        "hero.heading.highlighted",
        "hero.heading.suffix",
        "hero.description",
        "hero.category.text",
      ]);
      return matchesSearch(searchableText, searchTerm);
    })
    .map((integration) => ({
      type: "integration" as const,
      id: integration.slug,
      title:
        integration.hero.heading.text +
        (integration.hero.heading.highlighted || "") +
        (integration.hero.heading.suffix || ""),
      description: integration.hero.description,
      url: `/integrations/${integration.slug}`,
      metadata: {
        category: integration.hero.category.text,
      },
    }));
}

/**
 * Search testimonials
 */
function searchTestimonials(searchTerm: string): SearchResult[] {
  if (!searchTerm) return [];

  return testimonialsData
    .filter((testimonial) => {
      const searchableText = extractSearchableText(testimonial, [
        "quote",
        "practiceName",
        "authorName",
        "authorTitle",
      ]);
      return matchesSearch(searchableText, searchTerm);
    })
    .map((testimonial) => ({
      type: "testimonial" as const,
      id: testimonial.id,
      title: testimonial.practiceName,
      description: testimonial.quote,
      url: `/reviews#${testimonial.id}`,
      metadata: {
        authorName: testimonial.authorName,
        authorTitle: testimonial.authorTitle,
        rating: testimonial.rating,
      },
    }));
}

/**
 * Search across all data sources
 */
export function searchAll(searchTerm: string): {
  blogs: SearchResult[];
  features: SearchResult[];
  integrations: SearchResult[];
  testimonials: SearchResult[];
  total: number;
} {
  const blogs = searchBlogs(searchTerm);
  const features = searchFeatures(searchTerm);
  const integrations = searchIntegrations(searchTerm);
  const testimonials = searchTestimonials(searchTerm);

  return {
    blogs,
    features,
    integrations,
    testimonials,
    total: blogs.length + features.length + integrations.length + testimonials.length,
  };
}
