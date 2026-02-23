import IntegrationHeroSection from "@/components/integration-child/IntegrationHeroSection";
import IntegrationFeaturesSection from "@/components/integration-child/IntegrationFeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import IntegrationWhyChooseSection from "@/components/integration-child/IntegrationWhyChooseSection";
import IntegrationCTASection from "@/components/integration-child/IntegrationCTASection";
import integrationsData from "@/data/integrations.json";
import featuresData from "@/data/features.json";
import { notFound } from "next/navigation";
import IntegrationTimeSection from "@/components/integration-child/IntegrationTimeSection";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

interface IntegrationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Allow all dynamic routes
export const dynamicParams = true;

export async function generateMetadata({ params }: IntegrationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const integrationData = integrationsData.find((integration) => integration.slug === slug);

  if (!integrationData || !integrationData.seo) {
    return {
      title: "Integration Not Found | PracticeDilly",
      description: "The requested integration page could not be found.",
    };
  }

  const seo = integrationData.seo;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://practicedilly.com";

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalUrl,
      siteName: "PracticeDilly",
      images: [
        {
          url: seo.ogImage.startsWith("http") ? seo.ogImage : `${baseUrl}${seo.ogImage}`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage.startsWith("http") ? seo.ogImage : `${baseUrl}${seo.ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function IntegrationPage({ params }: IntegrationPageProps) {
  const { slug } = await params;
  
  // Find the integration data by slug
  const integrationData = integrationsData.find((integration) => integration.slug === slug);
  
  if (!integrationData) {
    notFound();
  }

  const featureHeroImageMap: Record<string, string> = {};
  for (const feature of featuresData) {
    if (feature.hero?.image) {
      featureHeroImageMap[feature.slug] = feature.hero.image;
    }
  }

  const enrichedFeaturesItems = integrationData.features.items.map((item) => ({
    ...item,
    image: item.featureSlug ? featureHeroImageMap[item.featureSlug] : undefined,
  }));

  const SECTION_TOTAL = 5;

  return (
    <div className="relative min-h-screen">
      <IntegrationHeroSection {...integrationData.hero} image={integrationData.hero.image} />
      <IntegrationTimeSection
        stat={integrationData.hero.stat}
        primaryCta={integrationData.hero.cta}
        // sectionLabel="Overview"
        // sectionIndex={1}
        // sectionTotal={SECTION_TOTAL}
        // showGapBefore
      />
      <IntegrationFeaturesSection
        {...integrationData.features}
        items={enrichedFeaturesItems}
        sectionLabel="Features"
        sectionIndex={2}
        sectionTotal={SECTION_TOTAL}
        showGapBefore
      />
      <TestimonialSection sectionIndex={3} sectionTotal={SECTION_TOTAL} showGapBefore />
      <IntegrationWhyChooseSection
        {...integrationData.whyChoose}
        sectionIndex={4}
        sectionTotal={SECTION_TOTAL}
        showGapBefore
      />
      <CTASection
        showGapBefore={false}
      />
    </div>
  );
}
