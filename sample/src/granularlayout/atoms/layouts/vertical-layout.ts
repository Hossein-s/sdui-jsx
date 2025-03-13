import { Action, Clickable, Impressionable } from "../actions";
import { LayoutModifier, SduiAtom } from "../atom";
import { HorizontalAlignment } from "./alignments";

export class VerticalLayoutAtom extends SduiAtom implements Clickable, Impressionable {
  readonly onClick?: Action;
  readonly onImpression?: Action;
  readonly horizontalAlignment?: HorizontalAlignment;

  constructor(params: VerticalLayoutAtomParams) {
    super({ id: params.id, type: "verticalLayout", children: params.children });
    this.layoutModifier = params.layoutModifier;
    this.onClick = params.onClick;
    this.onImpression = params.onImpression;
    this.horizontalAlignment = params.horizontalAlignment;
  }
}

interface VerticalLayoutAtomParams {
  id: string;
  children?: SduiAtom[];
  horizontalAlignment?: HorizontalAlignment;
  layoutModifier?: LayoutModifier;
  onClick?: Action;
  onImpression?: Action;
}
