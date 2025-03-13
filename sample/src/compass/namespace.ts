// eslint-disable-next-line
export namespace Compass {
  export type ActivityCardIcon =
    | "headphones"
    | "shuttle"
    | "clock-duration"
    | "skip-the-line"
    | "users";

  /*
   * DS Icons
   * https://compass.gygservice.com/web/?path=/docs/components-icons--basic
   * TODO Rename NavigationIcon to Icon
   * */
  export type NavigationIcon =
    | "ticket-booking"
    | "users"
    | "guide"
    | "sun"
    | "boat"
    | "bus"
    | "shuttle"
    | "building"
    | "globe"
    | "mountain"
    | "food"
    | typeof IconArrowRight;

  export const IconArrowRight = "arrow-right" as const;

  export type ColorName =
    | "decorative-poolside-blue"
    | "decorative-basking-yellow"
    | "decorative-flamingo-pink"
    | "interactive-primary"
    | "label-gyg"
    | "label-on-color"
    | "label-primary"
    | "label-secondary"
    | "label-success"
    | "label-tertiary"
    | "label-quaternary"
    | "label-warning"
    | "surface-critical-strong"
    | "surface-gyg"
    | "surface-success-weak"
    | "surface-warning"
    | "surface-secondary"
    | "surface-success-strong"
    | "surface-highlight"
    | "on-interactive-quaternary"
    | "background-primary"
    | "background-secondary"
    | "separator-primary"
    | "separator-secondary";

  export type Typography =
    | "headline"
    | "headline-2"
    | "title-1"
    | "title-2"
    | "title-3"
    | "title-4"
    | "body"
    | "body-strong"
    | "body-compact"
    | "body-compact-strong"
    | "caption"
    | "caption-strong"
    | "caption-compact"
    | "caption-compact-strong"
    | "label";

  export type InlineAlertVariant = "info" | "success" | "warning" | "critical";

  export type MarketplaceBadgeVariant = "primary" | "secondary";

  export type CertificationBadgeIconName = "compact-eco" | "compact-badge" | "ticket-booking";
  export type OriginalsBadgeContext = "on-surface" | "on-media";
  export type OriginalsBadgeSize = "default" | "large";

  export type IconName =
    | "air-balloon"
    | "android"
    | "apple"
    | "arrow-around"
    | "arrow-down"
    | "arrow-left"
    | "arrow-right"
    | "arrow-up"
    | "attach"
    | "ball"
    | "bell"
    | "bin"
    | "boat"
    | "booklet"
    | "building"
    | "bus"
    | "calendar-add"
    | "calendar-check"
    | "calendar-cross"
    | "calendar-with-arrow"
    | "calendar"
    | "camera"
    | "cart"
    | "chat-bubble-with-heart"
    | "chat-bubble"
    | "chat-letter"
    | "checkmark-in-circle"
    | "checkmark-out-circle"
    | "checkmark"
    | "chevron-down"
    | "chevron-left"
    | "chevron-right"
    | "chevron-up"
    | "circle-crossed"
    | "clock-duration"
    | "clock-history"
    | "clock-sand"
    | "clock-timer"
    | "clock"
    | "compact-badge"
    | "compact-eco"
    | "credit-card"
    | "credit-card-clock"
    | "cross-in-circle"
    | "cross"
    | "crown"
    | "currency"
    | "debug"
    | "document"
    | "dots-in-circle"
    | "download"
    | "driver"
    | "dropdown"
    | "email"
    | "exclamation-in-circle"
    | "exclamation-in-triangle"
    | "expand"
    | "experiment"
    | "eye-crossed"
    | "eye"
    | "flash"
    | "food"
    | "gift"
    | "globe"
    | "guide"
    | "headphones"
    | "heart-fill"
    | "heart"
    | "image"
    | "info-in-circle"
    | "link-out"
    | "link"
    | "lock"
    | "log-in"
    | "log-out"
    | "logo-facebook"
    | "logo-instagram"
    | "logo-linkedin"
    | "logo-pinterest"
    | "logo-twitter"
    | "logo-whatsapp"
    | "menu-grid"
    | "menu-list"
    | "minus-in-circle"
    | "mobile-phone"
    | "money-bill"
    | "monument"
    | "mountain"
    | "nearby"
    | "pause"
    | "pen-edit"
    | "phone"
    | "pin-on-map"
    | "pin-person"
    | "pin-sight"
    | "pin"
    | "pins-connected"
    | "play"
    | "plus-in-circle"
    | "plus"
    | "press-hold"
    | "printer-paper"
    | "question-in-circle"
    | "retry"
    | "search-magnifier"
    | "send"
    | "settings"
    | "share-android"
    | "share"
    | "shuttle"
    | "skip-the-line"
    | "sliders"
    | "sort"
    | "sparks"
    | "sport"
    | "star-fill"
    | "star"
    | "stroller"
    | "sun"
    | "swipe"
    | "tap-left"
    | "tap-right"
    | "thumbs-down-fill"
    | "thumbs-down"
    | "thumbs-up-fill"
    | "thumbs-up"
    | "ticket-booking"
    | "ticket-discount"
    | "ticket-voucher"
    | "tickets"
    | "toy-horse"
    | "user"
    | "users"
    | "walk"
    | "wallet"
    | "wheelchair"
    | "wifi";

