const person = {
    name: 'علی',
    age: 30,
    city: 'تهران'
};

// روش سنتی
// const name = person.name;
// const age = person.age;

// با Destructuring
const { name, age, city } = person;
console.log(name); // 'علی'
console.log(age); // 30
console.log(city); // 'تهران'
