export interface Action {
  name: string;
}

export interface Clickable {
  onClick?: Action;
  href?: HrefObject;
}

export interface HrefObject {
  link: string;
  openInNewTab?: boolean;
}

export interface Impressionable {
  onImpression?: Action;
}
