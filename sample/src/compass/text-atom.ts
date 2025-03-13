import type { Compass } from "./namespace";

export interface TextProperties {
  text: string;
  htmlTagType?: string; //only for web
  color?: Compass.ColorName;
  typography?: Compass.Typography;
  style?: Compass.Typography;
  maxLines?: number;
  overflow?: TextOverflow;
  overrides?: TextOverrides;
}

export interface TextOverrides {
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: string;
  textAlign?: "left" | "center" | "right";
}

export type TextOverflow = "clip" | "ellipsis";
