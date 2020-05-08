import { GeneralConstructorFunction } from '../function';
export * from './types';
export declare const assertNever: (o: never) => never;
/**
 * Checks if a value is of a particular type
 * @see https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-3-of-6-b7eaf1c21e46
 */
export declare const is: <TConstructor extends GeneralConstructorFunction>(u: any, type: TConstructor) => u is InstanceType<TConstructor>;
export declare const isBoolean: (u: any) => u is boolean;
export declare const isNumber: (u: any) => u is number;
export declare const isSymbol: (u: any) => u is symbol;
export declare const warnIfMissingCases: (o: never) => void;
