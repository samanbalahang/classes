// برنامه‌نویسی شیءگرا  استفاده از کلاس‌ها و اشیا

// تعریف کلاس
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // متد
    greet() {
        return `سلام، من ${this.name} هستم و ${this.age} سال دارم.`;
    }
    
    // متد دیگر
    haveBirthday() {
        this.age++;
        return `تولدت مبارک! حالا ${this.age} ساله شدی.`;
    }
}

// ارث‌بری
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    
    study() {
        return `${this.name} در حال مطالعه است.`;
    }
}

// ایجاد نمونه‌ها
const person1 = new Person("امین", 30);
const student1 = new Student("سارا", 22, "12345");

console.log(person1.greet());
console.log(student1.greet());
console.log(student1.study());
console.log(person1.haveBirthday());
