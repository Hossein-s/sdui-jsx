export interface TrackingEvent<T extends Record<string, unknown> = Record<string, unknown>> {
  eventName: string;
  containerName: TrackingContainerName;
  properties?: T;
}

export enum TrackingContainerName {
  Activity = "Activity",
  FakeContainerName = "FakeContainerName",
  Undefined = "Undefined",
}
