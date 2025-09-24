// reduceArrayToString
const items = ['apple', 'banana', 'orange'];
const sentence = items.reduce((acc, curr, index) => {
  if (index === 0) {
    return curr;
  } else if (index === items.length-1) {
    return `${acc} and ${curr}`;
  } else {
    return `${acc}, ${curr}`;
  }
}, '');

console.log(sentence); // "apple, banana and orange"
