function memoizeAdd(fn) {
    const cache = new Map();
    return function (...args) {
        const value = args.toString();
        if (cache.has(value)) {
            return cache.get(value);
        }
        cache.set(value, fn(...args));
        return cache.get(value);
    }
};

function add(a, b) {
    return a * b;
}
function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const addM = memoizeAdd(add);
time(() => console.log(addM(1312,1312)));
time(() => console.log(addM(1312,1312)));
time(() => console.log(addM(999,999)));
time(() => console.log(addM(999,999)));