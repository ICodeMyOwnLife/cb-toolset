const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const isPromiseLike = (u) => (typeof u === 'object' || typeof u === 'function') &&
    typeof (u === null || u === void 0 ? void 0 : u.then) === 'function';

export { delay, isPromiseLike };
