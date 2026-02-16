import Button from "@/common/Button";
import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import { Link2, ArrowRight } from "lucide-react";
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
    name: "Practice Web",
    logo: "/integrations/logos/practice-web.png",
    slug: "practice-web",
  },
];

export default function IntegrationsSection() {
  return (
    <SectionContainer className="items-center border-t border-border" id="integrations">
      <SectionHeader
        icon={Link2}
        label="Integrations"
        heading={{
          text: "Seamlessly Integrated ",
          highlighted: "With Your PMS",
        }}
        description="Connect PracticeDilly with your existing practice management system for a unified workflow."
        className="max-w-[600px] px-4"
      />

      {/* Integrations Grid - Card style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-4xl gap-4 px-4">
        {integrations.map((integration) => (
          <Link
            key={integration.name}
            href={`/integrations/${integration.slug}`}
            className="group flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-8 py-10 transition-all duration-200 hover:border-primary hover:bg-primary/5"
          >
            <div className="relative h-14 w-[140px] shrink-0">
              <Image
                src={integration.logo}
                alt={integration.name}
                fill
                className="object-contain object-center transition-opacity group-hover:opacity-90"
                sizes="140px"
              />
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-primary" aria-hidden />
          </Link>
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <Button href="/integrations" variant="secondary" className="px-6">
          View all integrations
        </Button>
      </div>
    </SectionContainer>
  );
}
