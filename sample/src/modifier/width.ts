import { LayoutModifier } from "./layout-modifier";

export function fillParentWidth(this: LayoutModifier): LayoutModifier {
  this.values.width = "fillParent";

  return this;
}

export function width(this: LayoutModifier, width: number): LayoutModifier {
  this.values.width = width;

  return this;
}
