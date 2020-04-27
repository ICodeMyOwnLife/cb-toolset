const symbolSplitter = /[\s_-]/;
const exhaustiveSplitter = /[\s_-]|(?=[A-Z0-9])/;
const createTransform = (separator, transformWord) => (text, exhaustiveSplitting) => text
    .split(exhaustiveSplitting ? exhaustiveSplitter : symbolSplitter)
    .map(transformWord)
    .join(separator);
const capitalizeWord = (word) => !word.length ? word : word[0].toUpperCase() + word.substr(1).toLowerCase();
const isString = (u) => typeof u === 'string';
const toKebabCase = createTransform('-', w => w.toLowerCase());
const toLowerCase = createTransform(' ', w => w.toLowerCase());
const toTitleCase = createTransform(' ', capitalizeWord);
const toUpperCase = createTransform(' ', w => w.toUpperCase());

export { capitalizeWord, isString, toKebabCase, toLowerCase, toTitleCase, toUpperCase };
