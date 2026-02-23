import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import HeroPill from "@/common/HeroPill";
import GridBackground from "@/components/GridBackground";
import { MapPin, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PracticeDilly - Get in Touch",
  description: "Get in touch with PracticeDilly. Reach out to us via email, phone, or visit our office in Irvine, California. We're here to help your dental practice succeed.",
  alternates: {
    canonical: "https://practicedilly.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative border-b border-border py-20">
        <GridBackground gridSize={1280/11} contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <HeroPill icon="Mail" text="Contact Us" as="h1" />
            <HeadingWithHighlight
              text="Get in "
              highlighted="Touch"
              className="text-center"
              as="h2"
            />
            <p className="font-sans text-base leading-6 text-foreground max-w-2xl">
              Have questions? We'd love to hear from you. Reach out to us via email, phone, or visit our office in Irvine, California.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <SectionContainer
        className="items-center"
        sectionLabel="Contact Information"
        sectionIndex={1}
        sectionTotal={2}
      >
        <div className="w-full px-4 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Address Card */}
              <div className="border border-border rounded-xl bg-card p-8 flex flex-col items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)]" aria-hidden="true">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Address
                  </h3>
                  <p className="font-sans font-normal text-base leading-6 text-foreground">
                    224 Kempton<br />
                    Irvine, CA 92620
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="border border-border rounded-xl bg-card p-8 flex flex-col items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)]" aria-hidden="true">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Email
                  </h3>
                  <a
                    href="mailto:info@appdilly.com"
                    className="font-sans font-normal text-base leading-6 text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                  >
                    info@appdilly.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="border border-border rounded-xl bg-card p-8 flex flex-col items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)]" aria-hidden="true">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Phone
                  </h3>
                  <a
                    href="tel:+19494075907"
                    className="font-sans font-normal text-base leading-6 text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded"
                  >
                    (949) 407-5907
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      {/* Additional Contact Info Section */}
      <SectionContainer
        className="items-center"
        sectionLabel="We're Here to Help"
        sectionIndex={2}
        sectionTotal={2}
        showGapBefore
      >
        <div className="w-full px-4 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="border border-border rounded-xl bg-card p-8 md:p-12">
              <div className="flex flex-col gap-6">
                <HeadingWithHighlight
                  text="We're Here to "
                  highlighted="Help"
                  className="text-center"
                  as="h2"
                />
                <p className="font-sans font-normal text-base leading-6 text-foreground text-center max-w-2xl mx-auto">
                  Whether you have questions about our platform, need support, or want to learn more about how PracticeDilly can help your dental practice, we're ready to assist you.
                </p>
                <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-border">
                  <div className="flex flex-col gap-2">
                    <h4 className="font-sans font-semibold text-base text-foreground m-0">
                      Office Hours
                    </h4>
                    <p className="font-sans font-normal text-base leading-6 text-muted m-0">
                      Monday - Friday: 9:00 AM - 5:00 PM PST
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-sans font-semibold text-base text-foreground m-0">
                      Response Time
                    </h4>
                    <p className="font-sans font-normal text-base leading-6 text-muted m-0">
                      We typically respond to emails within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
