// eslint-disable-next-line no-restricted-imports
import { BaseSduiBlock } from "../../sdui/base-sdui-block";
import {
  ColorReferenceField,
  CornerRadiusReferenceField,
  SizeReferenceField,
  SpacingReferenceField,
} from "./state-field";

export abstract class SduiAtom extends BaseSduiBlock {
  layoutModifier?: LayoutModifier;
}

export interface LayoutModifier {
  padding?: Padding;
  width?: SizeReferenceField;
  height?: SizeReferenceField;
  visible?: boolean;
  radius?: Radius;
  background?: ColorReferenceField;
}

export interface Padding {
  top?: SpacingReferenceField;
  bottom?: SpacingReferenceField;
  start?: SpacingReferenceField;
  end?: SpacingReferenceField;
}

export interface Radius {
  topStart?: CornerRadiusReferenceField;
  bottomStart?: CornerRadiusReferenceField;
  topEnd?: CornerRadiusReferenceField;
  bottomEnd?: CornerRadiusReferenceField;
}
