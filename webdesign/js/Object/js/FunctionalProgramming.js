// برنامه‌نویسی تابعی  استفاده از توابع خالص و توابع مرتبه بالا

// توابع خالص (همان ورودی → همیشه همان خروجی)
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// تابعی که تابع برمی‌گرداند (تابع ساز)
const createMultiplier = (factor) => (number) => number * factor;

// توابع مرتبه بالا (HigherOrder Functions)
const numbers = [1, 2, 3, 4, 5];

// map  تبدیل آرایه
const doubled = numbers.map(n => n * 2);

// filter  فیلتر کردن آرایه
const evens = numbers.filter(n => n % 2 === 0);

// reduce  کاهش آرایه به یک مقدار
const sum = numbers.reduce((acc, n) => acc + n, 0);

// ترکیب توابع
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const double = x => x * 2;
const increment = x => x + 1;
const square = x => x ** x;

const transform = pipe(double, increment, square);
const result = transform(5); // (52 + 1)^2 = 121

console.log("اعداد دوبرابر:", doubled);
console.log("اعداد زوج:", evens);
console.log("مجموع اعداد:", sum);
console.log("نتیجه ترکیب توابع:", result);
