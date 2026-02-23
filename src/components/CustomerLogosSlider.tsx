"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import customers from "@/data/customers.json";

const TRUST_COUNT = "500+";
const LOGO_BASE = "/customer-logos";
const PX_PER_SECOND = 60;

const LOGOS = customers.map((customer) => ({
  src: `${LOGO_BASE}/${customer.logo}`,
  alt: `${customer.name} logo`,
}));

function LogoSet({
  logos,
  ariaHidden,
}: {
  logos: typeof LOGOS;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-stretch"
      aria-hidden={ariaHidden}
      data-logo-set
    >
      {logos.map((logo, i) => (
        <div
          key={i}
          className="flex h-full min-h-[88px] w-[200px] shrink-0 items-center justify-center border-r border-border px-6 py-4 md:min-h-[100px] md:w-[240px] md:px-12 md:py-8"
        >
          <div className="relative h-14 w-full md:h-20">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain object-center grayscale opacity-80"
              sizes="240px"
              unoptimized
            />
          </div>
        </div>
      ))}
    </div>
  );
}

interface CustomerLogosSliderProps {
  /** Show top border. Default: true */
  borderTop?: boolean;
  /** Show bottom border. Default: false */
  borderBottom?: boolean;
}

export default function CustomerLogosSlider({
  borderTop = true,
  borderBottom = false,
}: CustomerLogosSliderProps = {}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const firstSet = track.querySelector<HTMLDivElement>("[data-logo-set]");
      const setWidth = firstSet?.offsetWidth ?? 0;

      offsetRef.current -= PX_PER_SECOND * dt;
      if (setWidth > 0 && offsetRef.current <= -setWidth) {
        offsetRef.current += setWidth;
      }
      track.style.transform = `translateX(${offsetRef.current}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="relative bg-none"
      role="region"
      aria-label="Trusted by practices"
    >
      <div className="mx-auto flex max-w-full items-stretch overflow-hidden">
        {/* Left cell: 5 stars + Trusted by text */}
        <div className="flex shrink-0 flex-col justify-center gap-3 border-r border-y border-border bg-background px-8 py-6 md:px-10 md:py-8 z-10 max-w-[250px]">
          <div className="flex items-center gap-0.5" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 text-warning fill-warning md:h-5 md:w-5" />
            ))}
          </div>
          <p className="font-sans text-sm leading-tight text-muted-foreground md:text-base">
            Trusted by{" "}
            <span className="font-semibold text-primary">{TRUST_COUNT}</span>{" "}
            dental practices
          </p>
        </div>

        {/* Logo slider track: duplicate set for seamless loop */}
        <div
          className={[
            "flex min-w-0 flex-1 flex-col border-border overflow-hidden",
            borderTop && "border-t",
            borderBottom && "border-b",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div
            ref={trackRef}
            className="flex h-full min-h-0 items-stretch will-change-transform"
          >
            <LogoSet logos={LOGOS} />
            <LogoSet logos={LOGOS} ariaHidden />
          </div>
        </div>
      </div>
    </div>
  );
}
