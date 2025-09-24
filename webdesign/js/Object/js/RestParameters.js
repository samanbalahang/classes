// جمع کردن تمام آرگومان‌ها
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
/*
function sum(...numbers) {
  return numbers.reduce((total, num) => {
       return total + num;
   }, 0);
}
   0 is base result so if array is empty we get 0 
*/
console.log(sum(1, 2, 3, 4, 5)); // 15

// ترکیب با پارامترهای عادی
function greet(greeting, ...names) {
  return names.map(name => `${greeting}, ${name}!`);
}

console.log(greet('Hello', 'Alice', 'Bob', 'Charlie'));
// ['Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!']

// در arrow functions
const multiply = (multiplier, ...numbers) => {
  return numbers.map(n => n * multiplier);
};

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
