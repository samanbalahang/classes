const numbers = [1, 2, 3, 4, 5];
let count = 0;

//  خطرناک: ممکن است چندین بار اجرا شود
const evenNumbers = numbers.filter(num => {
  count++; // side effect
  console.log(`Processing number: ${num}`);
  return num % 2 === 0;
});

console.log(`Total operations: ${count}`); // 5 - اما ممکن است غیرمنتظره باشد
