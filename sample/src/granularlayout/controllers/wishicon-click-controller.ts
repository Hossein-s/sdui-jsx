import { GranularBlockController } from "./controller";
import { ActivityLocationData } from "@sdui";

export interface WishIconClickController extends GranularBlockController {
  action: string;
  activityId: number;
  location: ActivityLocationData;
}

export function getWishIconClickController(
  params: WishIconClickControllerParams,
): WishIconClickController {
  return {
    type: "wishIconClickController",
    action: params.action,
    activityId: params.activityId,
    location: params.location,
  };
}

export interface WishIconClickControllerParams {
  action: string;
  activityId: number;
  location: ActivityLocationData;
}
