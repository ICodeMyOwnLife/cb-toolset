import { Nullable } from '../common';

export * from './types';

export const createURLSearchObject = <TSearchObject>(
  ...init: ConstructorParameters<typeof URLSearchParams>
) => Object.fromEntries(new URLSearchParams(...init) as any) as TSearchObject;

export const createURLSearchParams = (searchObject: Record<string, string>) =>
  new URLSearchParams(searchObject);

export const createURLSearchString = (searchObject: Record<string, string>) =>
  createURLSearchParams(searchObject).toString();

/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export const elementSiblings = (node: Node) =>
  node.parentElement
    ? Array.from(node.parentElement.children).filter(e => e !== node)
    : [];

/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#css--style
 */
export const getComputedStyle = (element: Element, styleName: string) =>
  element.ownerDocument?.defaultView
    ?.getComputedStyle(element, null)
    .getPropertyValue(styleName);

export const getParentWindow = (): WindowProxy | null => {
  if (!isBrowser()) return null;
  if (window.parent && window.parent !== window) return window.parent;
  return window.opener;
};

/**
 * @see https://stackoverflow.com/a/35385518/11450300
 */
export const htmlToDocumentFragment = (html: string) => {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content;
};

export const htmlToElement = (html: string) =>
  htmlToDocumentFragment(html).firstElementChild;

export const htmlToElements = (html: string) =>
  htmlToDocumentFragment(html).children;

export const htmlToNode = (html: string) =>
  htmlToDocumentFragment(html).firstChild;

export const htmlToNodes = (html: string) =>
  htmlToDocumentFragment(html).childNodes;

export const isBrowser = () =>
  !!window && typeof window.document !== 'undefined';

export const isWindow = (u: any): u is Window => !!u && u === u.window;

/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export const nextElementSiblings = (node: NonDocumentTypeChildNode) => {
  const siblings: Element[] = [];
  getSiblingRecursive(siblings, node, cur => cur.nextElementSibling);
  return siblings;
};

/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export const nextNodeSiblings = (node: Node) => {
  const siblings: Node[] = [];
  getSiblingRecursive(siblings, node, cur => cur.nextSibling);
  return siblings;
};

/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export const nodeSiblings = (node: Node) =>
  node.parentNode
    ? Array.from(node.parentNode.childNodes).filter(n => n !== node)
    : [];

/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#events
 */
export const onReady = (handler: VoidFunction) => {
  if (document.readyState !== 'loading') {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler);
  }
};

export const preventDefaultHandler = (e: { preventDefault: VoidFunction }) =>
  e.preventDefault();

/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export const previousElementSiblings = (node: NonDocumentTypeChildNode) => {
  const siblings: Element[] = [];
  getSiblingRecursive(siblings, node, cur => cur.previousElementSibling);
  return siblings;
};

/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export const previousNodeSiblings = (node: Node) => {
  const siblings: Node[] = [];
  getSiblingRecursive(siblings, node, cur => cur.previousSibling);
  return siblings;
};

const getSiblingRecursive = <TCurrent, TSibling extends TCurrent>(
  siblings: TSibling[],
  currentItem: TCurrent,
  getSibling: (currentItem: TCurrent) => Nullable<TSibling>,
) => {
  const sibling = getSibling(currentItem);
  if (sibling) {
    siblings.push(sibling);
    getSiblingRecursive(siblings, sibling, getSibling);
  }
};
