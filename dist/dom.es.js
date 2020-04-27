const createURLSearchObject = (...init) => Object.fromEntries(new URLSearchParams(...init));
const createURLSearchParams = (searchObject) => new URLSearchParams(searchObject);
const createURLSearchString = (searchObject) => createURLSearchParams(searchObject).toString();
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
const elementSiblings = (node) => node.parentElement
    ? Array.from(node.parentElement.children).filter(e => e !== node)
    : [];
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#css--style
 */
const getComputedStyle = (element, styleName) => { var _a, _b; return (_b = (_a = element.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b.getComputedStyle(element, null).getPropertyValue(styleName); };
/**
 * @see https://stackoverflow.com/a/35385518/11450300
 */
const htmlToDocumentFragment = (html) => {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
};
const htmlToElement = (html) => htmlToDocumentFragment(html).firstElementChild;
const htmlToElements = (html) => htmlToDocumentFragment(html).children;
const htmlToNode = (html) => htmlToDocumentFragment(html).firstChild;
const htmlToNodes = (html) => htmlToDocumentFragment(html).childNodes;
const isBrowser = () => !!window && typeof window.document !== 'undefined';
const isWindow = (u) => !!u && u === u.window;
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
const nextElementSiblings = (node) => {
    const siblings = [];
    getSiblingRecursive(siblings, node, cur => cur.nextElementSibling);
    return siblings;
};
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
const nextNodeSiblings = (node) => {
    const siblings = [];
    getSiblingRecursive(siblings, node, cur => cur.nextSibling);
    return siblings;
};
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
const nodeSiblings = (node) => node.parentNode
    ? Array.from(node.parentNode.childNodes).filter(n => n !== node)
    : [];
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#events
 */
const onReady = (handler) => {
    if (document.readyState !== 'loading') {
        handler();
    }
    else {
        document.addEventListener('DOMContentLoaded', handler);
    }
};
const preventDefaultHandler = (e) => e.preventDefault();
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
const previousElementSiblings = (node) => {
    const siblings = [];
    getSiblingRecursive(siblings, node, cur => cur.previousElementSibling);
    return siblings;
};
/**
 * @see https://github.com/nefe/You-Dont-Need-jQuery#query-selector
 */
const previousNodeSiblings = (node) => {
    const siblings = [];
    getSiblingRecursive(siblings, node, cur => cur.previousSibling);
    return siblings;
};
const getSiblingRecursive = (siblings, currentItem, getSibling) => {
    const sibling = getSibling(currentItem);
    if (sibling) {
        siblings.push(sibling);
        getSiblingRecursive(siblings, sibling, getSibling);
    }
};

export { createURLSearchObject, createURLSearchParams, createURLSearchString, elementSiblings, getComputedStyle, htmlToDocumentFragment, htmlToElement, htmlToElements, htmlToNode, htmlToNodes, isBrowser, isWindow, nextElementSiblings, nextNodeSiblings, nodeSiblings, onReady, preventDefaultHandler, previousElementSiblings, previousNodeSiblings };
