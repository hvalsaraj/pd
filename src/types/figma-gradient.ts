/**
 * Types matching Figma's gradient paint structure.
 * Use with get_design_context from Figma MCP (selected frame) to pass fills into MeshGradientCanvas.
 */

export type FigmaGradientType =
  | "gradient-linear"
  | "gradient-radial"
  | "gradient-angular"
  | "gradient-diamond";

export interface FigmaVector {
  x: number;
  y: number;
}

/** Figma color: r, g, b, a in 0–1 */
export interface FigmaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface FigmaColorStop {
  position: number;
  color: FigmaColor;
}

/** Gradient paint from Figma (node.fills[].type matches and has these fields) */
export interface FigmaGradientPaint {
  type: FigmaGradientType;
  gradientHandlePositions: [FigmaVector, FigmaVector, FigmaVector];
  gradientStops: FigmaColorStop[];
  opacity?: number;
}

/** Single point for mesh-style gradient (custom, not from Figma API) */
export interface MeshGradientPoint {
  x: number;
  y: number;
  color: string;
  radius?: number;
}

/** Props that can be derived from a selected Figma frame (frame.fills) */
export type MeshGradientSource =
  | { type: "figma"; paint: FigmaGradientPaint }
  | { type: "mesh"; points: MeshGradientPoint[] };
