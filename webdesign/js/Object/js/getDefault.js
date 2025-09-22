// getDefault.js
const initializedMap = new Map([
  ['name', 'Alice'],
  [1, 'number one'],
  [true, 'boolean true']
]);
function safeGet(map, key, defaultValue = null) {
    return map.has(key) ? map.get(key) : defaultValue;
}

const name = safeGet(initializedMap, 'name', 'Unknown');
const age = safeGet(initializedMap, 'age', 25); // کلید وجود ندارد

console.log(name); // 'Alice'
console.log(age); // 25 (مقدار پیش‌فرض)
