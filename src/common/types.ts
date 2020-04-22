export type Defined<T> = T extends undefined ? never : T;

export type Is<T> = (o: unknown) => o is T;

export type IsNot<TExcluded> = <T>(o: T) => o is Not<TExcluded, T>;

export type Not<TExcluded, T> = T extends TExcluded ? never : T;

export type Nullable<T> = T | undefined | null;

export type Primitive = string | boolean | number | symbol | null | undefined;
