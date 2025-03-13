import { NavigationObject, TrackingEvent } from "@sdui";
import { GranularBlockController } from "./controller";

export interface ClickNavigationController extends GranularBlockController {
  action: string;
  onClickLink: NavigationObject;
  onClickTrackingEvent?: TrackingEvent;
}

export function getClickNavigationController<T extends Record<string, unknown>>(
  params: ClickNavigationControllerParams,
): ClickNavigationController {
  return {
    type: "clickNavigationController",
    action: params.action,
    onClickLink: params.onClickLink,
    onClickTrackingEvent: params.onClickTrackingEvent,
  };
}

export interface ClickNavigationControllerParams {
  action: string;
  onClickLink: NavigationObject;
  onClickTrackingEvent?: TrackingEvent;
}
