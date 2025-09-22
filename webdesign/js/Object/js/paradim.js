// ترکیب پارادایم‌های مختلف

// رویه‌ای + تابعی
function processUserData(users, filterFunc, mapFunc) {
    return users
        .filter(filterFunc)
        .map(mapFunc);
}

// شیءگرا + تابعی
class Calculator {
    constructor() {
        this.operations = [];
    }
    
    // ذخیره عملیات به صورت تابع
    addOperation(name, operationFunc) {
        this.operations.push({ name, func: operationFunc });
    }
    
    executeOperation(name, ...args) {
        const operation = this.operations.find(op => op.name === name);
        if (operation) {
            return operation.func(...args);
        }
        throw new Error(`Operation ${name} not found`);
    }
}

// استفاده از ترکیب پارادایم‌ها
const users = [
    { name: "Ali", age: 25, active: true },
    { name: "Sara", age: 30, active: false },
    { name: "Reza", age: 22, active: true }
];

const activeUsers = processUserData(
    users,
    user => user.active,  // تابع فیلتر (تابعی)  (user) => {return user.active;}
    user => user.name      // تابع تبدیل (تابعی) (user) => {return user.name;}
); // call processUserData() function with specefic arugomans

console.log("کاربران فعال:", activeUsers);

// ایجاد ماشین حساب و اضافه کردن عملیات
const calc = new Calculator();  // شیءگرا
calc.addOperation("add", (a, b) => a + b);  // تابعی
calc.addOperation("multiply", (a, b) => a * b);

console.log("جمع:", calc.executeOperation("add", 5, 3));
console.log("ضرب:", calc.executeOperation("multiply", 5, 3));
