const arrays = [[1, 2], [3, 4], [5, 6]];
const combined = arrays.reduce((acc, curr) => [...acc, ...curr], []);
console.log(combined); // [1, 2, 3, 4, 5, 6]
