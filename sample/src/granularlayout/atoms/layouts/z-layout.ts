import { Action, Clickable, Impressionable } from "../actions";
import { LayoutModifier, SduiAtom } from "../atom";
import { HorizontalAlignment, VerticalAlignment } from "./alignments";

export class ZLayoutAtom extends SduiAtom implements Clickable, Impressionable {
  readonly onClick?: Action;
  readonly onImpression?: Action;
  readonly verticalAlignment?: VerticalAlignment;
  readonly horizontalAlignment?: HorizontalAlignment;

  constructor(params: ZLayoutAtomParams) {
    super({ id: params.id, type: "zLayout", children: params.children });
    this.layoutModifier = params.layoutModifier;
    this.onClick = params.onClick;
    this.onImpression = params.onImpression;
    this.verticalAlignment = params.verticalAlignment;
    this.horizontalAlignment = params.horizontalAlignment;
  }
}

interface ZLayoutAtomParams {
  id: string;
  children?: SduiAtom[];
  verticalAlignment?: VerticalAlignment;
  horizontalAlignment?: HorizontalAlignment;
  layoutModifier?: LayoutModifier;
  onClick?: Action;
  onImpression?: Action;
}
