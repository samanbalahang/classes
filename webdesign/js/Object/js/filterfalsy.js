const mixedValues = [0, 1, false, 2, '', 3, null, undefined, 4, NaN];
const truthyValues = mixedValues.filter(value => value);
// یا به صورت explicit: mixedValues.filter(value => Boolean(value))
console.log(truthyValues); // خروجی: [1, 2, 3, 4]
