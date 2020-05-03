export * from './types';
export declare const createUniqueObject: () => any;
export declare const filterObject: <TObject, TResult = Partial<TObject>>(
  o: TObject,
  filter: (value: TObject[keyof TObject], key: keyof TObject) => boolean,
) => TResult;
export declare const filerNullValue: <TObject>(o: TObject) => Partial<TObject>;
/**
 * Reference: https://fettblog.eu/typescript-hasownproperty/
 */
export declare const hasOwnProperty: <
  TObject extends object,
  TProp extends string | number | symbol
>(
  o: TObject,
  prop: TProp,
) => o is TObject & Record<TProp, unknown>;
export declare const isObject: (u: any) => u is object;
export declare const isPlainObject: (u: any) => u is {};
export declare const omitFrom: <TObject, TKey extends keyof TObject>(
  o: TObject,
  ...keys: TKey[]
) => Pick<TObject, Exclude<keyof TObject, TKey>>;
export declare const pickFrom: <TObject, TKey extends keyof TObject>(
  o: TObject,
  ...keys: TKey[]
) => Pick<TObject, TKey>;
export declare const typeOf: (u: any) => string;
