import { SduiAtom } from "../atom";

export class FillerAtom extends SduiAtom {
  constructor(id: string) {
    super({ id, type: "fillerAtom" });
  }
}
