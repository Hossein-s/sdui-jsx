export namespace JSX {
  export type Atom = Record<string, any>;

  export interface IntrinsicElements {
    atom: string;
  }
}

export function jsx(
  atom: string | (new (...args: any[]) => any),
  attributes: { [key: string]: any } | null,
  ...children: Node[]
) {
  if (typeof atom === "function") {
    return new atom(attributes ?? {}, children);
  }

  if (atom === "atom") {
    return {
      ...attributes,
    };
  }
}

export function jsxs(
  atom: string | (new (...args: any[]) => any),
  attributes: { [key: string]: any } | null,
  ...children: Node[]
) {
  return jsx(atom, attributes, ...children);
}
