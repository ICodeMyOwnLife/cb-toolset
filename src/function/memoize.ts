const memoize = <TArg, TResult>(
  fn: (arg: TArg) => TResult,
  compare: (a1: TArg | undefined, a2: TArg) => boolean = Object.is,
) => {
  let prevArg: TArg | undefined;
  let prevRes: TResult | undefined;

  return (arg: TArg) => {
    if (compare(prevArg, arg)) return prevRes as TResult;
    prevArg = arg;
    prevRes = fn(arg);
    return prevRes;
  };
};

export default memoize;
