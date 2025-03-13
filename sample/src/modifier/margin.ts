import { LayoutModifier } from "./layout-modifier";

interface MarginValue {
  top: number;
  end: number;
  bottom: number;
  start: number;
}

function getMarginValue(layoutModifier: LayoutModifier): MarginValue {
  return layoutModifier.values.margin ?? {};
}

export function margin(this: LayoutModifier, top: number): LayoutModifier;
export function margin(this: LayoutModifier, top: number, end: number): LayoutModifier;
export function margin(
  this: LayoutModifier,
  top: number,
  end: number,
  bottom: number,
): LayoutModifier;
export function margin(
  this: LayoutModifier,
  top: number,
  end: number,
  bottom: number,
  start: number,
): LayoutModifier;
export function margin(
  this: LayoutModifier,
  top: number,
  end?: number,
  bottom?: number,
  start?: number,
): LayoutModifier {
  if (end === undefined) {
    this.values.margin = { top, end: top, bottom: top, start: top };
  } else if (bottom === undefined) {
    this.values.margin = { top, end, bottom: top, start: end };
  }else if (start === undefined) {
    this.values.margin = { top, end, bottom, start: end };
  } else {
    this.values.margin = [top, end, bottom, start];
  }

  return this;
}

export function marginTop(this: LayoutModifier, top: number): LayoutModifier {
  const marginValue = getMarginValue(this);

  this.values.margin = { ...marginValue, top };

  return this;
}

export function marginStart(this: LayoutModifier, start: number): LayoutModifier {
  const marginValue = getMarginValue(this);

  this.values.margin = { ...marginValue, start };

  return this;
}

export function marginBottom(this: LayoutModifier, bottom: number): LayoutModifier {
  const marginValue = getMarginValue(this);

  this.values.margin = { ...marginValue, bottom };

  return this;
}

export function marginEnd(this: LayoutModifier, end: number): LayoutModifier {
  const marginValue = getMarginValue(this);

  this.values.margin = { ...marginValue, end };

  return this;
}
