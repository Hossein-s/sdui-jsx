import { padding, paddingBottom, paddingEnd, paddingStart, paddingTop } from "./padding";
import { fillParentWidth, width } from "./width";
import { fillParentHeight } from "./height";
import { margin, marginBottom, marginEnd, marginStart, marginTop } from "./margin";
import { radius, radiusBottomEnd, radiusBottomStart, radiusTopEnd, radiusTopStart } from "./radius";
import { background } from "./background";

export function Modifier() {
  return new LayoutModifier();
}

export class LayoutModifier {
  public values: Record<string, any> = {};

  public fillParentWidth = fillParentWidth;
  public width = width;

  public fillParentHeight = fillParentHeight;
  public height = fillParentHeight;

  public background = background;

  public padding = padding;
  public paddingTop = paddingTop;
  public paddingEnd = paddingEnd;
  public paddingBottom = paddingBottom;
  public paddingStart = paddingStart;

  public margin = margin;
  public marginTop = marginTop;
  public marginEnd = marginEnd;
  public marginBottom = marginBottom;
  public marginStart = marginStart;

  public radius = radius;
  public radiusTopStart = radiusTopStart;
  public radiusTopEnd = radiusTopEnd;
  public radiusBottomEnd = radiusBottomEnd;
  public radiusBottomStart = radiusBottomStart;
}
