import { SduiBlock } from "./sdui-block";

export abstract class BaseSduiBlock implements SduiBlock {
  public id: string;
  public type: string;
  public children?: SduiBlock[];

  constructor({ id, type, children }: { id: string; type: string; children?: SduiBlock[] }) {
    this.id = id;
    this.type = type;
    this.children = children;
  }
}
