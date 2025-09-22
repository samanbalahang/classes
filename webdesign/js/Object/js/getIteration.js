// getIteration.js
const initializedMap = new Map([
  ['name', 'Alice'],
  [1, 'number one'],
  [true, 'boolean true']
]);
// روش ۱: استفاده از for...of

for (const [key, value] of initializedMap) {
    console.log(key, ':', value);
}
// خروجی:
// name : Alice
// 1 : number one
// true : boolean true

// روش ۲: استفاده از forEach
initializedMap.forEach((value, key) => {
    console.log(`${key} → ${value}`);
});
