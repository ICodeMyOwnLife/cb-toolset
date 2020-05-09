export * from './types';
export declare const delay: (ms: number) => Promise<unknown>;
/**
 * @see https://github.com/then/is-promise
 */
export declare const isPromiseLike: (u: any) => u is PromiseLike<any>;
