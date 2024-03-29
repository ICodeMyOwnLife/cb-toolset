import {
  RateLimitFunctionWithOptions,
  CancellableRateLimitedFunction,
} from './types';

const debounce: RateLimitFunctionWithOptions<DebounceOptions> = <
  TArgs extends any[],
  TReturn,
>(
  func: (...args: TArgs) => TReturn,
  wait: number,
  { leading, trailing }: DebounceOptions = { trailing: true },
) => {
  let lastArgs: TArgs | null = null;
  let timeoutId: NodeJS.Timeout | null = null;
  let result: TReturn | undefined;

  const ratedFunction: CancellableRateLimitedFunction<TArgs, TReturn> = (
    ...args
  ) => {
    lastArgs = args;

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    } else if (leading) {
      result = func(...lastArgs);
      lastArgs = null;
    }

    timeoutId = setTimeout(() => {
      if (trailing && lastArgs !== null) {
        result = func(...lastArgs);
        lastArgs = null;
      }
      timeoutId = null;
    }, wait);

    return result;
  };

  ratedFunction.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    lastArgs = null;
    timeoutId = null;
  };

  return ratedFunction;
};

export default debounce;

export interface DebounceOptions {
  leading?: boolean;
  trailing?: boolean;
}
