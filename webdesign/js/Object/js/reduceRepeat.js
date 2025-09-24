const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const uniqueNumbers = numbers.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
