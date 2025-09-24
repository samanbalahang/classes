const users = [
    { name: 'علی', age: 30 },
    { name: 'فاطمه', age: 25 },
    { name: 'محمد', age: 35 }
];

// Destructuring در map
const names = users.map(({ name }) => name);
console.log(names); // ['علی', 'فاطمه', 'محمد']

// Destructuring در for-of
for (const { name, age } of users) {
    console.log(`${name}: ${age} سال`);
}
