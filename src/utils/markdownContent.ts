/**
 * Builds markdown content for agent/LLM consumption when Accept: text/markdown.
 * Full content for all pages (home, about, contact, pricing, reviews, legal, etc.).
 */

import featuresData from "@/data/features.json";
import caseStudiesData from "@/data/case-studies.json";
import blogsData from "@/data/blogs.json";
import integrationsData from "@/data/integrations.json";
import authorsData from "@/data/authors.json";
import pagesData from "@/data/pages.json";
import legalData from "@/data/legal.json";
import testimonialsData from "@/data/testimonials.json";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://practicedilly.com";

function link(href: string, text: string) {
  const url = href.startsWith("http") ? href : `${BASE}${href}`;
  return `[${text}](${url})`;
}

// --- Page data types (from pages.json) ---
type PagesData = typeof pagesData;
type LegalData = typeof legalData;
type TestimonialItem = { id: string; practiceName: string; quote: string; rating: number; authorName: string; authorTitle: string };

// --- Markdown builders for static pages (full content from JSON) ---

function buildHomeMarkdown(): string {
  const p = (pagesData as PagesData).home;
  let md = `# ${p.hero.heading}\n\n${p.hero.description}\n\n`;
  md += `${p.hero.trust}\n\n`;
  md += `${link("/pricing", p.hero.ctaPrimary)} | ${link("/pricing", p.hero.ctaSecondary)}\n\n`;

  md += `## ${p.whyPracticeDilly.heading}\n\n${p.whyPracticeDilly.description}\n\n`;
  p.whyPracticeDilly.stats.forEach((s) => {
    md += `- **${s.title}**: ${s.value}${s.unit} ${s.description} – ${s.explanation}\n`;
  });
  md += "\n";

  md += `## ${p.testimonialsSection.heading}\n\n${p.testimonialsSection.description}\n\n`;
  (testimonialsData as TestimonialItem[]).forEach((t) => {
    md += `- **${t.authorName}** (${t.practiceName}): "${t.quote}"\n`;
  });
  md += `\n${link("/reviews", p.testimonialsSection.cta)}\n\n`;

  md += `## ${p.integrationsSection.heading}\n\n${p.integrationsSection.description}\n\n`;
  p.integrationsSection.integrations.forEach((i) => {
    md += `- ${link(`/integrations/${i.slug}`, i.name)}\n`;
  });
  md += `\n${link("/integrations", p.integrationsSection.cta)}\n\n`;

  md += `## ${p.modernPractice.heading}\n\n${p.modernPractice.description}\n\n`;
  p.modernPractice.features.forEach((f) => {
    md += `- **${f.title}** – ${f.description}\n`;
  });
  md += "\n";

  md += `## ${p.featuresShowcase.heading}\n\n${p.featuresShowcase.description}\n\n`;
  p.featuresShowcase.features.forEach((f) => {
    md += `### ${f.title}\n\n${f.description}\n\n`;
    f.bullets.forEach((b) => {
      md += `- ${b}\n`;
    });
    md += "\n";
  });
  md += `${link("/features", p.featuresShowcase.cta)}\n\n`;

  md += `## ${p.pricingSection.heading}\n\n${p.pricingSection.description}\n\n`;
  md += `### ${p.pricingSection.singleLocation.title}\n\n${p.pricingSection.singleLocation.description}\n\n`;
  p.pricingSection.singleLocation.features.forEach((f) => {
    md += `- ${f}\n`;
  });
  md += `\n### ${p.pricingSection.multiLocation.title} ${p.pricingSection.multiLocation.badge ? `(${p.pricingSection.multiLocation.badge})` : ""}\n\n${p.pricingSection.multiLocation.description}\n\n`;
  p.pricingSection.multiLocation.features.forEach((f) => {
    md += `- ${f}\n`;
  });
  md += `\n**${p.pricingSection.ctaHeading}** ${p.pricingSection.ctaDescription}\n\n`;
  md += `${link("/pricing", p.pricingSection.ctaButton)}\n\n`;
  md += `*${p.pricingSection.ctaNote}*\n\n`;

  md += "## Frequently Asked Questions\n\n";
  p.faq.forEach((faq) => {
    md += `### ${faq.question}\n\n${faq.answer}\n\n`;
  });

  md += `## ${p.cta.heading}\n\n${p.cta.description}\n\n`;
  p.cta.benefits.forEach((b) => {
    md += `- ${b}\n`;
  });
  md += `\n${link("/contact", p.cta.button)}\n\n`;
  md += `*${p.cta.note}*\n\n`;

  md += `[Features](${BASE}/features) | [Integrations](${BASE}/integrations) | [Pricing](${BASE}/pricing) | [Case Studies](${BASE}/resources/case-study) | [Articles](${BASE}/resources/article) | [About](${BASE}/about) | [Contact](${BASE}/contact)\n`;
  return md;
}

