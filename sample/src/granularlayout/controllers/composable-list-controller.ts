import { GranularBlockController } from "./controller";

export interface ComposableListController extends GranularBlockController {
  controllers: [GranularBlockController, GranularBlockController, ...GranularBlockController[]];
}

export function getComposableListController(
  params: ComposableListControllerParams,
): ComposableListController {
  return {
    type: "composableListController",
    controllers: params.controllers,
  };
}

export interface ComposableListControllerParams {
  controllers: [GranularBlockController, GranularBlockController, ...GranularBlockController[]];
}
