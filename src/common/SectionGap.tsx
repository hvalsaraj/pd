"use client";

import React, { useRef, useEffect } from "react";

interface SectionGapProps {
  className?: string;
  /** Tailwind height class (e.g. "h-20"). Default: "h-20". */
  height?: string;
}

const LINE_COUNT = 80;
const LINE_WIDTH_PX = 1;

/**
 * Spacer between sections: 80px tall, same width/borders as SectionContainer,
 * with 80 vertical grid lines and equal gaps. Not a semantic section.
 */
export default function SectionGap({ className = "", height = "h-20" }: SectionGapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const borderColor =
      getComputedStyle(container).getPropertyValue("border-top-color") || "rgb(229, 231, 235)";

    const draw = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = borderColor;
      const totalLineWidth = LINE_COUNT * LINE_WIDTH_PX;
      const gapCount = LINE_COUNT + 1;
      const gapPx = Math.max(0, (width - totalLineWidth) / gapCount);
      for (let i = 0; i < LINE_COUNT; i++) {
        const x = gapPx + i * (LINE_WIDTH_PX + gapPx);
        ctx.fillRect(x, 0, LINE_WIDTH_PX, height);
      }

      ctx.setTransform(1, 0, 0, 1, 0, 0);
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`max-w-7xl mx-auto border-t border-border ${height} w-full overflow-hidden bg-background ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        width={0}
        height={0}
      />
    </div>
  );
}
