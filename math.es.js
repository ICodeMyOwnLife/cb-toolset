/**
 * Clamps a value between an upper and lower bound
 * @example
 * clamp(24, 20, 30) // 24
 * clamp(12, 20, 30) // 20
 * clamp(32, 20, 30) // 30
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
const clamp = (value, min = 0, max = 1) => value < min ? min : value > max ? max : value;
const degreeToRadian = (degree) => (degree * Math.PI) / 180;
const distance = (x1, y1, x2, y2) => Math.hypot(x1 - x2, y1 - y2);
/**
 * Returns the fraction, based on a value between min and max
 * @example
 * invlerp(50, 100, 75)  // 0.5
 * invlerp(50, 100, 25)  // 0
 * invlerp(50, 100, 125) // 1
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
const invlerp = (min, max, value) => clamp((value - min) / (max - min));
/**
 * Returns the value between min and max at a specified fraction
 * @example
 * lerp(20, 80, 0)   // 20
 * lerp(20, 80, 1)   // 80
 * lerp(20, 80, 0.5) // 40
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
const lerp = (min, max, fraction) => (max - min) * clamp(fraction) + min;
const radianToDegree = (radian) => (radian * 180) / Math.PI;
const random = (min, max) => Math.random() * (max - min) + min;
/**
 * Converts a value from one data range to another
 * @example
 * range(10, 100, 2000, 20000, 50) // 10000
 * @see https://www.trysmudford.com/blog/linear-interpolation-functions/
 */
const range = (min1, max1, min2, max2, value1) => lerp(min2, max2, invlerp(min1, max1, value1));

export { clamp, degreeToRadian, distance, invlerp, lerp, radianToDegree, random, range };
