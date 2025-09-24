const numbers = [1, 2, 3, 4, 5];
console.log("numbers: ",numbers);

// filter: فقط اعداد زوج
const filtered = numbers.filter(n => n % 2 === 0); // [2, 4]
console.log("filtered: ",filtered);
// map: تبدیل هر عدد به مربع آن
const mapped = numbers.map(n => n * n); // [1, 4, 9, 16, 25]
console.log("mapped: ",mapped);
// find: یافتن اولین عدد بزرگتر از 3
const found = numbers.find(n => n > 3); // 4
console.log("found: ",found);
// reduce: جمع همه اعداد
const reduced = numbers.reduce((sum, n) => sum + n, 0); // 15
console.log("reduced: ",reduced);
