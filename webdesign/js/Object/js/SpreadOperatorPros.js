// کلون عمیق ساده (فقط برای آبجکت‌های ساده)
const original = { a: 1, b: { c: 2 } };
const clone = { ...original, b: { ...original.b } };

// ادغام آبجکت‌ها با ویژگی‌های تکراری
const defaults = { theme: 'light', fontSize: 16 };
const userPreferences = { theme: 'dark' };
const finalConfig = { ...defaults, ...userPreferences };
console.log(finalConfig); // { theme: 'dark', fontSize: 16 }

// ایجاد آرایه بدون مقادیر تکراری
const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(withDuplicates)];
console.log(unique); // [1, 2, 3, 4, 5]
