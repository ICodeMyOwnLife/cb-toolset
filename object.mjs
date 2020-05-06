const createUniqueObject = () => Object.create(null);
const filterObject = (o, filter) => Object.fromEntries(Object.entries(o).filter(([key, value]) => filter(value, key)));
const filerNullValue = (o) => filterObject(o, value => value !== null && value !== undefined);
/**
 * Reference: https://fettblog.eu/typescript-hasownproperty/
 */
const hasOwnProperty = (o, prop) => !!(o === null || o === void 0 ? void 0 : o.hasOwnProperty(prop));
const isObject = (u) => typeof u === 'object' && u !== null;
const isPlainObject = (u) => isObject(u) && u.constructor === Object;
const omitFrom = (o, ...keys) => filterObject(o, (_, key) => !keys.includes(key));
const pickFrom = (o, ...keys) => filterObject(o, (_, key) => keys.includes(key));
const recordCreator = () => a => a;
const typeOf = (u) => {
    const rawType = typeof u;
    if (rawType !== 'object' || u === null)
        return rawType;
    return Object.getPrototypeOf(u).constructor.name;
};

export { createUniqueObject, filerNullValue, filterObject, hasOwnProperty, isObject, isPlainObject, omitFrom, pickFrom, recordCreator, typeOf };
