export interface Cancellable {
  cancel: VoidFunction;
}
export interface CancellableRateLimitedFunction<TArgs extends any[], TReturn>
  extends Cancellable,
    GenericFunction<TArgs, TReturn | undefined> {}
export interface FunctionReturns<TReturn>
  extends GenericFunction<[], TReturn> {}
export interface GeneralConstructorFunction
  extends GenericConstructorFunction<any[], any> {}
export interface GeneralFunction extends GenericFunction<any[], any> {}
export interface GenericConstructorFunction<TParams extends any[], TInstance> {
  new (...args: TParams): TInstance;
}
export interface GenericFunction<TArgs extends any[] = [], TReturn = void> {
  (...args: TArgs): TReturn;
}
export interface RateLimitFunction {
  <TArgs extends any[], TReturn>(
    func: GenericFunction<TArgs, TReturn>,
    wait: number,
  ): CancellableRateLimitedFunction<TArgs, TReturn>;
}
export interface RateLimitFunctionWithOptions<TOptions> {
  <TArgs extends any[], TReturn>(
    func: GenericFunction<TArgs, TReturn>,
    wait: number,
    options?: TOptions,
  ): CancellableRateLimitedFunction<TArgs, TReturn>;
}
export declare type ValueFactory<TValue> = TValue | FunctionReturns<TValue>;
