import { LayoutModifier, SduiAtom } from "../atom";
import { ColorReferenceField, IconReferenceField } from "../state-field";

export class IconAtom extends SduiAtom {
  readonly iconName: IconReferenceField;
  readonly color: ColorReferenceField;

  constructor(params: IconAtomParams) {
    super({ id: params.id, type: "iconAtom" });
    this.iconName = params.iconName;
    this.color = params.color;
    this.layoutModifier = params.layoutModifier;
  }
}

export interface IconAtomParams {
  id: string;
  iconName: IconReferenceField;
  color: ColorReferenceField;
  layoutModifier?: LayoutModifier;
}
