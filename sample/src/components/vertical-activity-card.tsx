import {
  getClickNavigationController,
  getComposableListController,
  getWishIconClickController,
  GranularBlock,
  GranularBlockController,
  HorizontalLayoutAtom,
  ImageAtom,
  RatingAtom,
  TextAtom,
  VerticalLayoutAtom,
  WishIconAtom,
  ZLayoutAtom,
} from "@sdui/blocks";
import { ActivityCardBlock, TrackingEvent } from "@sdui";
import { Badge } from "@compass";
import { Modifier } from "../modifier/layout-modifier";
import { VisitorId } from "./visitor-id";

const ON_WISH_ICON_CLICK_ACTION_NAME = "ON_WISH_ICON_CLICK";
const ON_CLICK_ACTION_NAME = "ON_CLICK";
const ON_IMPRESSION_ACTION_NAME = "ON_IMPRESSION";

export function VerticalActivityCard({
  activityCardBlock,
}: {
  activityCardBlock: ActivityCardBlock;
}): GranularBlock {
  return (
    <GranularBlock id={activityCardBlock.id} controller={getController(activityCardBlock)}>
      <HorizontalLayoutAtom
        id={activityCardBlock.id + "-container"}
        layoutModifier={
          Modifier()
            .fillParentWidth()
            .padding(2)
            .background(activityCardBlock.isElevated ? "surface-highlight" : "background-primary")
            .values
        }
        onImpression={{ name: ON_IMPRESSION_ACTION_NAME }}
        onClick={{ name: ON_CLICK_ACTION_NAME }}
      >
        <ZLayoutAtom
          id={activityCardBlock.id + "-media-container"}
          layoutModifier={Modifier().width(15).paddingEnd(1.5).values}
          verticalAlignment="top"
          horizontalAlignment="end"
        >
          <VisitorId />
          <ImageAtom
            id={activityCardBlock.id + "-image"}
            imageUrl={activityCardBlock.images[0]}
            crop="centerCrop"
            layoutModifier={
              Modifier().fillParentHeight().fillParentWidth().radius(1).padding(1).values
            }
          />
          <WishIconAtom
            id={activityCardBlock.id + "-wishicon"}
            activityId={activityCardBlock.activityId}
            onClick={{ name: ON_WISH_ICON_CLICK_ACTION_NAME }}
          />
        </ZLayoutAtom>
        <VerticalLayoutAtom id={activityCardBlock.id + "-content-container"}>
          {activityCardBlock.badges.contextualHighlight && (
            <Badge
              id={activityCardBlock.id + "-contextual-highlight"}
              label={activityCardBlock.badges.contextualHighlight.label.text}
              variant="primary"
              overrides={{ background: "label-primary" }}
            />
          )}
          {activityCardBlock.badges.classifierBadge ? (
            <TextAtom
              id={activityCardBlock.id + "-classifierBadge"}
              {...activityCardBlock.badges.classifierBadge.label}
            />
          ) : null}
          <TextAtom id={activityCardBlock.id + "-title"} {...activityCardBlock.title} />
          <TextAtom
            id={activityCardBlock.id + "-attributes"}
            {...activityCardBlock.attributes[0]}
          />
          {activityCardBlock.badges.marketplaceBadges
            ?.at(0)
            ?.map((badge, index) => (
              <Badge
                id={activityCardBlock.id + "-badge-" + index}
                label={badge.label.text}
                variant={badge.variant}
              />
            ))}
          <RatingAtom
            id={activityCardBlock.id + "-rating"}
            variant="five-star"
            value={activityCardBlock.reviews!.ratingValue}
            label={activityCardBlock.reviews!.formattedReviewsValue!.text}
            formattedRating={activityCardBlock.reviews!.formattedRatingValue!.text}
          />
        </VerticalLayoutAtom>
      </HorizontalLayoutAtom>
    </GranularBlock>
  );
}

function getController(activityCardBlock: ActivityCardBlock): GranularBlockController {
  return getComposableListController({
    controllers: [
      // getTrackingController({
      //   action: ON_IMPRESSION_ACTION_NAME,
      //   trackingEvent: activityCardBlock.tracking
      //     .onImpressionTrackingEvent as unknown as TrackingEvent,
      // }),
      getClickNavigationController({
        action: ON_CLICK_ACTION_NAME,
        onClickLink: activityCardBlock.onClickLink,
        onClickTrackingEvent: activityCardBlock.tracking
          .onClickTrackingEvent as unknown as TrackingEvent,
      }),
      getWishIconClickController({
        action: ON_WISH_ICON_CLICK_ACTION_NAME,
        activityId: activityCardBlock.activityId,
        location: activityCardBlock.location!,
      }),
    ],
  });
}
