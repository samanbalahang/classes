const [a, b, c] = [1, 2];
console.log(a); // 1
console.log(b); // 2
console.log(c); // undefined

// با پیش‌فرض
const [x, y, z = 0] = [1, 2];
console.log(z); // 0
