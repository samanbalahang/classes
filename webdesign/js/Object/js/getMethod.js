// getMethod.js
const map = new Map();

// 1. set() - 
map.set('name', 'Alice');
map.set('age', 30);
map.set('name', 'Bob'); // Update مقدار

// 2. get() - دریافت مقدار
console.log(map.get('name')); // 'Bob'
console.log(map.get('age')); // 30

// 3. has() - بررسی وجود کلید
console.log(map.has('name')); // true
console.log(map.has('city')); // false

// 4. delete() - حذف یک کلید
map.delete('age');
console.log(map.has('age')); // false

// 5. clear() - حذف همه عناصر
map.clear();
console.log(map.size); // 0

// 6. size - تعداد عناصر
console.log(map.size); // 0
