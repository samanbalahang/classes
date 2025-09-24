const fruits = ['apple', 'banana', 'orange'];
const fruitObject = fruits.reduce((acc, curr, index) => {
  acc[index] = curr;
  return acc;
}, {});

console.log(fruitObject);
// {0: "apple", 1: "banana", 2: "orange"}
