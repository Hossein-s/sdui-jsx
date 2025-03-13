import type { Compass } from "@compass";
import { Action, Clickable, HrefObject } from "../actions";
import { LayoutModifier, SduiAtom } from "../atom";
import {
  ColorReferenceField,
  IconReferenceField,
  StateField,
  StringReferenceField,
} from "../state-field";

export class ButtonAtom extends SduiAtom implements Clickable {
  readonly label: StringReferenceField;
  readonly variant: ButtonVariantReferenceField;
  readonly size?: ButtonSizeReferenceField;
  readonly color?: ColorReferenceField;
  readonly leadingIcon?: IconReferenceField;
  readonly onClick?: Action;
  readonly href?: HrefObject;

  constructor(params: ButtonAtomParams) {
    super({ id: params.id, type: "buttonAtom" });
    this.label = params.label;
    this.variant = params.variant;
    this.size = params.size;
    this.color = params.color;
    this.leadingIcon = params.leadingIcon;
    this.onClick = params.onClick;
    this.href = params.href;
    this.layoutModifier = params.layoutModifier;
  }
}

export interface ButtonAtomParams extends Clickable {
  id: string;
  label: StringReferenceField;
  variant: ButtonVariantReferenceField;
  size?: ButtonSizeReferenceField;
  color?: ColorReferenceField;
  leadingIcon?: IconReferenceField;
  layoutModifier?: LayoutModifier;
}

export type ButtonVariantReferenceField = StateField | Compass.BtnVariants;
export type ButtonSizeReferenceField = StateField | Compass.BtnSize;
export type ButtonColorReferenceField = StateField | Compass.BtnColor;