  /*
   * DS Button
   * https://compass.gygservice.com/web/?path=/docs/components-button--basic
   * */
  export const BtnDefaultVariant = "filled" as const;
  export const BtnTextVariant = "text" as const;
  export const BtnOutlinedVariant = "outlined" as const;
  export type BtnVariants =
    | typeof BtnDefaultVariant
    | typeof BtnOutlinedVariant
    | typeof BtnTextVariant;

  export type BtnColor = "standard" | "critical" | "static-light";
  export type BtnSize = "small" | "medium" | "large";

  export interface Icon {
    name: Compass.IconName;
    color?: Compass.ColorName;
  }

  export enum ActivityRatingVariant {
    ONE_STAR = "one-star",
    FIVE_STAR = "five-star",
  }

  export enum ActivityRatingSize {
    DEFAULT = "default",
    COMPACT = "compact",
  }

  export type Spacing = "spacing-0-5x" | "spacing-1x" | "spacing-none";
  export type ImageCrop = "centerCrop" | "scaleAspectFit" | "scaleAspectFill";
  export type ImageAspectRatio =
    | "1:1"
    | "6:5"
    | "5:6"
    | "5:4"
    | "4:5"
    | "4:3"
    | "3:4"
    | "3:2"
    | "2:3"
    | "16:10"
    | "10:16"
    | "16:9"
    | "9:16"
    | "7:3"
    | "3:7";
  export type ImageOverlay = "none" | "overlay-20" | "overlay-50";
  export type ImageHoverEffect = "none" | "zoom";

  export type RatingVariant = "five-star" | "one-star";
}

export enum CompassColorName {
  LABEL_PRIMARY = "label-primary",
  LABEL_SECONDARY = "label-secondary",
  LABEL_QUATERNARY = "label-quaternary",
  LABEL_TERTIARY = "label-tertiary",
  LABEL_ON_COLOR = "label-on-color",
  LABEL_GYG = "label-gyg",
  SURFACE_CRITICAL_STRONG = "surface-critical-strong",
  SURFACE_HIGHLIGHT = "surface-highlight",
  SURFACE_SECONDARY = "surface-secondary",
  BACKGROUND_PRIMARY = "background-primary",
  BACKGROUND_SECONDARY = "background-secondary",
  BACKGROUND_GUIDING_RED = "decorative-guiding-red",
  BACKGROUND_POOLSIDE_BLUE = "decorative-poolside-blue",
  BACKGROUND_PLANT_GREEN = "decorative-plant-green",
  BACKGROUND_FLAMINGO_PINK = "decorative-flamingo-pink",
  BACKGROUND_BASKING_YELLOW = "decorative-basking-yellow",
  BACKGROUND_MIDNIGHT_BLUE = "decorative-midnight-blue",
}

export enum MarketplaceBadgeVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
export enum OriginalsBadgeSize {
  DEFAULT = "default",
  LARGE = "large",
}
export enum OriginalsBadgeContext {
  ON_SURFACE = "on-surface",
  ON_MEDIA = "on-media",
}
