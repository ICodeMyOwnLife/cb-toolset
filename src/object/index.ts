import { ValueOf, PickFrom, OmitFrom, CreateRecordOf } from './types';

export * from './types';

export const createUniqueObject = () => Object.create(null);

export const filterObject = <TObject, TResult = Partial<TObject>>(
  o: TObject,
  filter: (value: ValueOf<TObject>, key: keyof TObject) => boolean,
) =>
  Object.fromEntries(
    Object.entries(o).filter(([key, value]) =>
      filter(value, key as keyof TObject),
    ),
  ) as TResult;

export const filerNullValue = <TObject>(o: TObject) =>
  filterObject(o, value => value !== null && value !== undefined);

/**
 * Reference: https://fettblog.eu/typescript-hasownproperty/
 */
export const hasOwnProperty = <
  TObject extends object,
  TProp extends PropertyKey
>(
  o: TObject,
  prop: TProp,
): o is TObject & Record<TProp, unknown> => !!o?.hasOwnProperty(prop);

export const isObject = (u: any): u is object =>
  typeof u === 'object' && u !== null;

export const isPlainObject = (u: any): u is {} =>
  isObject(u) && u.constructor === Object;

export const omitFrom = <TObject, TKey extends keyof TObject>(
  o: TObject,
  ...keys: TKey[]
) =>
  filterObject<TObject, OmitFrom<TObject, TKey>>(
    o,
    (_, key) => !keys.includes(key as any),
  );

export const pickFrom = <TObject, TKey extends keyof TObject>(
  o: TObject,
  ...keys: TKey[]
) =>
  filterObject<TObject, PickFrom<TObject, TKey>>(o, (_, key) =>
    keys.includes(key as any),
  );

export const recordCreator = <TValue>(): CreateRecordOf<TValue> => a => a;

export const typeOf = (u: any) => {
  const rawType = typeof u;
  if (rawType !== 'object' || u === null) return rawType;
  return Object.getPrototypeOf(u).constructor.name as string;
};
