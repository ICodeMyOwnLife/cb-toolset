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

export type ValueOf<T> = T[keyof T];

export type LooseValueOf<T, K> = T[K & keyof T];
export type LooseValueOf2<T, K1, K2> = LooseValueOf<LooseValueOf<T, K1>, K2>;
export type LooseValueOf3<T, K1, K2, K3> = LooseValueOf2<
  LooseValueOf<T, K1>,
  K2,
  K3
>;
export type LooseValueOf4<T, K1, K2, K3, K4> = LooseValueOf3<
  LooseValueOf<T, K1>,
  K2,
  K3,
  K4
>;
export type LooseValueOf5<T, K1, K2, K3, K4, K5> = LooseValueOf4<
  LooseValueOf<T, K1>,
  K2,
  K3,
  K4,
  K5
>;
export type LooseValueOf6<T, K1, K2, K3, K4, K5, K6> = LooseValueOf5<
  LooseValueOf<T, K1>,
  K2,
  K3,
  K4,
  K5,
  K6
>;
