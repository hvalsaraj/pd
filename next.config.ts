import type { NextConfig } from "next";

/**
 * Redirects from the legacy practicedilly.com sitemap to the new Next.js app routes.
 * Permanent (308) redirects preserve SEO value and update search engine index.
 */
const legacyRedirects: { source: string; destination: string; permanent: boolean }[] = [
  // --- Main / static pages ---
  { source: "/pricing.html", destination: "/pricing", permanent: true },
  { source: "/about-us.html", destination: "/about", permanent: true },
  { source: "/testimonials.html", destination: "/reviews", permanent: true },
  { source: "/testimonials", destination: "/reviews", permanent: true },

  // --- Feature pages (old .html → /features/[slug]) ---
  { source: "/two-way-texting.html", destination: "/features/texting", permanent: true },
  { source: "/dental-appointment-reminder-software.html", destination: "/features/appointment-reminders", permanent: true },
  { source: "/campaigns-and-promotions.html", destination: "/features/email-marketing", permanent: true },
  { source: "/dental-reputation-management-software.html", destination: "/features/reviews", permanent: true },
  { source: "/dental-mobile-app.html", destination: "/features/mobile-app", permanent: true },
  { source: "/automated-recalls.html", destination: "/features/appointment-reminders", permanent: true },
  { source: "/paperless-forms.html", destination: "/features/online-forms", permanent: true },
  { source: "/features/scheduling", destination: "/features/online-scheduling", permanent: true },
  { source: "/features/digital-forms", destination: "/features/online-forms", permanent: true },
  { source: "/text-to-pay.html", destination: "/features/billing-payments", permanent: true },
  { source: "/dental-insurance-verifications.html", destination: "/features/appointment-reminders", permanent: true },
  { source: "/features/reminders", destination: "/features/appointment-reminders", permanent: true },

  // --- Integration / "best companion" pages ---
  { source: "/best-companion-for-dentrix-users.html", destination: "/integrations/dentrix", permanent: true },
  { source: "/best-companion-for-eaglesoft-users.html", destination: "/integrations/eaglesoft", permanent: true },
  { source: "/best-companion-for-opendental-users.html", destination: "/integrations/opendental", permanent: true },
  { source: "/best-companion-for-practice-web.html", destination: "/integrations/practice-web", permanent: true },

  // --- Demo (legacy demo.html and /demo/*.html → /resources/demo-videos) ---
  { source: "/demo.html", destination: "/resources/demo-videos", permanent: true },
  { source: "/demo", destination: "/resources/demo-videos", permanent: true },
  {
    source: "/demo/appointment-reminders-customized-for-patients.html",
    destination: "/resources/demo-videos/how-can-appointment-reminders-be-customized-for-patients",
    permanent: true,
  },
  {
    source: "/demo/automate-google-yelp-facebook-review-requests.html",
    destination: "/resources/demo-videos/how-to-automate-google-yelp-and-facebook-reviews-requests",
    permanent: true,
  },
  {
    source: "/demo/send-appointment-reminders-in-spanish.html",
    destination: "/resources/demo-videos/send-appointment-reminders-in-spanish",
    permanent: true,
  },
  {
    source: "/demo/customize-message-that-goes-out-in-online-review-requests.html",
    destination: "/resources/demo-videos/how-to-customize-the-message-that-goes-out-in-the-online-review-requests",
    permanent: true,
  },
  {
    source: "/demo/explore-email-templates.html",
    destination: "/resources/demo-videos/explore-the-email-templates-to-strengthen-patient-relationships",
    permanent: true,
  },
  {
    source: "/demo/how-dental-offices-can-use-appointment-reminder-system.html",
    destination: "/resources/demo-videos/how-dental-offices-can-use-appointment-reminder-system",
    permanent: true,
  },
  {
    source: "/demo/how-to-send-paperless-forms-to-patients.html",
    destination: "/resources/demo-videos/how-to-send-paperless-forms-to-patients",
    permanent: true,
  },
  {
    source: "/demo/how-to-send-recieve-text-messages.html",
    destination: "/resources/demo-videos/how-to-send-and-receive-text-messages",
    permanent: true,
  },
  {
    source: "/demo/how-to-use-practicedilly-dental-mobile-app.html",
    destination: "/resources/demo-videos/how-to-use-practicedillys-dental-mobile-app",
    permanent: true,
  },
  {
    source: "/demo/request-google-yelp-and-facebook-reviews-from-your-patients.html",
    destination: "/resources/demo-videos/how-to-request-google-yelp-and-facebook-reviews-from-your-patients",
    permanent: true,
  },
  {
    source: "/demo/send-covid-19-pre-screening-form-to-your-patients.html",
    destination: "/resources/demo-videos/how-to-send-covid-19-pre-screening-form-to-your-patients",
    permanent: true,
  },
  {
    source: "/demo/send-email-campaign.html",
    destination: "/resources/demo-videos/how-to-send-an-email-campaign-to-all-of-your-patients",
    permanent: true,
  },
  {
    source: "/demo/send-mass-text-message.html",
    destination: "/resources/demo-videos/how-to-send-a-mass-text-message-to-your-patients",
    permanent: true,
  },
  {
    source: "/demo/send-mass-text-messages-targeting-specific-patient-groups.html",
    destination: "/resources/demo-videos/how-to-send-mass-text-messages-targeting-specific-patient-groups",
    permanent: true,
  },
  {
    source: "/demo/send-text-messages-on-specific-date.html",
    destination: "/resources/demo-videos/how-can-you-send-text-messages-to-patients-on-a-specific-date",
    permanent: true,
  },
  {
    source: "/demo/how-to-send-payment-requests-to-patients.html",
    destination: "/resources/demo-videos/how-to-send-payment-requests-to-patients",
    permanent: true,
  },
  {
    source: "/demo/how-to-have-practiceDilly-verify-insurance-periodically-with-the-patients.html",
    destination: "/resources/demo-videos/how-practicedilly-verify-insurance-periodically-with-patients",
    permanent: true,
  },
  {
    source: "/demo/send-a-masstext-message-to-all-the-patients-who-have-missed-their-appointments-in-the-past.html",
    destination:
      "/resources/demo-videos/how-to-send-a-mass-text-message-to-all-the-patients-who-missed-their-appointments",
    permanent: true,
  },

  // --- Blog (legacy /blog/*.html → /resources/article or /resources/article/[slug]) ---
  { source: "/blog/home.html", destination: "/resources/article", permanent: true },
  { source: "/blog/dental-appointment-reminders.html", destination: "/resources/article/dental-appointment-reminders", permanent: true },
  { source: "/blog/paperless-dental-forms.html", destination: "/resources/article/paperless-dental-forms", permanent: true },
  {
    source: "/blog/reputation-management-for-dentists.html",
    destination: "/resources/article/online-reputation-management-for-dentists",
    permanent: true,
  },
  { source: "/blog/text-messaging-for-dentists.html", destination: "/resources/article/text-messaging-for-dentists", permanent: true },
  {
    source: "/blog/why-you-should-still-get-reviews-on-yelp.html",
    destination: "/resources/article/why-get-reviews-on-yelp",
    permanent: true,
  },
  {
    source: "/blog/what-is-online-review-gating.html",
    destination: "/resources/article/what-is-online-review-gating",
    permanent: true,
  },
  {
    source: "/blog/how-can-i-reduce-appointment-no-shows.html",
    destination: "/resources/article/reduce-appointment-no-shows",
    permanent: true,
  },
  { source: "/blog/why-create-a-patient-record.html", destination: "/resources/article/why-create-patient-record", permanent: true },
  {
    source: "/blog/acquire-patients-email-addresses.html",
    destination: "/resources/article/acquire-patients-email-addresses",
    permanent: true,
  },
  {
    source: "/blog/overpaying-patient-engagement-platform.html",
    destination: "/resources/article/overpaying-dental-software",
    permanent: true,
  },
  {
    source: "/blog/You-are-the-Best-Dentist-in-Town.html",
    destination: "/resources/article/best-dentist-poor-google-ratings",
    permanent: true,
  },

  // --- Case study (legacy /case-study/*.html → /resources/case-study or /resources/case-study/[slug]) ---
  { source: "/case-study/home.html", destination: "/resources/case-study", permanent: true },
  {
    source: "/case-study/pacific-ocean-dental-group.html",
    destination: "/resources/case-study/pacific-ocean-dental-group",
    permanent: true,
  },
  { source: "/case-study/saghi-parham-dds.html", destination: "/resources/case-study/saghi-parham-dds", permanent: true },
  {
    source: "/case-study/picasso-smiles-dental.html",
    destination: "/resources/case-study/picasso-smiles-dental",
    permanent: true,
  },
  { source: "/case-study/village-family-dental.html", destination: "/resources/case-study/village-family-dental", permanent: true },
  { source: "/case-study/mike-shannon-dds.html", destination: "/resources/case-study/mike-shannon-dds", permanent: true },
  { source: "/case-study/future-dental-care.html", destination: "/resources/case-study/future-dental-care", permanent: true },

  // --- Legacy paths without .html (in case linked or cached without extension) ---
  { source: "/blog", destination: "/resources/article", permanent: true },
  { source: "/blog/", destination: "/resources/article", permanent: true },
  { source: "/case-study", destination: "/resources/case-study", permanent: true },
  { source: "/case-study/", destination: "/resources/case-study", permanent: true },
];

