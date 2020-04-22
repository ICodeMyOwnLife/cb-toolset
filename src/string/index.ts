const symbolSplitter = /[\s_-]/;

const exhaustiveSplitter = /[\s_-]|(?=[A-Z0-9])/;

const createTransform = (
  separator: string,
  transformWord: (word: string) => string,
) => (text: string, exhaustiveSplitting?: boolean) =>
  text
    .split(exhaustiveSplitting ? exhaustiveSplitter : symbolSplitter)
    .map(transformWord)
    .join(separator);

export const capitalizeWord = (word: string) =>
  !word.length ? word : word[0].toUpperCase() + word.substr(1).toLowerCase();

export const isString = (u: any): u is string => typeof u === 'string';

export const toKebabCase = createTransform('-', w => w.toLowerCase());

export const toLowerCase = createTransform(' ', w => w.toLowerCase());

export const toTitleCase = createTransform(' ', capitalizeWord);

export const toUpperCase = createTransform(' ', w => w.toUpperCase());
