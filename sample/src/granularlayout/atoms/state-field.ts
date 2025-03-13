import type { Compass } from "@compass";
import { AtomSize, CornerRadius, Spacing } from "./units";

export interface StateField {
  fieldName: string;
}

export type NumberReferenceField = StateField | number;
export type StringReferenceField = StateField | string;
export type SpacingReferenceField = StateField | Spacing;
export type SizeReferenceField = StateField | AtomSize;
export type CornerRadiusReferenceField = StateField | CornerRadius;
export type ColorReferenceField = StateField | Compass.ColorName;
export type TypographyReferenceField = StateField | Compass.Typography;
export type IconReferenceField = StateField | Compass.IconName;
export type ImageCropReferenceField = StateField | Compass.ImageCrop;
export type ImageAspectRatioReferenceField = StateField | Compass.ImageAspectRatio;
export type ImageOverlayReferenceField = StateField | Compass.ImageOverlay;
export type ImageHoverEffectReferenceField = StateField | Compass.ImageHoverEffect;
export type RatingVariantReferenceField = StateField | Compass.RatingVariant;
