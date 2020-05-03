/**
 * Clamps a value between an upper and lower bound
 * @example
 * clamp(24, 20, 30) // 24
 * clamp(12, 20, 30) // 20
 * clamp(32, 20, 30) // 30
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
export declare const clamp: (
  value: number,
  min?: number,
  max?: number,
) => number;
export declare const degreeToRadian: (degree: number) => number;
export declare const distance: (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
) => number;
/**
 * Returns the fraction, based on a value between min and max
 * @example
 * invlerp(50, 100, 75)  // 0.5
 * invlerp(50, 100, 25)  // 0
 * invlerp(50, 100, 125) // 1
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
export declare const invlerp: (
  min: number,
  max: number,
  value: number,
) => number;
/**
 * Returns the value between min and max at a specified fraction
 * @example
 * lerp(20, 80, 0)   // 20
 * lerp(20, 80, 1)   // 80
 * lerp(20, 80, 0.5) // 40
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
export declare const lerp: (
  min: number,
  max: number,
  fraction: number,
) => number;
export declare const radianToDegree: (radian: number) => number;
export declare const random: (min: number, max: number) => number;
/**
 * Converts a value from one data range to another
 * @example
 * range(10, 100, 2000, 20000, 50) // 10000
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
export declare const range: (
  min1: number,
  max1: number,
  min2: number,
  max2: number,
  value1: number,
) => number;
