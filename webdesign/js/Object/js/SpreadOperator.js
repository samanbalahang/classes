// SpreadOperator
// ترکیب آرایه‌ها
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// کپی آرایه
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]

// استفاده در فراخوانی تابع
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // 5
