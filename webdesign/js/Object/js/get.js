const initializedMap = new Map([
  ['name', 'Alice'],
  [1, 'number one'],
  [true, 'boolean true']
]);

// دسترسی به مقدار 'name'
const nameValue = initializedMap.get('name');
console.log(nameValue); // خروجی: 'Alice'

// دسترسی به سایر مقادیر
const numberValue = initializedMap.get(1);
console.log(numberValue); // خروجی: 'number one'

const booleanValue = initializedMap.get(true);
console.log(booleanValue); // خروجی: 'boolean true'
