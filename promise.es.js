const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
/**
 * @see https://github.com/then/is-promise
 */
const isPromiseLike = (u) => (typeof u === 'object' || typeof u === 'function') &&
    typeof (u === null || u === void 0 ? void 0 : u.then) === 'function';

export { delay, isPromiseLike };
