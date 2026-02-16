import type { Metadata } from "next";
import Image from "next/image";
import FeatureHeroSection from "@/components/feature-child/FeatureHeroSection";
import PhonesFeatureTabs from "@/components/feature-child/PhonesFeatureTabs";
import FeatureFAQSection from "@/components/feature-child/FeatureFAQSection";
import Button from "@/common/Button";
import featuresData from "@/data/features.json";
import pageData from "@/data/phones-feature-page.json";
import { generateFeatureSchema } from "@/utils/generateFeatureSchema";

const phonesData = pageData as typeof import("@/data/phones-feature-page.json");
const featureData = featuresData.find((f: { slug: string }) => f.slug === "phones");

export const metadata: Metadata = (() => {
  if (!featureData?.seo) {
    return {
      title: "Phones | PracticeDilly",
      description: "AI-powered phone system for dental and healthcare practices.",
    };
  }
  const seo = featureData.seo as {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    canonicalUrl: string;
  };
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://practicedilly.com";
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonicalUrl },
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
  };
})();

const pmsLogos = [
  { src: "/integrations/logos/dentrix.png", alt: "Dentrix" },
  { src: "/integrations/logos/open-dental.png", alt: "Open Dental" },
  { src: "/integrations/logos/eagle-soft.png", alt: "Eaglesoft" },
  { src: "/integrations/logos/practice-web.png", alt: "Practice Web" },
];

export default function PhonesFeaturePage() {
  const schemas = featureData ? generateFeatureSchema(featureData) : [];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="relative min-h-screen">
        {/* Hero — outcome-focused title, short feature outline */}
        <FeatureHeroSection
          category={{ icon: "PhoneCall", text: "Phones" }}
          heading={phonesData.hero.heading}
          description={phonesData.hero.description}
          cta={{ text: phonesData.hero.ctaPrimary, href: "/demo" }}
          image="/feature-images/phones.png"
        />

        {/* Feature-Packed tabs */}
        <PhonesFeatureTabs
          heading={phonesData.featureTabs.heading}
          description={phonesData.featureTabs.description}
          tabs={phonesData.featureTabs.tabs}
        />

        {/* Seamless PMS Integration — card layout */}
        <section className="border-b border-border bg-background py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                {phonesData.pmsIntegration.heading}
              </h2>
              <p className="font-sans text-base leading-6 text-muted-foreground mt-4">
                {phonesData.pmsIntegration.description}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 lg:p-12 max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-10 pb-10 border-b border-border">
                {pmsLogos.map((logo) => (
                  <div
                    key={logo.src}
                    className="relative h-9 w-[120px] md:h-10 md:w-[140px]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      sizes="(min-width: 768px) 140px, 120px"
                      className="object-contain opacity-90"
                    />
                  </div>
                ))}
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
                {phonesData.pmsIntegration.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-4 font-sans text-sm leading-6 text-foreground"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5" aria-hidden>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Button href={phonesData.pmsIntegration.ctaHref} variant="secondary" className="px-6">
                  {phonesData.pmsIntegration.ctaText}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial — card */}
        <section className="border-b border-border bg-primary/[0.05] py-16 md:py-20">
          <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
            <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10 lg:p-12 shadow-sm">
              <svg
                width="40"
                height="28"
                viewBox="0 0 56 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary/25 mb-6"
                aria-hidden
              >
                <path
                  d="M0 40V24.8C0 20.2667 0.8 16.0667 2.4 12.2C4.06667 8.26667 6.66667 4.4 10.2 0.6L17.4 5C14.8667 7.8 13 10.5 11.8 13.1C10.6667 15.6333 10.0667 18.4 10 21.4H18V40H0ZM30 40V24.8C30 20.2667 30.8 16.0667 32.4 12.2C34.0667 8.26667 36.6667 4.4 40.2 0.6L47.4 5C44.8667 7.8 43 10.5 41.8 13.1C40.6667 15.6333 40.0667 18.4 40 21.4H48V40H30Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="font-sans text-base leading-relaxed text-foreground md:text-lg">
                {phonesData.testimonial.quote}
              </blockquote>
              <footer className="mt-8 pt-6 border-t border-border font-sans text-sm font-medium text-foreground">
                {phonesData.testimonial.authorName},{" "}
                <span className="text-muted-foreground">{phonesData.testimonial.authorTitle}</span>
              </footer>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {featureData?.faq && (
          <FeatureFAQSection
            heading={featureData.faq.heading}
            description={featureData.faq.description}
            items={featureData.faq.items}
          />
        )}

        {/* Final CTA — warm primary band */}
        <section className="border-b border-border bg-primary/[0.08] py-20 md:py-24">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-center text-center gap-6">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
              {phonesData.finalCta.heading}
            </h2>
            <p className="font-sans text-base leading-6 text-muted-foreground max-w-xl">
              {phonesData.finalCta.subheading}
            </p>
            <Button href="/demo" variant="primary" className="mt-2 px-8 py-3 text-base">
              {phonesData.finalCta.ctaText}
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
