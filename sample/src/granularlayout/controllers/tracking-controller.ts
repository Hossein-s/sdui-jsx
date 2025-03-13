import { TrackingEvent } from "@sdui";
import { GranularBlockController } from "./controller";

export interface TrackingController extends GranularBlockController {
  action: string;
  trackingEvent: TrackingEvent;
}

export function getTrackingController(params: TrackingControllerParams): TrackingController {
  return {
    type: "trackingController",
    action: params.action,
    trackingEvent: params.trackingEvent,
  };
}

export interface TrackingControllerParams {
  action: string;
  trackingEvent: TrackingEvent;
}
