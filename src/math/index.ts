/**
 * Clamps a value between an upper and lower bound
 * @example
 * clamp(24, 20, 30) // 24
 * clamp(12, 20, 30) // 20
 * clamp(32, 20, 30) // 30
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
export const clamp = (value: number, min = 0, max = 1) =>
  value < min ? min : value > max ? max : value;

export const degreeToRadian = (degree: number) => (degree * Math.PI) / 180;

export const distance = (x1: number, y1: number, x2: number, y2: number) =>
  Math.hypot(x1 - x2, y1 - y2);

/**
 * Returns the fraction, based on a value between min and max
 * @example
 * invlerp(50, 100, 75)  // 0.5
 * invlerp(50, 100, 25)  // 0
 * invlerp(50, 100, 125) // 1
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
export const invlerp = (min: number, max: number, value: number) =>
  clamp((value - min) / (max - min));

/**
 * Returns the value between min and max at a specified fraction
 * @example
 * lerp(20, 80, 0)   // 20
 * lerp(20, 80, 1)   // 80
 * lerp(20, 80, 0.5) // 40
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
export const lerp = (min: number, max: number, fraction: number) =>
  (max - min) * clamp(fraction) + min;

export const radianToDegree = (radian: number) => (radian * 180) / Math.PI;

export const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

/**
 * Converts a value from one data range to another
 * @example
 * range(10, 100, 2000, 20000, 50) // 10000
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
export const range = (
  min1: number,
  max1: number,
  min2: number,
  max2: number,
  value1: number,
) => lerp(min2, max2, invlerp(min1, max1, value1));
