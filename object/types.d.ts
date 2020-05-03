/**
 * @see https://github.com/react-hook-form/react-hook-form/blob/master/src/types.ts
 */
export declare type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T[P] extends {
        [key: string]: unknown;
      }
    ? DeepPartial<T[P]>
    : T[P];
};
/**
 * @see https://github.com/react-hook-form/react-hook-form/blob/master/src/types.ts
 */
export declare type EmptyObject = {
  [key in string | number]: never;
};
/**
 * @see https://github.com/react-hook-form/react-hook-form/blob/master/src/types.ts
 */
export declare type IsFlatObject<T extends Record<string, unknown>> = Extract<
  T[keyof T],
  unknown[] | Record<string, unknown>
> extends never
  ? true
  : false;
export declare type OmitFrom<TObject, TKey extends keyof TObject> = Omit<
  TObject,
  TKey
>;
export declare type PickFrom<TObject, TKey extends keyof TObject> = Pick<
  TObject,
  TKey
>;
export declare type ValueOf<T> = T[keyof T];
