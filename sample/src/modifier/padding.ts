import { LayoutModifier } from "./layout-modifier";

interface PaddingValue {
  top: number;
  end: number;
  bottom: number;
  start: number;
}

function getPaddingValue(layoutModifier: LayoutModifier): PaddingValue {
  return layoutModifier.values.padding ?? {};
}

export function padding(this: LayoutModifier, top: number): LayoutModifier;
export function padding(this: LayoutModifier, top: number, end: number): LayoutModifier;
export function padding(
  this: LayoutModifier,
  top: number,
  end: number,
  bottom: number,
): LayoutModifier;
export function padding(
  this: LayoutModifier,
  top: number,
  end: number,
  bottom: number,
  start: number,
): LayoutModifier;
export function padding(
  this: LayoutModifier,
  top: number,
  end?: number,
  bottom?: number,
  start?: number,
): LayoutModifier {
  if (end === undefined) {
    this.values.padding = { top, end: top, bottom: top, start: top };
  } else if (bottom === undefined) {
    this.values.padding = { top, end, bottom: top, start: end };
  }else if (start === undefined) {
    this.values.padding = { top, end, bottom, start: end };
  } else {
    this.values.padding = [top, end, bottom, start];
  }

  return this;
}

export function paddingTop(this: LayoutModifier, top: number): LayoutModifier {
  const paddingValue = getPaddingValue(this);

  this.values.padding = { ...paddingValue, top };

  return this;
}

export function paddingStart(this: LayoutModifier, start: number): LayoutModifier {
  const paddingValue = getPaddingValue(this);

  this.values.padding = { ...paddingValue, start };

  return this;
}

export function paddingBottom(this: LayoutModifier, bottom: number): LayoutModifier {
  const paddingValue = getPaddingValue(this);

  this.values.padding = { ...paddingValue, bottom };

  return this;
}

export function paddingEnd(this: LayoutModifier, end: number): LayoutModifier {
  const paddingValue = getPaddingValue(this);

  this.values.padding = { ...paddingValue, end };

  return this;
}
