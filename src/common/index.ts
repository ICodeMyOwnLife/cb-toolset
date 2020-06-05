import { GeneralConstructorFunction } from '../function';

export * from './types';

const unexpectedErrorMessage = (o: any) => `Unexpected value ${o}`;

export const assertNever = (o: never) => {
  throw new Error(unexpectedErrorMessage(o));
};

/**
 * Checks if a value is of a particular type
 * @see https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-3-of-6-b7eaf1c21e46
 */
export const is = <TConstructor extends GeneralConstructorFunction>(
  u: any,
  type: TConstructor,
): u is InstanceType<TConstructor> => u?.constructor === type;

export const isBoolean = (u: any): u is boolean => typeof u === 'boolean';

export const isNumber = (u: any): u is number => typeof u === 'number';

export const isSymbol = (u: any): u is symbol => typeof u === 'symbol';

export const warnIfMissingCases = (o: never) => {
  if (process.env.NODE_ENV !== 'production')
    console.warn(unexpectedErrorMessage(o));
  return undefined as never;
};
