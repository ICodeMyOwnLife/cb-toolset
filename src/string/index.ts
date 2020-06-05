const symbolSplitter = /[\s_-]/;

const exhaustiveSplitter = /[\s_-]|(?=[A-Z0-9])/;

const createRandomString = () => Math.random().toString(36);

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

export const randomString = (length: number) => {
  const maxLength = 8;
  const rep = Math.floor(length / maxLength);
  const mod = length - rep * maxLength;
  let s = '';
  for (let i = 0; i < rep; ++i) {
    s += createRandomString().substr(2, maxLength);
  }
  if (mod) s += createRandomString().substr(2, mod);
  return s;
};

export const toKebabCase = createTransform('-', w => w.toLowerCase());

export const toLowerCase = createTransform(' ', w => w.toLowerCase());

export const toTitleCase = createTransform(' ', capitalizeWord);

export const toUpperCase = createTransform(' ', w => w.toUpperCase());
