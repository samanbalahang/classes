// getAll.js
const initializedMap = new Map([
  ['name', 'Alice'],
  [1, 'number one'],
  [true, 'boolean true']
]);
// دریافت همه کلیدها
const keys = Array.from(initializedMap.keys());
console.log(keys); // خروجی: ['name', 1, true]
// دریافت همه مقادیر
const values = Array.from(initializedMap.values());
console.log(values); // خروجی: ['Alice', 'number one', 'boolean true']
// دریافت همه entries به صورت آرایه
const entries = Array.from(initializedMap.entries());
console.log(entries);
// خروجی: [['name', 'Alice'], [1, 'number one'], [true, 'boolean true']]
