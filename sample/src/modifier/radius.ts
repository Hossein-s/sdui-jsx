import { LayoutModifier } from "./layout-modifier";

interface RadiusValue {
  topStart: number;
  topEnd: number;
  bottomEnd: number;
  bottomStart: number;
}

function getRadiusValue(layoutModifier: LayoutModifier): RadiusValue {
  return layoutModifier.values.radius ?? {};
}

export function radius(this: LayoutModifier, top: number): LayoutModifier;
export function radius(this: LayoutModifier, top: number, end: number): LayoutModifier;
export function radius(
  this: LayoutModifier,
  top: number,
  end: number,
  bottom: number,
): LayoutModifier;
export function radius(
  this: LayoutModifier,
  top: number,
  end: number,
  bottom: number,
  start: number,
): LayoutModifier;
export function radius(
  this: LayoutModifier,
  top: number,
  end?: number,
  bottom?: number,
  start?: number,
): LayoutModifier {
  if (end === undefined) {
    this.values.radius = { top, end: top, bottom: top, start: top };
  } else if (bottom === undefined) {
    this.values.radius = { top, end, bottom: top, start: end };
  } else if (start === undefined) {
    this.values.radius = { top, end, bottom, start: end };
  } else {
    this.values.radius = [top, end, bottom, start];
  }

  return this;
}

export function radiusTopStart(this: LayoutModifier, topStart: number): LayoutModifier {
  const radiusValue = getRadiusValue(this);

  this.values.radius = { ...radiusValue, topStart };

  return this;
}

export function radiusTopEnd(this: LayoutModifier, topEnd: number): LayoutModifier {
  const radiusValue = getRadiusValue(this);

  this.values.radius = { ...radiusValue, topEnd };

  return this;
}

export function radiusBottomEnd(this: LayoutModifier, bottomEnd: number): LayoutModifier {
  const radiusValue = getRadiusValue(this);

  this.values.radius = { ...radiusValue, bottomEnd };

  return this;
}

export function radiusBottomStart(this: LayoutModifier, bottomStart: number): LayoutModifier {
  const radiusValue = getRadiusValue(this);

  this.values.radius = { ...radiusValue, bottomStart };

  return this;
}
