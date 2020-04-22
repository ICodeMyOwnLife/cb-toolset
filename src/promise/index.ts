export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const isPromiseLike = (u: any): u is PromiseLike<any> =>
  (typeof u === 'object' || typeof u === 'function') &&
  typeof u?.then === 'function';