function buildAboutMarkdown(): string {
  const p = (pagesData as PagesData).about;
  let md = `# ${p.hero.label} – ${p.hero.heading}\n\n${p.hero.description}\n\n`;

  md += "## Our Story\n\n";
  p.storySections.forEach((s) => {
    md += `### ${s.title}${s.year ? ` (${s.year})` : ""}\n\n${s.description}\n\n`;
  });

  md += "## CEO Quote\n\n";
  md += `"${p.ceoQuote.quote}"\n\n— ${p.ceoQuote.author}, ${p.ceoQuote.title}\n\n`;

  md += `## ${p.timeline.heading}\n\n${p.timeline.description}\n\n`;
  p.timeline.items.forEach((item) => {
    md += `### ${item.year}\n\n`;
    item.features.forEach((f) => {
      md += `- ${f}\n`;
    });
    md += "\n";
  });

  md += `## ${p.california.heading}\n\n`;

  md += `## ${p.cta.heading}\n\n${p.cta.description}\n\n`;
  md += `${link("/contact", p.cta.button)}\n\n`;

  md += `[Contact](${BASE}/contact) | [Features](${BASE}/features) | [Home](${BASE})\n`;
  return md;
}

function buildContactMarkdown(): string {
  const p = (pagesData as PagesData).contact;
  let md = `# ${p.hero.label} – ${p.hero.heading}\n\n${p.hero.description}\n\n`;

  md += `## ${p.address.title}\n\n${p.address.line1}\n${p.address.line2}\n\n`;
  md += `## ${p.email.title}\n\n${link(p.email.href, p.email.value)}\n\n`;
  md += `## ${p.phone.title}\n\n${link(p.phone.href, p.phone.value)}\n\n`;

  md += `## ${p.help.heading}\n\n${p.help.description}\n\n`;
  md += `**Office Hours:** ${p.help.officeHours}\n\n`;
  md += `**Response Time:** ${p.help.responseTime}\n\n`;

  md += `[Home](${BASE}) | [Pricing](${BASE}/pricing) | [Features](${BASE}/features)\n`;
  return md;
}

function buildPricingMarkdown(): string {
  const p = (pagesData as PagesData).pricing;
  let md = `# Pricing – ${p.hero.heading}\n\n${p.hero.description}\n\n`;
  md += `${link("/contact", p.hero.ctaPrimary)} | ${link("tel:+19494075907", p.hero.ctaSecondary)}\n\n`;

  md += "## Plans\n\n";
  p.plans.forEach((plan) => {
    md += `### ${plan.name}${plan.popular ? " (Most Popular)" : ""}\n\n`;
    md += `${plan.description}\n\n`;
    md += `**${plan.price}** ${plan.period}\n\n`;
    md += `${plan.cta}\n\n`;
  });
  md += `*${p.plansNote}*\n\n`;

  md += `## ${p.allFeaturesHeading}\n\n${p.allFeaturesDescription}\n\n`;
  p.allFeatures.forEach((cat) => {
    md += `### ${cat.category}\n\n${cat.description}\n\n`;
    cat.items.forEach((item) => {
      md += `- ${item}\n`;
    });
    md += "\n";
  });
  md += `${p.allFeaturesFooter}\n\n`;

  md += `## ${p.whyPracticeDillyHeading}\n\n`;
  p.whyPracticeDilly.forEach((item) => {
    md += `- **${item.title}** – ${item.description}\n`;
  });
  md += "\n";

  md += `## ${p.noContractsCta.heading}\n\n${p.noContractsCta.description}\n\n`;
  md += `${link("/contact", p.noContractsCta.button)}\n\n`;

  md += `## ${p.faqHeading}\n\n${p.faqDescription}\n\n`;
  p.faq.forEach((faq) => {
    md += `### ${faq.question}\n\n${faq.answer}\n\n`;
  });

  md += `[Features](${BASE}/features) | [Contact](${BASE}/contact) | [Home](${BASE})\n`;
  return md;
}

