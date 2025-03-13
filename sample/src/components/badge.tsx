import { GranularBlock, SduiAtom, TextAtom, VerticalLayoutAtom, ZLayoutAtom } from "@sdui/blocks";
import { Compass } from "@compass";
import { SduiBlock } from "@sdui";
import { Modifier } from "../modifier/layout-modifier";

export interface BadgeParams {
  id: string;
  label: string;
  variant: BadgeVariant;
  overrides?: {
    background: Compass.ColorName;
  };
}

export type BadgeVariant = "primary" | "secondary";

export function Badge(params: BadgeParams): SduiAtom {
  const style = getStyleByVariant(params.variant);
  const background = params.overrides?.background ?? style.background;

  return (
    <ZLayoutAtom
      id={params.id}
      layoutModifier={Modifier().padding(0.5, 1, 0.5, 1).radius(0.5).background(background).values}
    >
      <TextAtom
        id={params.id + "-label"}
        typography="caption-strong"
        color={style.textColor}
        text={params.label}
      />
    </ZLayoutAtom>
  );
}

function getStyleByVariant(variant: BadgeVariant) {
  if (variant == "primary") {
    return {
      background: "surface-critical-strong" as const,
      textColor: "label-on-color" as const,
    };
  }
  return {
    background: "surface-secondary" as const,
    textColor: "label-primary" as const,
  };
}

//@Preview
export function getBadgePreview(): SduiBlock[] {
  return [
    getGranularBlockForBadgePreview(
      <Badge id="badge-1" label="Likely to sell out" variant="primary" />,
    ),
    getGranularBlockForBadgePreview(
      <Badge id="badge-2" label="Likely to sell out" variant="secondary" />,
    ),
    getGranularBlockForBadgePreview(
      <Badge
        id="badge-3"
        label="Top pick"
        variant="primary"
        overrides={{ background: "label-primary" }}
      />,
    ),
  ];
}

export function getGranularBlockForBadgePreview(badge: SduiAtom) {
  return (
    <GranularBlock id={badge.id + "-container"}>
      <VerticalLayoutAtom id={`${badge.id}-parent`}>{[badge]}</VerticalLayoutAtom>
    </GranularBlock>
  );
}
