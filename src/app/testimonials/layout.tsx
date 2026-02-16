import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | PracticeDilly",
  description: "Read real stories from dental practice owners and office managers about how PracticeDilly helped them streamline patient communication, reduce no-shows, and grow their practice.",
  keywords: [
    "PracticeDilly reviews",
    "dental software reviews",
    "patient communication reviews",
    "dental practice software testimonials",
    "practice management reviews",
    "dental software customer stories",
    "patient engagement reviews",
    "dental automation reviews",
    "practice management testimonials",
    "dental software feedback"
  ],
  alternates: {
    canonical: "https://practicedilly.com/testimonials",
  },
  openGraph: {
    title: "Customer Reviews | PracticeDilly",
    description: "Read real stories from dental practice owners and office managers about how PracticeDilly helped them streamline patient communication, reduce no-shows, and grow their practice.",
    url: "https://practicedilly.com/testimonials",
    siteName: "PracticeDilly",
    images: [
      {
        url: "https://practicedilly.com/og-images/testimonials.jpg",
        width: 1200,
        height: 630,
        alt: "PracticeDilly Customer Reviews",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews | PracticeDilly",
    description: "Read real stories from dental practice owners and office managers about how PracticeDilly helped them streamline patient communication, reduce no-shows, and grow their practice.",
    images: ["https://practicedilly.com/og-images/testimonials.jpg"],
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

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
