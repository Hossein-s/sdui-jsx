import { Action, Clickable } from "../actions";
import { SduiAtom } from "../atom";

export class WishIconAtom extends SduiAtom implements Clickable {
  readonly activityId: number;
  readonly onClick: Action;

  constructor(params: WishIconAtomParams) {
    super({ id: params.id, type: "wishIconAtom" });
    this.activityId = params.activityId;
    this.onClick = params.onClick;
  }
}

export interface WishIconAtomParams {
  id: string;
  activityId: number;
  onClick: Action;
}
