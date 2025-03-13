import { LayoutModifier, SduiAtom } from "../atom";
import {
  ImageAspectRatioReferenceField,
  ImageCropReferenceField,
  ImageHoverEffectReferenceField,
  ImageOverlayReferenceField,
  StringReferenceField,
} from "../state-field";

export class ImageAtom extends SduiAtom {
  readonly imageUrl: StringReferenceField;
  readonly crop: ImageCropReferenceField;
  readonly contentDescription?: StringReferenceField;
  readonly aspectRatio?: ImageAspectRatioReferenceField;
  readonly overlay?: ImageOverlayReferenceField;
  readonly hoverEffect?: ImageHoverEffectReferenceField;

  constructor(params: ImageAtomParams) {
    super({ id: params.id, type: "imageAtom" });
    this.imageUrl = params.imageUrl;
    this.crop = params.crop;
    this.contentDescription = params.contentDescription;
    this.layoutModifier = params.layoutModifier;
    this.aspectRatio = params.aspectRatio;
    this.overlay = params.overlay;
    this.hoverEffect = params.hoverEffect;
  }
}

export interface ImageAtomParams {
  id: string;
  imageUrl: StringReferenceField;
  crop: ImageCropReferenceField;
  contentDescription?: StringReferenceField;
  aspectRatio?: ImageAspectRatioReferenceField;
  overlay?: ImageOverlayReferenceField;
  layoutModifier?: LayoutModifier;
  hoverEffect?: ImageHoverEffectReferenceField;
}
