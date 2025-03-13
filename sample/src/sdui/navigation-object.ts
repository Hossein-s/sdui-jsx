export enum HttpRedirect {
  Permanent = 301,
  Temporary = 302,
}

export interface NavigationObject {
  link: string;
  deeplink: string;
  code?: HttpRedirect;
  openInNewTab?: boolean;
}
