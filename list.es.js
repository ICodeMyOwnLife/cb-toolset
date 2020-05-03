/**
 * Returns the items from list that are not present in the other lists
 * @see https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_difference
 */
const difference = (...lists) => lists.length
    ? lists.reduce((acc, cur) => acc.filter(i => !cur.includes(i)))
    : [];
const filter = (list, filterFunction) => list.filter(filterFunction);
/**
 * Returns a list of items that are present in of all the lists
 * @see https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_intersection
 */
const intersection = (...lists) => lists.length
    ? lists.reduce((acc, cur) => acc.filter(i => cur.includes(i)))
    : [];
const isArray = (u) => Array.isArray(u);
/**
 * Checks if a provided argument is iterable like an array
 * @see https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-3-of-6-b7eaf1c21e46
 */
const isArrayLike = (u) => { var _a; return typeof ((_a = u) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]) === 'function'; };
const last = (list) => list[list.length - 1];
const union = (...lists) => [
    ...new Set(Array.prototype.concat.apply([], lists)),
];
const unique = (collection) => [
    ...new Set(collection),
];

export { difference, filter, intersection, isArray, isArrayLike, last, union, unique };
