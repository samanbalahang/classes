// reduceAverage.js
const scores = [85, 90, 78, 92, 88];
const average = scores.reduce((acc, curr, index, array) => {
  acc += curr;
  if (index === array.length-1) {
    return acc / array.length;
  }
  return acc;
}, 0);

console.log(average); // 86.6
