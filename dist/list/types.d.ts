/**
 * @see https://github.com/pirix-gh/ts-toolbelt/tree/master/src/List
 */
export declare type First<TList extends List> = TList['length'] extends 0 ? never : TList[0];
/**
 * @see https://github.com/pirix-gh/ts-toolbelt/tree/master/src/List
 */
export declare type Last<TList extends List> = TList[LastIndex<TList>];
/**
 * @see https://github.com/pirix-gh/ts-toolbelt/tree/master/src/List
 */
export declare type LastIndex<TList extends List> = Remaining<TList>['length'];
export declare type List<T = any> = readonly T[];
/**
 * @see https://github.com/pirix-gh/ts-toolbelt/tree/master/src/List
 */
export declare type Remaining<TList extends List> = ((...args: TList) => any) extends (first: any, ...remaining: infer TRemaining) => any ? TRemaining : never;
