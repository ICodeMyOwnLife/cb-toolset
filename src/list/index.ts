import { List, Last } from './types';

export * from './types';

/**
 * Returns the items from list that are not present in the other lists
 * @see https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_difference
 */
export const difference = <TItem>(...lists: List<TItem>[]) =>
  lists.length
    ? lists.reduce((acc, cur) => acc.filter(i => !cur.includes(i)))
    : [];

export const filter = <TItem, TSpecific extends TItem>(
  list: List<TItem>,
  filterFunction: (
    item: TItem,
    index: number,
    itemList: List<TItem>,
  ) => item is TSpecific,
) => list.filter(filterFunction) as List<TSpecific>;

/**
 * Returns a list of items that are present in of all the lists
 * @see https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_intersection
 */
export const intersection = <TItem>(...lists: List<TItem>[]) =>
  lists.length
    ? lists.reduce((acc, cur) => acc.filter(i => cur.includes(i)))
    : [];

export const isArray = (u: any): u is any[] => Array.isArray(u);

/**
 * Checks if a provided argument is iterable like an array
 * @see https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-3-of-6-b7eaf1c21e46
 */
export const isArrayLike = (u: any): u is ArrayLike<any> =>
  typeof (u as any)?.[Symbol.iterator] === 'function';

export const last = <TList extends List>(list: TList): Last<TList> =>
  list[list.length - 1];

export const tuple = <TArgs extends any[]>(...args: TArgs) => args;

export const union = <TItem>(...lists: Iterable<TItem>[]) => [
  ...new Set(
    Array.prototype.concat.apply<TItem[], Iterable<TItem>[], TItem[]>(
      [],
      lists,
    ),
  ),
];

export const unique = <TItem>(collection: Iterable<TItem>) => [
  ...new Set(collection),
];
