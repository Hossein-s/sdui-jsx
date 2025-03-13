import { AsyncLocalStorage } from "node:async_hooks";
import { Store } from "./types";

export const asyncStorage = new AsyncLocalStorage<Store>();
