import { BaseSduiBlock } from "../sdui/base-sdui-block";
import { SduiAtom } from "./atoms";
import { GranularBlockController } from "./controllers";

export class GranularBlock extends BaseSduiBlock {
  controller?: GranularBlockController;
  state?: GranularBlockState;
  children: SduiAtom;
  useTfeContainer?: boolean;

  constructor(params: GranularBlockParams) {
    super({ type: "granular", id: params.id });
    this.controller = params.controller;
    this.state = params.state;
    this.children = params.children;
    this.useTfeContainer = params.useTfeContainer;
  }
}

export interface GranularBlockParams {
  id: string;
  controller?: GranularBlockController;
  state?: GranularBlockState;
  children: SduiAtom;
  useTfeContainer?: boolean;
}

export type GranularBlockState = Record<string, GranularBlockStateValue>;
export type GranularBlockStateValue = string | number;
