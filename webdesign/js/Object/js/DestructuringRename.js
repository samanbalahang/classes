const person = {
    firstName: 'فاطمه',
    lastName: 'احمدی'
};

const { firstName: fname, lastName: lname } = person;
console.log(fname); // 'فاطمه'
console.log(lname); // 'احمدی'
