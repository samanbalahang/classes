const userMap = new Map([
  ['name', 'Alice'],
  ['age', 30],
  ['city', 'New York']
]);

// 1. keys() - کلیدها
for (const key of userMap.keys()) {
  console.log(key); // 'name', 'age', 'city'
}

// 2. values() - مقادیر
for (const value of userMap.values()) {
  console.log(value); // 'Alice', 30, 'New York'
}

// 3. entries() - جفت‌های [key, value] (پیش‌فرض)
for (const [key, value] of userMap.entries()) {
  console.log(key, value);
}

// 4. forEach() - مانند آرایه
userMap.forEach((value, key) => {
  console.log(key, value);
});
