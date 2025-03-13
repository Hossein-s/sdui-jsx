export interface SduiBlock {
  id: string;
  type: string;
  children?: SduiBlock[];
}
