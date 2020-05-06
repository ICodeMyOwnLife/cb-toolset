import { RateLimitFunctionWithOptions } from './types';
declare const debounce: RateLimitFunctionWithOptions<DebounceOptions>;
export default debounce;
export interface DebounceOptions {
    leading?: boolean;
    trailing?: boolean;
}
