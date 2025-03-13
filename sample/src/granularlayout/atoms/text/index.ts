import type { TextOverflow } from "@compass";
import { LayoutModifier, SduiAtom } from "../atom";
import {
  ColorReferenceField,
  NumberReferenceField,
  StateField,
  StringReferenceField,
  TypographyReferenceField,
} from "../state-field";

export class TextAtom extends SduiAtom {
  text: StringReferenceField;
  color?: ColorReferenceField;
  typography?: TypographyReferenceField;
  maxLines?: NumberReferenceField;
  overflow?: TextOverflowReferenceField;
  overrides?: TextOverrides;

  constructor(params: TextAtomParams) {
    super({ id: params.id, type: "textAtom" });
    this.text = params.text;
    this.color = params.color;
    this.overrides = params.overrides;
    this.typography = params.typography;
    this.maxLines = params.maxLines;
    this.overflow = params.overflow;
    this.layoutModifier = params.layoutModifier;
  }
}

export interface TextAtomParams {
  id: string;
  text: StringReferenceField;
  color?: ColorReferenceField;
  typography?: TypographyReferenceField;
  maxLines?: NumberReferenceField;
  overflow?: TextOverflowReferenceField;
  layoutModifier?: LayoutModifier;
  overrides?: TextOverrides;
}

export type TextOverflowReferenceField = StateField | TextOverflow;
export type TextAlign = "left" | "center" | "right";
export interface TextOverrides {
  fontSize?: NumberReferenceField;
  lineHeight?: NumberReferenceField;
  fontWeight?: StringReferenceField;
  textAlign?: StateField | TextAlign;
}
