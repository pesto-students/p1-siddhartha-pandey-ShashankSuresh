function memoizeMultiply(fn) {
    const cache = new Map(); // creates a data structure
    return function (...args) {
        const value = args.toString();
        if (cache.has(value)) {
            return cache.get(value);
        }
        cache.set(value, fn(...args));
        return cache.get(value);
    }
};

function multiply(a, b) {
    return a * b;
}
function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const multiplyM = memoizeMultiply(multiply);
time(() => console.log(multiplyM(1312,1312)));
time(() => console.log(multiplyM(1312,1312)));
time(() => console.log(multiplyM(999,999)));
time(() => console.log(multiplyM(999,999)));