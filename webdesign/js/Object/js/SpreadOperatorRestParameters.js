// ترکیب Rest و Spread
function processData(first, second, ...rest) {
  console.log(`First: ${first}`);
  console.log(`Second: ${second}`);
  console.log(`Rest: ${rest.join(', ')}`);
  
  // استفاده از Spread برای پردازش بیشتر
  const allData = [first, second, ...rest];
  return allData.map(item => item * 2);
}

const result = processData(1, 2, 3, 4, 5);
console.log(result); // [2, 4, 6, 8, 10]

// در Destructuring
const [first, ...others] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(others); // [2, 3, 4, 5]

const { a, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // 1
console.log(rest); // { b: 2, c: 3, d: 4 }
