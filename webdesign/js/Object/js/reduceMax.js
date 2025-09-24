// array.reduce(callback(accumulator, currentValue, index, array), initialValue)
//  accumulator: مقدار انباشته شده از فراخوانی‌های قبلی
//  currentValue: عنصر فعلی آرایه که در حال پردازش است
//  index: اندیس عنصر فعلی (اختیاری)
//  array: آرایه اصلی (اختیاری)
//  initialValue: مقدار اولیه برای accumulator (اختیاری)

const numbers = [12, 45, 7, 32, 89, 3];
const max = numbers.reduce((acc, curr) => Math.max(acc, curr));
console.log(max); // 89
