import { ValueFactory } from './types';

export { default as audit } from './audit';
export { default as debounce, DebounceOptions } from './debounce';
export { default as sample } from './sample';
export { default as throttle, ThrottleOptions } from './throttle';
export * from './types';
export declare const getValueFromFactory: <TValue>(
  factoryOrValue: ValueFactory<TValue>,
) => TValue;
export declare const isFunction: (u: unknown) => u is Function;
export declare const noop: () => undefined;