function buildTestimonialsMarkdown(): string {
  const p = (pagesData as PagesData).testimonials;
  let md = `# ${p.hero.heading}\n\n${p.hero.description}\n\n`;
  md += `${link("/contact", p.hero.ctaPrimary)} | ${link("tel:+19494075907", p.hero.ctaSecondary)}\n\n`;

  md += `## ${p.sectionHeading}\n\n${p.sectionDescription}\n\n`;
  (testimonialsData as TestimonialItem[]).forEach((t) => {
    md += `### ${t.authorName} – ${t.practiceName}\n\n`;
    md += `"${t.quote}"\n\n`;
    md += `*${t.rating} out of 5*\n\n`;
  });

  md += `## ${p.whyChooseHeading}\n\n${p.whyChooseDescription}\n\n`;
  p.whyChoose.forEach((item) => {
    md += `- **${item.title}** – ${item.description}\n`;
  });
  md += "\n";

  md += `## ${p.faqHeading}\n\n${p.faqDescription}\n\n`;
  p.faq.forEach((faq) => {
    md += `### ${faq.question}\n\n${faq.answer}\n\n`;
  });

  md += `[Case Studies](${BASE}/resources/case-study) | [Contact](${BASE}/contact) | [Home](${BASE})\n`;
  return md;
}

function buildSearchMarkdown(): string {
  const p = (pagesData as PagesData).search;
  let md = `# ${p.heading} | PracticeDilly\n\n${p.description}\n\n`;
  md += `Use the search on our website to find articles, features, integrations, and reviews.\n\n`;
  md += `[Home](${BASE}) | [Articles](${BASE}/resources/article) | [Features](${BASE}/features) | [Integrations](${BASE}/integrations)\n`;
  return md;
}

function buildPrivacyMarkdown(): string {
  const pr = (legalData as LegalData).privacy;
  let md = `# Privacy Policy | PracticeDilly\n\n${pr.intro}\n\n`;
  md += `*Last updated: ${pr.lastUpdated}*\n\n`;
  pr.sections.forEach((section: { title: string | null; paragraphs?: string[]; list?: string[] }) => {
    if (section.title) {
      md += `## ${section.title}\n\n`;
    }
    if (section.paragraphs) {
      section.paragraphs.forEach((para) => {
        md += `${para}\n\n`;
      });
    }
    if (section.list) {
      section.list.forEach((item) => {
        md += `- ${item}\n`;
      });
      md += "\n";
    }
  });
  md += `[Home](${BASE}) | [Contact](${BASE}/contact) | [Terms](${BASE}/terms-conditions)\n`;
  return md;
}

function buildTermsMarkdown(): string {
  const tr = (legalData as LegalData).terms;
  let md = `# Terms & Conditions | PracticeDilly\n\n${tr.intro}\n\n`;
  tr.sections.forEach((section: { title: string; paragraphs: string[] }) => {
    md += `## ${section.title}\n\n`;
    section.paragraphs.forEach((para) => {
      md += `${para}\n\n`;
    });
  });
  md += `[Home](${BASE}) | [Contact](${BASE}/contact) | [Privacy](${BASE}/privacy-policy)\n`;
  return md;
}

// --- Feature / Case Study / Blog / Integration types and builders (unchanged) ---

export interface FeatureData {
  slug: string;
  hero: {
    category?: { text: string };
    heading?: { text: string; highlighted?: string; suffix?: string };
    description?: string;
    badges?: string[];
  };
  list?: {
    features?: Array<{ title: string; description: string }>;
  };
  benefits?: { items?: Array<{ title: string; description: string }> };
  whyChoose?: { description?: string; items?: Array<{ title: string; description: string }> };
  faq?: { items?: Array<{ question: string; answer: string }> };
  seo?: { title?: string; description?: string };
}

export interface CaseStudyData {
  slug: string;
  title: string;
  description: string;
  content: string;
  location?: string;
  website?: string;
}

export interface BlogData {
  slug: string;
  title: string;
  description: string;
  content: string;
  author?: string;
  date?: string;
  category?: string;
}

export interface IntegrationData {
  slug: string;
  hero: {
    heading?: { text: string; highlighted?: string; suffix?: string };
    description?: string;
    badges?: string[];
  };
  features?: {
    items?: Array<{ title: string; description: string; benefits?: string[] }>;
  };
}

