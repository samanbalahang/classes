const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// انتخاب عناصر با ایندکس زوج
const evenIndexNumbers = numbers.filter((number, index) => index % 2 === 0);
console.log(evenIndexNumbers); // خروجی: [0, 2, 4, 6, 8]
