// ترکیب آبجکت‌ها
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// کپی آبجکت
const originalObj = { x: 10, y: 20 };
const copyObj = { ...originalObj };
console.log(copyObj); // { x: 10, y: 20 }

// overwrite properties
const base = { a: 1, b: 2, c: 3 };
const updated = { ...base, b: 20, d: 4 };
console.log(updated); // { a: 1, b: 20, c: 3, d: 4 }