function featureToMarkdown(f: FeatureData): string {
  const title =
    f.hero?.heading?.text && f.hero?.heading?.highlighted && f.hero?.heading?.suffix
      ? `${f.hero.heading.text}${f.hero.heading.highlighted}${f.hero.heading.suffix}`.trim()
      : f.seo?.title || f.slug;
  const desc = f.hero?.description || f.seo?.description || "";
  let md = `# ${title}\n\n${desc}\n\n`;
  if (f.hero?.badges?.length) {
    md += `**Highlights:** ${f.hero.badges.join(", ")}\n\n`;
  }
  if (f.list?.features?.length) {
    md += "## Features\n\n";
    f.list.features.forEach((item) => {
      md += `- **${item.title}** – ${item.description}\n`;
    });
    md += "\n";
  }
  if (f.benefits?.items?.length) {
    md += "## Benefits\n\n";
    f.benefits.items.forEach((item) => {
      md += `- **${item.title}** – ${item.description}\n`;
    });
    md += "\n";
  }
  if (f.whyChoose?.description) {
    md += `## Why practices choose us\n\n${f.whyChoose.description}\n\n`;
  }
  if (f.faq?.items?.length) {
    md += "## FAQ\n\n";
    f.faq.items.forEach((item) => {
      md += `### ${item.question}\n\n${item.answer}\n\n`;
    });
  }
  md += `\n[All features](${BASE}/features) | [Contact](${BASE}/contact)\n`;
  return md;
}

function caseStudyToMarkdown(c: CaseStudyData): string {
  let md = `# ${c.title}\n\n${c.description}\n\n`;
  if (c.location) md += `*${c.location}*\n\n`;
  if (c.website) md += `Website: ${link(c.website, c.website)}\n\n`;
  md += c.content;
  md += `\n\n[All case studies](${BASE}/resources/case-study) | [Contact](${BASE}/contact)\n`;
  return md;
}

function blogToMarkdown(b: BlogData): string {
  let md = `# ${b.title}\n\n`;
  if (b.date || b.author || b.category) {
    md += `*${[b.date, b.author, b.category].filter(Boolean).join(" · ")}*\n\n`;
  }
  md += `${b.description}\n\n`;
  md += b.content;
  md += `\n\n[All articles](${BASE}/resources/article) | [Home](${BASE})\n`;
  return md;
}

function integrationToMarkdown(i: IntegrationData): string {
  const title =
    i.hero?.heading?.text && i.hero?.heading?.highlighted && i.hero?.heading?.suffix
      ? `${i.hero.heading.text}${i.hero.heading.highlighted}${i.hero.heading.suffix}`.trim()
      : i.slug;
  const desc = i.hero?.description || "";
  let md = `# ${title}\n\n${desc}\n\n`;
  if (i.hero?.badges?.length) {
    md += `**Highlights:** ${i.hero.badges.join(", ")}\n\n`;
  }
  if (i.features?.items?.length) {
    md += "## Features\n\n";
    i.features.items.forEach((item) => {
      md += `- **${item.title}** – ${item.description}\n`;
      if (item.benefits?.length) {
        item.benefits.forEach((ben) => {
          md += `  - ${ben}\n`;
        });
      }
    });
    md += "\n";
  }
  md += `[All integrations](${BASE}/integrations) | [Contact](${BASE}/contact)\n`;
  return md;
}

// --- Main router ---

