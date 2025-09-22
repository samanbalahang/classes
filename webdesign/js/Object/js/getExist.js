// getExist.js
// بررسی وجود کلید قبل از دسترسی

const initializedMap = new Map([
  ['name', 'Alice'],
  [1, 'number one'],
  [true, 'boolean true']
]);
if (initializedMap.has('name')) {
    const name = initializedMap.get('name');
    console.log('Name found:', name); // خروجی: 'Name found: Alice'
} else {
    console.log('Key not found');
}
