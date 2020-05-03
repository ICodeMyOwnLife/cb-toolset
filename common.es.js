/**
 * Checks if a value is of a particular type
 * @see https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-3-of-6-b7eaf1c21e46
 */
const is = (u, type) => (u === null || u === void 0 ? void 0 : u.constructor) === type;
const isBoolean = (u) => typeof u === 'boolean';
const isNumber = (u) => typeof u === 'number';
const isSymbol = (u) => typeof u === 'symbol';

export { is, isBoolean, isNumber, isSymbol };
