import { SduiAtom } from "../atom";
import {
  NumberReferenceField,
  RatingVariantReferenceField,
  StringReferenceField,
} from "../state-field";

export interface RatingAtomParams {
  id: string;
  variant: RatingVariantReferenceField;
  value: NumberReferenceField;
  formattedRating: StringReferenceField;
  label: StringReferenceField;
}

export class RatingAtom extends SduiAtom {
  readonly variant: RatingVariantReferenceField;
  readonly value: NumberReferenceField;
  readonly formattedRating: StringReferenceField;
  readonly label: StringReferenceField;

  constructor(params: RatingAtomParams) {
    super({ id: params.id, type: "ratingAtom" });
    this.variant = params.variant;
    this.value = params.value;
    this.formattedRating = params.formattedRating;
    this.label = params.label;
  }
}
