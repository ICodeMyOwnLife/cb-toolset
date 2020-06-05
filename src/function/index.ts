import { ValueFactory } from './types';

export { default as audit } from './audit';
export { default as debounce, DebounceOptions } from './debounce';
export { default as memoize } from './memoize';
export { default as sample } from './sample';
export { default as throttle, ThrottleOptions } from './throttle';
export * from './types';

export const getValueFromFactory = <TValue>(
  factoryOrValue: ValueFactory<TValue>,
) => (isFunction(factoryOrValue) ? factoryOrValue() : factoryOrValue);

export const isFunction = (u: unknown): u is Function => u instanceof Function;

export const noop = () => undefined;
