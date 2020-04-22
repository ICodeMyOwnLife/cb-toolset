import { is } from '.';
import { GeneralConstructorFunction, FunctionReturns } from '../function';

describe('`is`', () => {
  test.each<[string, unknown, GeneralConstructorFunction, boolean]>([
    [`boolean literal is Boolean`, true, Boolean, true],
    [`new Boolean() is Boolean`, new Boolean(1), Boolean, true],
    [`number literal is Number`, 1, Number, true],
    [`new Number() is Number`, new Number(2), Number, true],
    [`NaN is Number`, NaN, Number, true],
    [`string literal is String`, 'a', String, true],
    [`new String() is String`, new String('\n'), String, true],
    [`array literal is Array`, [1], Array, true],
    [`new Array() is Array`, new Array(8), Array, true],
    [`object literal is Object`, { a: 1 }, Object, true],
    [`new Object() is Object`, new Object(null), Object, true],
    [`RegExp literal is RegExp`, /.+/g, RegExp, true],
    [`new RegExp() is RegExp`, new RegExp('\\w'), RegExp, true],
    [`function declaration is Function`, function () {}, Function, true],
    [`arrow function is Function`, () => undefined, Function, true],
    [`new Function() is Function`, new Function('return;'), Function, true],
    [`new Map() is Map`, new Map(), Map, true],
    [`undefined is not Boolean`, undefined, Boolean, false],
    [`null is not Object`, null, Object, false],
    [`array is not Object`, [0], Object, false],
  ])(`is: %s`, (_, value, type, expected) =>
    expect(is(value, type)).toBe(expected),
  );

  const getValue = (
    value:
      | number
      | string
      | FunctionReturns<number>
      | Promise<number>
      | undefined,
  ) => {
    if (is(value, Promise)) return value;
    if (is(value, Number)) return Promise.resolve(value);
    if (is(value, Function))
      return new Promise<number>(resolve => resolve(value()));
    if (is(value, String)) return Promise.resolve(Number(value));
    return Promise.resolve(0);
  };

  test.each<
    [
      number | string | FunctionReturns<number> | Promise<number> | undefined,
      number,
    ]
  >([
    [5, 5],
    ['10', 10],
    [() => 15, 15],
    [Promise.resolve(20), 20],
    [undefined, 0],
  ])(`getValue(%o) => %o`, async (value, expected) => {
    const result = await getValue(value);
    expect(result).toBe(expected);
  });
});
