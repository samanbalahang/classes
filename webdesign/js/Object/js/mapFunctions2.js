// mapFunctions2.js
function createCounter() {
  const counts = new Map();
  
  return {
    increment(key) {
      counts.set(key, (counts.get(key) || 0) + 1);
    },
    getCount(key) {
      return counts.get(key) || 0;
    },
    getAllCounts() {
      return Array.from(counts.entries());
    }
  };
}

const counter = createCounter();
counter.increment('apple');
counter.increment('banana');
counter.increment('apple');

console.log(counter.getCount('apple')); // 2
console.log(counter.getAllCounts()); // [['apple', 2], ['banana', 1]]
