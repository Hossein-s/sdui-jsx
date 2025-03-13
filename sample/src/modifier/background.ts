import { LayoutModifier } from "./layout-modifier";

export function background(this: LayoutModifier, background: string): LayoutModifier {
  this.values.background = background;

  return this;
}
