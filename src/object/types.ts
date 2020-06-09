export type CreateRecordOf<TValue> = <TKey extends keyof any>(
  record: Record<TKey, TValue>,
) => Record<TKey, TValue>;

/**
 * @see https://github.com/react-hook-form/react-hook-form/blob/master/src/types.ts
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T[P] extends { [key: string]: unknown }
    ? DeepPartial<T[P]>
    : T[P];
};

/**
 * @see https://github.com/react-hook-form/react-hook-form/blob/master/src/types.ts
 */
export type EmptyObject = { [key in string | number]: never };

/**
 * @see https://github.com/react-hook-form/react-hook-form/blob/master/src/types.ts
 */
export type IsFlatObject<T extends Record<PropertyKey, unknown>> = Extract<
  T[keyof T],
  unknown[] | Record<PropertyKey, unknown>
> extends never
  ? true
  : false;

export type OmitFrom<TObject, TKey extends keyof TObject> = Omit<TObject, TKey>;

export type PickFrom<TObject, TKey extends keyof TObject> = Pick<TObject, TKey>;

export type ValueOf<T> = T[keyof T];
