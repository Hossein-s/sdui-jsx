import { LayoutModifier } from "./layout-modifier";

export function fillParentHeight(this: LayoutModifier): LayoutModifier {
  this.values.height = "fillParent";

  return this;
}

export function height(this: LayoutModifier, height: number): LayoutModifier {
  this.values.height = height;

  return this;
}
