// روش سنتی
function printPerson(person) {
    console.log(person.name, person.age);
}

// با Destructuring
function printPerson({ name, age, city = 'نامشخص' }) {
    console.log(`${name} - ${age} سال - ${city}`);
}

printPerson({ name: 'علی', age: 30 }); // علی 
