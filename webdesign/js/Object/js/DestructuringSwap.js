let a = 1;
let b = 2;

// روش سنتی
let temp = a;
a = b;
b = temp;

// با Destructuring
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
