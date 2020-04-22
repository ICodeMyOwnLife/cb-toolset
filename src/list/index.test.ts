/**
 * @jest-environment jsdom
 */
import { isArrayLike, union, unique } from '.';

describe(`isArrayLike`, () => {
  test.each<[any, boolean]>([
    [[1, 2, 3], true],
    ['abc', true],
    [new Set([1, 2, 3]), true],
    [document.childNodes, true],
    [document.children, true],
    [{ [Symbol.iterator]: () => 0 }, true],
    [{ a: 1, b: 2 }, false],
    [{ length: 2, 0: 'a', 1: 'b' }, false],
  ])(`isArrayLike(%s) is %s`, (value, expected) =>
    expect(isArrayLike(value)).toBe(expected),
  );
});

describe(`union`, () => {
  test.each<number[][]>([
    [
      [1, 2, 3, 4],
      [1, 2],
      [3, 4],
    ],
    [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 6],
    ],
  ])(`union`, (expected, ...lists) => {
    const res = union(...lists);
    expect(res).toHaveLength(expected.length);
    expect(res).toMatchObject(expected);
  });
});

describe(`unique`, () => {
  test.each<[number[], number[]]>([
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3, 2, 3, 4, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ],
  ])(`unique(%o) => %o`, (input, expected) => {
    const res = unique(input);
    expect(res).toHaveLength(expected.length);
    expect(res).toMatchObject(expected);
  });
});
