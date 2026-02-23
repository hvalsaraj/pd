"use client";

import React, { useRef, useEffect, useCallback } from "react";
import type {
  FigmaGradientPaint,
  FigmaColor,
  FigmaVector,
  MeshGradientPoint,
  MeshGradientSource,
} from "@/types/figma-gradient";

function figmaColorToRgba(c: FigmaColor): string {
  const r = Math.round(c.r * 255);
  const g = Math.round(c.g * 255);
  const b = Math.round(c.b * 255);
  const a = c.a ?? 1;
  return `rgba(${r},${g},${b},${a})`;
}

function parseHexOrRgb(color: string): { r: number; g: number; b: number; a: number } {
  const t = color.trim();
  if (t.startsWith("rgba(")) {
    const m = t.match(/rgba?\(([^)]+)\)/);
    if (m) {
      const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
      return {
        r: parts[0] / 255,
        g: parts[1] / 255,
        b: parts[2] / 255,
        a: parts[3] ?? 1,
      };
    }
  }
  if (t.startsWith("#")) {
    const hex = t.slice(1);
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;
    const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
    return { r, g, b, a };
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}

export interface MeshGradientCanvasProps {
  /** Gradient from Figma (selected frame fills) or custom mesh points. */
  source: MeshGradientSource;
  /** Optional class for the wrapper. */
  className?: string;
  /** Optional opacity applied to the whole gradient. */
  opacity?: number;
}

/**
 * Renders a mesh-style or Figma-type gradient on a canvas.
 *
 * To use the selected Figma frame's gradient:
 * 1. In Figma, select the frame that has the gradient fill.
 * 2. Use Figma MCP get_design_context (no nodeId for figma-desktop uses selection).
 * 3. From the response, take the first gradient fill from the node's fills array.
 * 4. Pass it as source: { type: "figma", paint: <FigmaGradientPaint> }.
 *
 * Supports: gradient-linear, gradient-radial, gradient-angular, gradient-diamond.
 * For mesh-style blobs, use source: { type: "mesh", points: [{ x, y, color, radius? }, ...] }.
 */
export default function MeshGradientCanvas({
  source,
  className = "",
  opacity = 1,
}: MeshGradientCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const op = source.type === "figma" ? (source.paint.opacity ?? 1) * opacity : opacity;
    ctx.globalAlpha = op;

    if (source.type === "figma") {
      drawFigmaGradient(ctx, source.paint, width, height);
    } else {
      drawMeshGradient(ctx, source.points, width, height);
    }

    ctx.globalAlpha = 1;
  }, [source, opacity]);

  useEffect(() => {
    draw();
    const ro = new ResizeObserver(draw);
    const canvas = canvasRef.current;
    if (canvas) ro.observe(canvas);
    const onResize = () => draw();
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
      width={0}
      height={0}
      aria-hidden
    />
  );
}

function drawFigmaGradient(
  ctx: CanvasRenderingContext2D,
  paint: FigmaGradientPaint,
  width: number,
  height: number
) {
  const [p0, p1, p2] = paint.gradientHandlePositions;
  const stops = paint.gradientStops;

  const toPixel = (v: FigmaVector) => ({
    x: v.x * width,
    y: v.y * height,
  });

  const x0 = p0.x * width;
  const y0 = p0.y * height;
  const x1 = p1.x * width;
  const y1 = p1.y * height;

  if (paint.type === "gradient-linear") {
    const g = ctx.createLinearGradient(x0, y0, x1, y1);
    for (const s of stops) g.addColorStop(s.position, figmaColorToRgba(s.color));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);
    return;
  }

  if (paint.type === "gradient-radial") {
    const c = toPixel(p0);
    const end = toPixel(p1);
    const r = Math.hypot(end.x - c.x, end.y - c.y) || 1;
    const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, r);
    for (const s of stops) g.addColorStop(s.position, figmaColorToRgba(s.color));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);
    return;
  }

  if (paint.type === "gradient-angular") {
    drawAngularGradient(ctx, paint, width, height);
    return;
  }

  if (paint.type === "gradient-diamond") {
    drawDiamondGradient(ctx, paint, width, height);
    return;
  }

  // Fallback: linear
  const g = ctx.createLinearGradient(x0, y0, x1, y1);
  for (const s of stops) g.addColorStop(s.position, figmaColorToRgba(s.color));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, width, height);
}

function drawAngularGradient(
  ctx: CanvasRenderingContext2D,
  paint: FigmaGradientPaint,
  width: number,
  height: number
) {
  const stops = paint.gradientStops;
  const cx = width / 2;
  const cy = height / 2;
  const maxR = Math.max(width, height) * 0.71;

  for (let i = 0; i < stops.length; i++) {
    const startAngle = (stops[i].position * 2 * Math.PI) - Math.PI / 2;
    const endAngle =
      i < stops.length - 1
        ? (stops[i + 1].position * 2 * Math.PI) - Math.PI / 2
        : startAngle + 2 * Math.PI;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, maxR, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = figmaColorToRgba(stops[i].color);
    ctx.fill();
  }
}

function drawDiamondGradient(
  ctx: CanvasRenderingContext2D,
  paint: FigmaGradientPaint,
  width: number,
  height: number
) {
  const [p0] = paint.gradientHandlePositions;
  const stops = paint.gradientStops;
  const cx = p0.x * width;
  const cy = p0.y * height;
  const size = Math.max(width, height) * 0.71;

  for (let i = stops.length - 1; i >= 0; i--) {
    const r = stops[i].position * size;
    ctx.beginPath();
    ctx.moveTo(cx, cy - r);
    ctx.lineTo(cx + r, cy);
    ctx.lineTo(cx, cy + r);
    ctx.lineTo(cx - r, cy);
    ctx.closePath();
    ctx.fillStyle = figmaColorToRgba(stops[i].color);
    ctx.fill();
  }
}

function drawMeshGradient(
  ctx: CanvasRenderingContext2D,
  points: MeshGradientPoint[],
  width: number,
  height: number
) {
  if (points.length === 0) return;

  const baseRadius = Math.max(width, height) * 0.6;

  for (const p of points) {
    const x = p.x * width;
    const y = p.y * height;
    const r = p.radius ?? baseRadius;

    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const { r: rr, g: gg, b: bb, a } = parseHexOrRgb(p.color);
    g.addColorStop(0, `rgba(${Math.round(rr * 255)},${Math.round(gg * 255)},${Math.round(bb * 255)},${Math.min(1, (a ?? 1) * 0.9)})`);
    g.addColorStop(0.4, `rgba(${Math.round(rr * 255)},${Math.round(gg * 255)},${Math.round(bb * 255)},${(a ?? 1) * 0.5})`);
    g.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);
  }
}
