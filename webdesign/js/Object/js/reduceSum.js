//array.reduce(callback(accumulator, currentValue, index, array), initialValue)
// 
//  accumulator: مقدار انباشته شده از فراخوانی‌های قبلی
//  currentValue: عنصر فعلی آرایه که در حال پردازش است
//  index: اندیس عنصر فعلی (اختیاری)
//  array: آرایه اصلی (اختیاری)
//  initialValue: مقدار اولیه برای accumulator (اختیاری)

const numbers = [1, 2, 3, 4, 5];

// بدون مقدار اولیه
const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum); // 15

// با مقدار اولیه
const sumWithInitial = numbers.reduce((acc, curr) => acc + curr, 10);
console.log(sumWithInitial); // 25
