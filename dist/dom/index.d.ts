export * from './types';
export declare const createURLSearchObject: <TSearchObject>(init?: string | string[][] | Record<string, string> | URLSearchParams | undefined) => TSearchObject;
export declare const createURLSearchParams: (searchObject: object) => URLSearchParams;
export declare const createURLSearchString: (searchObject: object) => string;
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export declare const elementSiblings: (node: Node) => Element[];
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#css--style
 */
export declare const getComputedStyle: (element: Element, styleName: string) => string | undefined;
/**
 * @see https://stackoverflow.com/a/35385518/11450300
 */
export declare const htmlToDocumentFragment: (html: string) => DocumentFragment;
export declare const htmlToElement: (html: string) => Element | null;
export declare const htmlToElements: (html: string) => HTMLCollection;
export declare const htmlToNode: (html: string) => ChildNode | null;
export declare const htmlToNodes: (html: string) => NodeListOf<ChildNode>;
export declare const isBrowser: () => boolean;
export declare const isWindow: (u: any) => u is Window;
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export declare const nextElementSiblings: (node: NonDocumentTypeChildNode) => Element[];
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export declare const nextNodeSiblings: (node: Node) => Node[];
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export declare const nodeSiblings: (node: Node) => ChildNode[];
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#events
 */
export declare const onReady: (handler: VoidFunction) => void;
export declare const preventDefaultHandler: (e: {
    preventDefault: VoidFunction;
}) => void;
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export declare const previousElementSiblings: (node: NonDocumentTypeChildNode) => Element[];
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
export declare const previousNodeSiblings: (node: Node) => Node[];
