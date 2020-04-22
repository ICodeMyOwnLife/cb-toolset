import { typeOf } from '.';

describe(`typeOf`, () => {
  test.each<[any, string]>([
    [true, 'boolean'],
    [345, 'number'],
    ['abc', 'string'],
    [function f() {}, 'function'],
    [Symbol(), 'symbol'],
    [undefined, 'undefined'],
    [null, 'object'],
    [{}, 'Object'],
    [[1, 2, 3], 'Array'],
    [new Set(), 'Set'],
    [new Buffer(''), 'Buffer'],
  ])(`typeOf(%o) => %s`, (u, expected) => expect(typeOf(u)).toBe(expected));
});
