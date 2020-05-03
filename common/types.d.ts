export declare type Defined<T> = T extends undefined ? never : T;
export declare type Is<T> = (o: unknown) => o is T;
export declare type IsNot<TExcluded> = <T>(o: T) => o is Not<TExcluded, T>;
export declare type Not<TExcluded, T> = T extends TExcluded ? never : T;
export declare type Nullable<T> = T | undefined | null;
export declare type Primitive =
  | string
  | boolean
  | number
  | symbol
  | null
  | undefined;