export function getMarkdownForPath(path: string): string | null {
  const normalized = path.replace(/\/+$/, "") || "/";

  // Static pages (full content from pages.json + legal.json)
  switch (normalized) {
    case "/":
      return buildHomeMarkdown();
    case "/about":
      return buildAboutMarkdown();
    case "/contact":
      return buildContactMarkdown();
    case "/pricing":
      return buildPricingMarkdown();
    case "/reviews":
      return buildTestimonialsMarkdown();
    case "/search":
      return buildSearchMarkdown();
    case "/privacy-policy":
      return buildPrivacyMarkdown();
    case "/terms-conditions":
      return buildTermsMarkdown();
    default:
      break;
  }

  // /features
  if (normalized === "/features") {
    const features = featuresData as FeatureData[];
    let md = `# Features | PracticeDilly\n\nAI-powered patient communication: phones, reminders, texting, scheduling, reviews, and more.\n\n`;
    features.forEach((f) => {
      md += `- ${link(`/features/${f.slug}`, f.hero?.heading?.highlighted?.trim() || f.slug)}\n`;
    });
    md += `\n[Home](${BASE}) | [Pricing](${BASE}/pricing) | [Contact](${BASE}/contact)\n`;
    return md;
  }

  // /features/[slug]
  const featureMatch = normalized.match(/^\/features\/([^/]+)$/);
  if (featureMatch) {
    const f = (featuresData as FeatureData[]).find((x) => x.slug === featureMatch[1]);
    if (f) return featureToMarkdown(f);
    return null;
  }

  // /resources/case-study
  if (normalized === "/resources/case-study") {
    const studies = caseStudiesData as CaseStudyData[];
    let md = `# Case Studies | PracticeDilly\n\nSuccess stories from dental and healthcare practices.\n\n`;
    studies.forEach((c) => {
      md += `- ${link(`/resources/case-study/${c.slug}`, c.title)}\n`;
    });
    md += `\n[Home](${BASE}) | [Contact](${BASE}/contact)\n`;
    return md;
  }

  // /resources/case-study/[slug]
  const caseMatch = normalized.match(/^\/resources\/case-study\/([^/]+)$/);
  if (caseMatch) {
    const c = (caseStudiesData as CaseStudyData[]).find((x) => x.slug === caseMatch[1]);
    if (c) return caseStudyToMarkdown(c);
    return null;
  }

  // /resources/article
  if (normalized === "/resources/article") {
    const posts = blogsData as BlogData[];
    let md = `# Articles | PracticeDilly\n\nArticles on patient communication, reputation, and practice management.\n\n`;
    posts.forEach((b) => {
      md += `- ${link(`/resources/article/${b.slug}`, b.title)}\n`;
    });
    md += `\n[Home](${BASE}) | [Contact](${BASE}/contact)\n`;
    return md;
  }

  // /resources/article/[slug]
  const blogMatch = normalized.match(/^\/resources\/article\/([^/]+)$/);
  if (blogMatch) {
    const b = (blogsData as BlogData[]).find((x) => x.slug === blogMatch[1]);
    if (b) return blogToMarkdown(b);
    return null;
  }

  // /author
  if (normalized === "/author") {
    const authors = authorsData as Array<{ slug: string; name: string }>;
    let md = `# Authors | PracticeDilly\n\nBlog authors.\n\n`;
    authors.forEach((a) => {
      md += `- ${link(`/author/${a.slug}`, a.name)}\n`;
    });
    md += `\n[Articles](${BASE}/resources/article) | [Home](${BASE})\n`;
    return md;
  }

  // /author/[slug]
  const authorMatch = normalized.match(/^\/author\/([^/]+)$/);
  if (authorMatch) {
    const a = (authorsData as Array<{ slug: string; name: string; role?: string; bio?: string }>).find(
      (x) => x.slug === authorMatch[1]
    );
    if (a) {
      let md = `# ${a.name}\n\n`;
      if (a.role) md += `*${a.role}*\n\n`;
      if (a.bio) md += `${a.bio}\n\n`;
      const posts = (blogsData as BlogData[]).filter((b) => b.author === a.name);
      if (posts.length) {
        md += "## Articles\n\n";
        posts.forEach((b) => {
          md += `- ${link(`/resources/article/${b.slug}`, b.title)}\n`;
        });
      }
      md += `\n[All authors](${BASE}/author) | [Articles](${BASE}/resources/article) | [Home](${BASE})\n`;
      return md;
    }
    return null;
  }

  // /integrations
  if (normalized === "/integrations") {
    const integrations = integrationsData as IntegrationData[];
    let md = `# Integrations | PracticeDilly\n\nPractice management and EHR integrations.\n\n`;
    integrations.forEach((i) => {
      const name = i.hero?.heading?.highlighted?.trim() || i.slug;
      md += `- ${link(`/integrations/${i.slug}`, name)}\n`;
    });
    md += `\n[Home](${BASE}) | [Features](${BASE}/features) | [Contact](${BASE}/contact)\n`;
    return md;
  }

  // /integrations/[slug]
  const integrationMatch = normalized.match(/^\/integrations\/([^/]+)$/);
  if (integrationMatch) {
    const i = (integrationsData as IntegrationData[]).find((x) => x.slug === integrationMatch[1]);
    if (i) return integrationToMarkdown(i);
    return null;
  }

  return null;
}
