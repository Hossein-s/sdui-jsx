import { ActivityCardBlock, TrackingContainerName } from "@sdui";
import { Compass } from "@compass";

export function getActivityCardV2(): ActivityCardBlock {
  return {
    type: "activityCard",
    id: "activityCard-400983-0",
    activityId: 400983,
    isElevated: true,
    title: {
      text: "Florence: Chianti Wineries Tour with Food and Wine Tasting",
      typography: "title-4",
      style: "title-4",
      color: "label-primary",
    },
    images: [
      "https://cdn.getyourguide.com/img/tour/c0b675d7a2b2be97132bdecc0cfa31c6399c53ff71a9d2e8d71091926234fb8f.jpg/68.jpg",
    ],
    attributes: [
      {
        text: "5.5 hours",
        typography: "label",
        style: "label",
        color: "label-secondary",
      },
    ],
    badges: {
      classifierBadge: {
        label: {
          text: "GUIDED TOUR",
          color: "label-secondary",
          typography: "caption-compact-strong",
        },
      },
      contextualHighlight: {
        label: {
          text: "Top pick",
        },
        variant: "primary",
      },
      marketplaceBadges: [
        [
          {
            label: {
              text: "Likely to sell out",
            },
            variant: "primary",
          },
        ],
      ],
    },
    reviews: {
      ratingValue: 4.4840307,
      formattedRatingValue: {
        text: "4.5",
      },
      formattedReviewsValue: {
        text: "(7,264)",
      },
      variant: Compass.ActivityRatingVariant.ONE_STAR,
      size: Compass.ActivityRatingSize.COMPACT,
    },
    onClickLink: {
      link: "/florence-l32/florence-chianti-wineries-tour-with-food-and-wine-tasting-t400983/?ranking_uuid=b4794adf-9c70-4355-9826-efedc6696b3a",
      deeplink: "gyg://tours/400983?ranking_uuid=b4794adf-9c70-4355-9826-efedc6696b3a",
    },
    location: {
      id: 558,
      name: "Tuscany",
    },
    tracking: {
      onClickTrackingEvent: {
        eventName: "MobileAppUITap",
        containerName: TrackingContainerName.Activity,
        properties: {
          id: "activity-card",
          target: "activity-card",
          producer_properties: {
            context: {
              owner: "dex",
            },
          },
        },
      },
    },
    version: "2.0.0",
    price: {
      prefix: {
        text: "From",
        typography: "body-compact-strong",
        style: "body-compact-strong",
        color: "label-gyg",
      },
      startPrice: {
        text: "€48.40",
        typography: "body-compact-strong",
        style: "body-compact-strong",
        color: "label-gyg",
      },
      prefixBasePrice: {
        text: "From",
        typography: "caption",
        style: "caption",
        color: "label-tertiary",
      },
      basePrice: {
        text: "€55.00",
        typography: "caption",
        style: "caption",
        color: "label-tertiary",
      },
      suffix: {
        text: " ",
      },
      startPriceValue: 48.4,
    },
    loadingStateTriggers: [
      {
        eventType: "datesSelected",
      },
    ],
  } satisfies ActivityCardBlock;
}
