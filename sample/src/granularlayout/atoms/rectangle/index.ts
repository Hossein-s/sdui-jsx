import { LayoutModifier, SduiAtom } from "../atom";

export class RectangleAtom extends SduiAtom {
  constructor(params: RectangleAtomParams) {
    super({ id: params.id, type: "rectangleAtom" });
    this.layoutModifier = params.layoutModifier;
  }
}

export interface RectangleAtomParams {
  id: string;
  layoutModifier?: LayoutModifier;
}
