import { Action, Clickable, Impressionable } from "../actions";
import { LayoutModifier, SduiAtom } from "../atom";
import { VerticalAlignment } from "./alignments";

export class HorizontalLayoutAtom extends SduiAtom implements Clickable, Impressionable {
  readonly onClick?: Action;
  readonly onImpression?: Action;
  readonly verticalAlignment?: VerticalAlignment;

  constructor(params: HorizontalLayoutAtomParams) {
    super({ id: params.id, type: "horizontalLayout", children: params.children });
    this.layoutModifier = params.layoutModifier;
    this.onClick = params.onClick;
    this.onImpression = params.onImpression;
    this.verticalAlignment = params.verticalAlignment;
  }
}

interface HorizontalLayoutAtomParams {
  id: string;
  children?: SduiAtom[];
  verticalAlignment?: VerticalAlignment;
  layoutModifier?: LayoutModifier;
  onClick?: Action;
  onImpression?: Action;
}
