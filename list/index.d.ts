import { List } from './types';

export * from './types';
/**
 * Returns the items from list that are not present in the other lists
 * @see https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_difference
 */
export declare const difference: <TItem>(
  ...lists: List<TItem>[]
) => List<TItem>;
export declare const filter: <TItem, TSpecific extends TItem>(
  list: List<TItem>,
  filterFunction: (
    item: TItem,
    index: number,
    list: List<TItem>,
  ) => item is TSpecific,
) => List<TSpecific>;
/**
 * Returns a list of items that are present in of all the lists
 * @see https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_intersection
 */
export declare const intersection: <TItem>(
  ...lists: List<TItem>[]
) => List<TItem>;
export declare const isArray: (u: any) => u is any[];
/**
 * Checks if a provided argument is iterable like an array
 * @see https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-3-of-6-b7eaf1c21e46
 */
export declare const isArrayLike: (u: any) => u is ArrayLike<any>;
export declare const last: <TList extends List<any>>(
  list: TList,
) => TList[import('./types').Remaining<TList>['length']];
export declare const union: <TItem>(...lists: Iterable<TItem>[]) => TItem[];
export declare const unique: <TItem>(collection: Iterable<TItem>) => TItem[];
