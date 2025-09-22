// ایجاد یک Map جدید
const myMap = new Map();

// یا مقداردهی اولیه با آرایه‌ای از جفت‌های [key, value]
const initializedMap = new Map([
  ['name', 'Alice'],
  [1, 'number one'],
  [true, 'boolean true']
]);
console.log(initializedMap.get("name"));
