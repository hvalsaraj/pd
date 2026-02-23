import FeatureHeroSection from "@/components/feature-child/FeatureHeroSection";
import FeatureListSection from "@/components/feature-child/FeatureListSection";
import FeatureBenefitsSection from "@/components/feature-child/FeatureBenefitsSection";
import FeatureWhyChooseSection from "@/components/feature-child/FeatureWhyChooseSection";
import SingleTestimonialSection from "@/components/SingleTestimonialSection";
import FeatureDemoVideosSection from "@/components/feature-child/FeatureDemoVideosSection";
import FeatureFAQSection from "@/components/feature-child/FeatureFAQSection";
import featuresData from "@/data/features.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generateFeatureSchema } from "@/utils/generateFeatureSchema";
import { getVideosByCategoryIds } from "@/utils/demoVideos";

/** Optional demo videos config per feature (category ids reference demo-videos.json). */
type FeatureDemoVideosConfig = {
  categoryIds?: string[];
  heading?: { text: string; highlighted?: string; suffix?: string };
  description?: string;
};

/** Map feature slug to testimonial id for contextually relevant testimonials. */
const FEATURE_TESTIMONIAL_IDS: Record<string, string> = {
  phones: "1",           // texts, emails, phone call reminders
  "appointment-reminders": "6", // automated confirmations, recall reminders
  "online-scheduling": "10", // text messages for appointment booking, confirmations
  texting: "5",          // Mass Texting, recall campaigns
  reviews: "4",          // online reviews, review requests
  "call-intelligence": "1", // phone call reminders, front office
  "billing-payments": "14", // text to pay, payment collection
  "online-forms": "7",   // online forms, paper-to-digital
  "email-marketing": "2", // automated reminders, confirmations, two-way texting
  "mobile-app": "11",    // mobile app, schedule, patient info, text replies
};

interface FeaturePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Allow all dynamic routes
export const dynamicParams = true;

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const featureData = featuresData.find((feature) => feature.slug === slug);

  if (!featureData || !featureData.seo) {
    return {
      title: "Feature Not Found | PracticeDilly",
      description: "The requested feature page could not be found.",
    };
  }

  const seo = featureData.seo;
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

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { slug } = await params;
  
  // Find the feature data by slug
  const featureData = featuresData.find((feature) => feature.slug === slug);
  
  if (!featureData) {
    notFound();
  }
  
  // Generate JSON-LD schema
  const schemas = generateFeatureSchema(featureData);

  // Resolve demo videos from demo-videos.json by category ids
  const demoVideosConfig = (featureData as { demoVideos?: FeatureDemoVideosConfig }).demoVideos;
  const categoryIds = demoVideosConfig?.categoryIds ?? [];
  const demoVideosList = getVideosByCategoryIds(categoryIds);
  const hasDemoVideos = demoVideosList.length > 0;
  const sectionTotal = hasDemoVideos ? 6 : 5;
  
  return (
    <>
      {/* JSON-LD Schema */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
      <div className="relative min-h-screen">
        <FeatureHeroSection {...featureData.hero} />
        <FeatureListSection {...featureData.list} sectionIndex={1} sectionTotal={sectionTotal} showGapBefore />
        <FeatureBenefitsSection {...featureData.benefits} sectionIndex={2} sectionTotal={sectionTotal} showGapBefore />
        <FeatureWhyChooseSection {...featureData.whyChoose} sectionIndex={3} sectionTotal={sectionTotal} showGapBefore />
        <SingleTestimonialSection
          testimonialId={FEATURE_TESTIMONIAL_IDS[slug]}
          sectionIndex={4}
          sectionTotal={sectionTotal}
          showGapBefore
        />
        {hasDemoVideos && (
          <FeatureDemoVideosSection
            heading={demoVideosConfig?.heading}
            description={demoVideosConfig?.description}
            videos={demoVideosList}
            sectionIndex={5}
            sectionTotal={sectionTotal}
            showGapBefore
          />
        )}
        <FeatureFAQSection
          {...featureData.faq}
          sectionIndex={hasDemoVideos ? 6 : 5}
          sectionTotal={sectionTotal}
          showGapBefore
        />
      </div>
    </>
  );
}
