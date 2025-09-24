const obj = { 'first-name': 'علی', 'last-name': 'محمدی' };

// باید از نام واقعی ویژگی استفاده کرد
const { 'first-name': firstName, 'last-name': lastName } = obj;
console.log(firstName); // 'علی'
