const audit = (func, wait) => {
    let timeoutId = null;
    let lastArgs = null;
    let result;
    const ratedFunction = (...args) => {
        lastArgs = args;
        if (timeoutId === null) {
            timeoutId = setTimeout(() => {
                if (lastArgs !== null) {
                    result = func(...lastArgs);
                    lastArgs = null;
                }
                timeoutId = null;
            }, wait);
        }
        return result;
    };
    ratedFunction.cancel = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        timeoutId = null;
        lastArgs = null;
    };
    return ratedFunction;
};

const debounce = (func, wait, { leading, trailing } = { trailing: true }) => {
    let lastArgs = null;
    let timeoutId = null;
    let result;
    const ratedFunction = (...args) => {
        lastArgs = args;
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        else if (leading) {
            result = func(...lastArgs);
            lastArgs = null;
        }
        timeoutId = setTimeout(() => {
            if (trailing && lastArgs !== null) {
                result = func(...lastArgs);
                lastArgs = null;
            }
            timeoutId = null;
        }, wait);
        return result;
    };
    ratedFunction.cancel = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        lastArgs = null;
        timeoutId = null;
    };
    return ratedFunction;
};

const sample = (func, wait) => {
    let lastArgs = null;
    let result;
    const intervalId = setInterval(() => {
        if (lastArgs) {
            result = func(...lastArgs);
            lastArgs = null;
        }
    }, wait);
    const ratedFunction = (...args) => {
        lastArgs = args;
        return result;
    };
    ratedFunction.cancel = () => {
        clearInterval(intervalId);
        lastArgs = null;
    };
    return ratedFunction;
};

const throttle = (func, wait, { leading, trailing } = { leading: true, trailing: true }) => {
    let lastArgs = null;
    let timeoutId = null;
    let result;
    const ratedFunction = (...args) => {
        lastArgs = args;
        if (timeoutId === null) {
            if (leading) {
                result = func(...lastArgs);
                lastArgs = null;
            }
            timeoutId = setTimeout(() => {
                if (trailing && lastArgs !== null) {
                    result = func(...lastArgs);
                    lastArgs = null;
                }
                timeoutId = null;
            }, wait);
        }
        return result;
    };
    ratedFunction.cancel = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        lastArgs = null;
        timeoutId = null;
    };
    return ratedFunction;
};

const getValueFromFactory = (factoryOrValue) => (isFunction(factoryOrValue) ? factoryOrValue() : factoryOrValue);
const isFunction = (u) => u instanceof Function;
const noop = () => undefined;

export { audit, debounce, getValueFromFactory, isFunction, noop, sample, throttle };
