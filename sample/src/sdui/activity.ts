import { SduiBlock } from "./sdui-block";
import { Compass, TextProperties } from "@compass";
import { NavigationObject } from "./navigation-object";
import { TrackingEvent } from "./tracking";

export interface ActivityLocationData {
  id: number;
  name: string;
}

export interface ActivityCardBlock extends SduiBlock, ActivityCardBase {
  attributes: TextProperties[];
  coordinates?: Coordinates;
  isElevated?: boolean;
  alternativeDates?: AlternateDatesV2;
  description?: TextProperties;
  highlights?: ActivityHighlights;
}

export interface ActivityCardBase extends LoadingStateListener {
  version: string;
  activityId: number;
  title: TextProperties;
  images: string[];
  lazyImage?: boolean; // Only for web
  price: Price;
  onClickLink: NavigationObject;
  loyaltyProgram?: LoyaltyProgram; // Only for web
  reviews?: Reviews;
  badges: ActivityCardBadges;
  location?: ActivityLocationData;
  backgroundColor?: Compass.ColorName;
  tracking: ActivityCardTracking;
  isWebLazyLoaded?: boolean;
}

export interface LoadingStateListener {
  loadingStateTriggers: ListenerConfiguration[];
}

export interface ListenerConfiguration {
  eventType: EventType;
  emitterId?: string;
}

export type EventType = "datesSelected" | "sortingSelected" | "filtersSelected";

interface Coordinates {
  latitude?: number;
  longitude?: number;
}

export interface AlternateDatesV2 {
  label: TextProperties;
  dates: AlternateDatesOptionsV2[];
  alternateDates: string[];
}

interface AlternateDatesOptionsV2 {
  label: TextProperties;
  onClickLink: NavigationObject;
  onClickTrackingEvent?: TrackingEvent;
}

export interface ActivityHighlights {
  items: HighlightsListItem[];
  spacing?: Compass.Spacing; // Vertical Spacing between the items
}

export interface HighlightsListItem {
  icon: Compass.Icon;
  text: TextProperties;
  spacing: Compass.Spacing; //gap between icon and text in px
}

export interface Price {
  startPrice: TextProperties;
  startPriceValue?: number; //for web
  basePrice?: TextProperties;
  prefixBasePrice?: TextProperties;
  prefix?: TextProperties;
  suffix?: TextProperties;
  bookingFee?: TextProperties;
}

export interface LoyaltyProgram {
  amount: string;
  imagePath: string;
  buttonColor: string;
}

export interface Reviews {
  ratingValue: number;
  formattedRatingValue: TextProperties;
  formattedReviewsValue?: TextProperties;
  variant: Compass.ActivityRatingVariant;
  size: Compass.ActivityRatingSize;
}

interface ActivityCardBadges {
  originalBadge?: OriginalsBadge; // GygOriginal
  certificationBadge?: CertificationBadge; // EcoCertified
  contextualHighlight?: MarketplaceBadge; // Top rated or top pick
  marketplaceBadges?: MarketplaceBadge[][]; //LTSO, new act, BookedXtimes
  classifierBadge?: ClassifierBadge; // this will be the activity type atm
}

export interface MarketplaceBadge {
  label: TextProperties;
  variant: Compass.MarketplaceBadgeVariant;
  overrides?: CompassBadgeOverrides;
  icon?: Compass.Icon;
}
export interface CertificationBadge {
  label: TextProperties;
  icon: Compass.CertificationBadgeIconName;
}

export interface OriginalsBadge {
  context: Compass.OriginalsBadgeContext;
  size: Compass.OriginalsBadgeSize;
}

export interface ClassifierBadge {
  label: TextProperties;
  overrides?: CompassBadgeOverrides;
}

export interface CompassBadgeOverrides {
  borderColor?: Compass.ColorName;
  backgroundColor?: Compass.ColorName;
}

export interface ActivityCardTracking {
  onClickTrackingEvent: TrackingEvent;
  onImpressionTrackingEvent?: TrackingEvent;
  onWebActivityCardImpressionTrackingEvent?: TrackingEvent;
  onWishlistClickTrackingEvent?: TrackingEvent;
}
