import Button from "@/common/Button";
import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import Image from "next/image";
import Link from "next/link";

interface Integration {
  name: string;
  logo: string;
  slug: string;
}

const integrations: Integration[] = [
  {
    name: "Dentrix",
    logo: "/integrations/logos/dentrix.png",
    slug: "dentrix",
  },
  {
    name: "Eaglesoft",
    logo: "/integrations/logos/eagle-soft.png",
    slug: "eaglesoft",
  },
  {
    name: "Open Dental",
    logo: "/integrations/logos/open-dental.png",
    slug: "opendental",
  },
  {
    name: "Practice-Web",
    logo: "/integrations/logos/practice-web.png",
    slug: "practice-web",
  }
];

interface IntegrationsSectionProps {
  showGapBefore?: boolean;
}

export default function IntegrationsSection({ showGapBefore }: IntegrationsSectionProps = {}) {
  return (
    <SectionContainer
      className="items-center"
      id="integrations"
      sectionLabel="Integrations"
      sectionIndex={3}
      sectionTotal={7}
      showGapBefore={showGapBefore}
    >
      {/* Header Section */}
      <SectionHeader
        heading={{
          text: "Seamlessly Integrated With ",
          highlighted: "Your PMS",
        }}
        description="Connect PracticeDilly with your existing practice management system for a unified workflow."
        className="max-w-[600px] px-4"
      />

      {/* Integrations Grid - Cards with logos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-4xl gap-4 md:gap-6">
        {integrations.map((integration) => (
          <Link
            key={integration.name}
            href={`/integrations/${integration.slug}`}
            className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 hover:border-primary transition-all duration-200 min-h-[140px]"
          >
            <Image
              src={integration.logo}
              alt={integration.name}
              width={160}
              height={64}
              className="object-contain max-w-full h-auto"
            />
            <span className="sr-only">{integration.name}</span>
          </Link>
        ))}
      </div>

      {/* Additional Info */}
      <div className="flex flex-col items-center gap-2 px-4">
     
        <Button href="/integrations" variant="secondary" className="px-6">View all integrations</Button>
      </div>
    </SectionContainer>
  );
}
