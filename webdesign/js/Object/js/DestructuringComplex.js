const company = {
    name: 'فناوری اطلاعات',
    address: {
        city: 'مشهد',
        street: 'آزادی',
        zip: '12345'
    }
};

const { 
    name, 
    address: { 
        city, 
        street: mainStreet, 
        zip: postalCode = '00000' 
    } 
} = company;

console.log(name); // 'فناوری اطلاعات'
console.log(city); // 'مشهد'
console.log(mainStreet); // 'آزادی'
console.log(postalCode); // '12345'
