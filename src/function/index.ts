import { ValueFactory, GeneralFunction } from './types';

export { default as audit } from './audit';
export { default as debounce } from './debounce';
export type { DebounceOptions } from './debounce';
export { default as memoize } from './memoize';
export { default as sample } from './sample';
export { default as throttle } from './throttle';
export type { ThrottleOptions } from './throttle';
export * from './types';

export const getValueFromFactory = <TValue>(
  factoryOrValue: ValueFactory<TValue>,
) => (isFunction(factoryOrValue) ? factoryOrValue() : factoryOrValue);

export const isFunction = (u: unknown): u is GeneralFunction =>
  u instanceof Function;

export const noop = () => undefined;
