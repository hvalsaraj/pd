import type { FigmaGradientPaint, MeshGradientSource } from "@/types/figma-gradient";

/**
 * Figma node-like shape (from get_design_context or REST API).
 * We only care about fills that are gradient paints.
 */
interface FigmaNodeWithFills {
  fills?: Array<{
    type?: string;
    gradientHandlePositions?: Array<{ x: number; y: number }>;
    gradientStops?: Array<{ position: number; color: { r: number; g: number; b: number; a?: number } }>;
    opacity?: number;
  }>;
}

/**
 * Extracts the first gradient fill from a Figma frame/node so you can pass it to MeshGradientCanvas.
 * Use with the node returned by get_design_context for the selected frame (figma-desktop) or by node-id.
 *
 * @param node - Node from Figma (design context or file JSON) that has a fills array
 * @returns MeshGradientSource for MeshGradientCanvas, or null if no gradient fill
 */
export function getGradientSourceFromFigmaNode(
  node: FigmaNodeWithFills
): MeshGradientSource | null {
  const fills = node.fills;
  if (!Array.isArray(fills)) return null;

  const gradientFill = fills.find(
    (f) =>
      f?.type &&
      (f.type === "gradient-linear" ||
        f.type === "gradient-radial" ||
        f.type === "gradient-angular" ||
        f.type === "gradient-diamond")
  ) as FigmaGradientPaint | undefined;

  if (!gradientFill) return null;
  const positions = gradientFill.gradientHandlePositions;
  if (!positions || positions.length < 3 || !gradientFill.gradientStops?.length) return null;

  const [p0, p1, p2] = positions;
  if (!p0 || !p1 || !p2) return null;

  return {
    type: "figma",
    paint: {
      type: gradientFill.type as FigmaGradientPaint["type"],
      gradientHandlePositions: [
        { x: Number(p0.x), y: Number(p0.y) },
        { x: Number(p1.x), y: Number(p1.y) },
        { x: Number(p2.x), y: Number(p2.y) },
      ],
      gradientStops: gradientFill.gradientStops.map((s) => ({
        position: s.position,
        color: {
          r: s.color.r,
          g: s.color.g,
          b: s.color.b,
          a: s.color.a ?? 1,
        },
      })),
      opacity: gradientFill.opacity,
    },
  };
}
