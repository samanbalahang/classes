// mapCounting.js
function countOccurrences(array) {
  const countMap = new Map();
  
  for (const item of array) {
    console.log("item",item);
    console.log("countMap.get(item):",countMap.get(item));
    const currentCount = countMap.get(item) || 0;
    console.log("currentCount:",currentCount); 
    countMap.set(item, currentCount + 1);
  }
  
  return countMap;
}

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCounts = countOccurrences(fruits);

console.log(fruitCounts);
// Map(3) { 'apple' → 3, 'banana' → 2, 'orange' → 1 }
