export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

/**
 * @see https://github.com/then/is-promise
 */
export const isPromiseLike = (u: any): u is PromiseLike<any> =>
  (typeof u === 'object' || typeof u === 'function') &&
  typeof u?.then === 'function';
