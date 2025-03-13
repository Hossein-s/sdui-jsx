import { SduiContext } from "../types";
import { asyncStorage } from "../storage";

export function useContext(): SduiContext {
  const context = asyncStorage.getStore()?.context;

  if (!context) {
    throw new Error("Unexpected state, context is missing");
  }

  return context;
}
