/**
 * 1 is equal to 1X compass spacing unit.
 * 1X represents 8px on iOS/WEB and 8dp on Android
 */
export type Spacing =
  | 0 // 0 is equal to 0px
  | 0.125 // 0.125 is equal to 1px on iOS/WEB and 1dp on Android
  | 0.25 // 0.25 is equal to 2px on iOS/WEB and 2dp on Android
  | 0.375 // 0.375 is equal to 3px on iOS/WEB and 3dp on Android
  | 0.5 // 0.5 is equal to 4px on iOS/WEB and 4dp on Android
  | 0.625 // 0.625 is equal to 5px on iOS/WEB and 5dp on Android
  | 0.75 // 0.75 is equal to 6px on iOS/WEB and 6dp on Android
  | 0.875 // 0.875 is equal to 7px on iOS/WEB and 7dp on Android
  | 1 // 1 is equal to 8px on iOS/WEB and 8dp on Android
  | 1.125 // 1.125 is equal to 9px on iOS/WEB and 9dp on Android
  | 1.25 // 1.25 is equal to 10px on iOS/WEB and 10dp on Android
  | 1.375 // 1.375 is equal to 11px on iOS/WEB and 11dp on Android
  | 1.5 // 1.5 is equal to 12px on iOS/WEB and 12dp on Android
  | 1.625 // 1.625 is equal to 13px on iOS/WEB and 13dp on Android
  | 1.75 // 1.75 is equal to 14px on iOS/WEB and 14dp on Android
  | 1.875 // 1.875 is equal to 15px on iOS/WEB and 15dp on Android
  | 2 // 2 is equal to 16px on iOS/WEB and 16dp on Android
  | 2.5 // 2.5 is equal to 20px on iOS/WEB and 20dp on Android
  | 3 // 3 is equal to 24px on iOS/WEB and 24dp on Android
  | 4 // 4 is equal to 32px on iOS/WEB and 32dp on Android
  | 5 // 5 is equal to 40px on iOS/WEB and 40dp on Android
  | 6 // 6 is equal to 48px on iOS/WEB and 48dp on Android
  | 7 // 7 is equal to 56px on iOS/WEB and 56dp on Android
  | 8; // 8 is equal to 64px on iOS/WEB and 64dp on Android

/**
 * 1 is equal to 8px on iOS/WEB and 8dp on Android
 */
export type AtomSize = number | "wrapContent" | "fillParent";

/**
 * 1 is equal to 1X compass corner radius unit.
 * 1X represents 8px on iOS/WEB and 8dp on Android
 */
export type CornerRadius = 0.25 | 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75 | 2 | "full";