const APP_BASE = "https://app.practicedilly.com";

/**
 * 307 (temporary) redirects from marketing site to app subdomain.
 * Preserves path: e.g. /services/foo → https://app.practicedilly.com/services/foo
 */
const appRedirects: { source: string; destination: string; permanent: false }[] = [
  { source: "/services", destination: `${APP_BASE}/services`, permanent: false },
  { source: "/services/:path*", destination: `${APP_BASE}/services/:path*`, permanent: false },
  { source: "/email", destination: `${APP_BASE}/email`, permanent: false },
  { source: "/email/:path*", destination: `${APP_BASE}/email/:path*`, permanent: false },
  { source: "/s/c", destination: `${APP_BASE}/s/c`, permanent: false },
  { source: "/s/c/:path*", destination: `${APP_BASE}/s/c/:path*`, permanent: false },
  { source: "/form", destination: `${APP_BASE}/form`, permanent: false },
  { source: "/form/:path*", destination: `${APP_BASE}/form/:path*`, permanent: false },
  { source: "/l", destination: `${APP_BASE}/l`, permanent: false },
  { source: "/l/:path*", destination: `${APP_BASE}/l/:path*`, permanent: false },
  { source: "/d", destination: `${APP_BASE}/d`, permanent: false },
  { source: "/d/:path*", destination: `${APP_BASE}/d/:path*`, permanent: false },
  { source: "/review", destination: `${APP_BASE}/review`, permanent: false },
  { source: "/review/:path*", destination: `${APP_BASE}/review/:path*`, permanent: false },
  { source: "/pay", destination: `${APP_BASE}/pay`, permanent: false },
  { source: "/pay/:path*", destination: `${APP_BASE}/pay/:path*`, permanent: false },
  { source: "/checkout", destination: `${APP_BASE}/checkout`, permanent: false },
  { source: "/checkout/:path*", destination: `${APP_BASE}/checkout/:path*`, permanent: false },
  { source: "/biz", destination: `${APP_BASE}/biz`, permanent: false },
  { source: "/biz/:path*", destination: `${APP_BASE}/biz/:path*`, permanent: false },
  { source: "/online", destination: `${APP_BASE}/online`, permanent: false },
  { source: "/online/:path*", destination: `${APP_BASE}/online/:path*`, permanent: false },
  { source: "/forms", destination: `${APP_BASE}/forms`, permanent: false },
  { source: "/forms/:path*", destination: `${APP_BASE}/forms/:path*`, permanent: false },
  { source: "/f", destination: `${APP_BASE}/f`, permanent: false },
  { source: "/f/:path*", destination: `${APP_BASE}/f/:path*`, permanent: false },
  { source: "/appointment-request", destination: `${APP_BASE}/appointment-request`, permanent: false },
  { source: "/appointment-request/:path*", destination: `${APP_BASE}/appointment-request/:path*`, permanent: false },
  { source: "/onboarding", destination: `${APP_BASE}/onboarding`, permanent: false },
  { source: "/onboarding/:path*", destination: `${APP_BASE}/onboarding/:path*`, permanent: false },
  { source: "/email-campaign", destination: `${APP_BASE}/email-campaign`, permanent: false },
  { source: "/email-campaign/:path*", destination: `${APP_BASE}/email-campaign/:path*`, permanent: false },
  { source: "/recall-email", destination: `${APP_BASE}/recall-email`, permanent: false },
  { source: "/recall-email/:path*", destination: `${APP_BASE}/recall-email/:path*`, permanent: false },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [...legacyRedirects, ...appRedirects];
  },
};

export default nextConfig;
