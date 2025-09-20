// برنامه‌نویسی شیءگرا - استفاده از کلاس‌ها و اشیا

// تعریف کلاس
//Object-Oriented Programming
/*----------------------------
|
|       bject-Oriented Programming
|   
-----------------------------*/
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
    
//     // متد
//     greet() {
//         return `سلام، من ${this.name} هستم و ${this.age} سال دارم.`;
//     }
    
//     // متد دیگر
//     haveBirthday() {
//         this.age++;
//         return `تولدت مبارک! حالا ${this.age} ساله شدی.`;
//     }
// }

// // ارث‌بری
// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }
    
//     study() {
//         return `${this.name} در حال مطالعه است.`;
//     }
// }

// // ایجاد نمونه‌ها
// const person1 = new Person("امین", 30);
// const student1 = new Student("سارا", 22, "12345");

// console.log(person1.greet());
// console.log(student1.greet());
// console.log(student1.study());
// console.log(person1.haveBirthday());








/*------------------------------------------------------
|
|       برنامه‌نویسی تابعی (Functional Programming)
|
-------------------------------------------------------*/
// برنامه‌نویسی تابعی - استفاده از توابع خالص و توابع مرتبه بالا

// توابع خالص (همان ورودی → همیشه همان خروجی)
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;

// // تابعی که تابع برمی‌گرداند (تابع ساز)
// const createMultiplier = (factor) => (number) => number * factor;

// // توابع مرتبه بالا (Higher-Order Functions)
// const numbers = [1, 2, 3, 4, 5];

// // map - تبدیل آرایه
// const doubled = numbers.map(n => n * 2);

// // filter - فیلتر کردن آرایه
// const evens = numbers.filter(n => n % 2 === 0);

// // reduce - کاهش آرایه به یک مقدار
// const sum = numbers.reduce((acc, n) => acc + n, 0);

// // ترکیب توابع
// const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

// const double = x => x * 2;
// const increment = x => x + 1;
// const square = x => x * x;

// const transform = pipe(double, increment, square);
// const result = transform(5); // (5*2 + 1)^2 = 121

// console.log("اعداد دوبرابر", doubled);
// console.log("اعداد زوج", evens);
// console.log("مجموع اعداد", sum);
// console.log("نتیجه ترکیب توابع", result);









/*------------------------------------------------------
|
|                    ترکیب پارادایم‌ها    
|
-------------------------------------------------------*/
// ترکیب پارادایم‌های مختلف

// رویه‌ای + تابعی
// function processUserData(users, filterFunc, mapFunc) {
//     return users
//         .filter(filterFunc)
//         .map(mapFunc);
// }

// // شیءگرا + تابعی
// class Calculator {
//     constructor() {
//         this.operations = [];
//     }
    
//     // ذخیره عملیات به صورت تابع
//     addOperation(name, operationFunc) {
//         this.operations.push({ name, func operationFunc });
//     }
    
//     executeOperation(name, ...args) {
//         const operation = this.operations.find(op => op.name === name);
//         if (operation) {
//             return operation.func(...args);
//         }
//         throw new Error(`Operation ${name} not found`);
//     }
// }

// // استفاده از ترکیب پارادایم‌ها
// const users = [
//     { name "Ali", age 25, active true },
//     { name "Sara", age 30, active false },
//     { name "Reza", age 22, active true }
// ];

// const activeUsers = processUserData(
//     users,
//     user => user.active,  // تابع فیلتر (تابعی)  (user) => {return user.active;}
//     user => user.name      // تابع تبدیل (تابعی) (user) => {return user.name;}
// ); // call processUserData() function with specefic arugomans

// console.log("کاربران فعال", activeUsers);

// // ایجاد ماشین حساب و اضافه کردن عملیات
// const calc = new Calculator();  // شیءگرا
// calc.addOperation("add", (a, b) => a + b);  // تابعی
// calc.addOperation("multiply", (a, b) => a * b);

// console.log("جمع", calc.executeOperation("add", 5, 3));
// console.log("ضرب", calc.executeOperation("multiply", 5, 3));









/*------------------------------------------------------
|
|                   مثال ساده
|
-------------------------------------------------------*/
// // نمایش پیام در کنسول
// console.log("Hello, World!");

// // تعریف متغیر
// let name = "John";
// const age = 25;

// // تابع ساده
// function greet(person) {
//     return "Hello, " + person + "!";
// }

// // استفاده از تابع
// console.log(greet(name));







/*------------------------------------------------------
|
|                 Rest Parameters
|
-------------------------------------------------------*/
// جمع کردن تمام آرگومان‌ها
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); // 15

// // ترکیب با پارامترهای عادی
// function greet(greeting, ...names) {
//   return names.map(name => `${greeting}, ${name}!`);
// }

// console.log(greet('Hello', 'Alice', 'Bob', 'Charlie'));
// // ['Hello, Alice!', 'Hello, Bob!', 'Hello, Charlie!']

// // در arrow functions
// const multiply = (multiplier, ...numbers) => {
//   return numbers.map(n => n * multiplier);
// };

// console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]


















/*------------------------------------------------------
|
|                 Spread Operator
|
-------------------------------------------------------*/
// ترکیب آرایه‌ها
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined); // [1, 2, 3, 4, 5, 6]

// // کپی آرایه
// const original = [1, 2, 3];
// const copy = [...original];
// console.log(copy); // [1, 2, 3]

// // استفاده در فراخوانی تابع
// const numbers = [1, 2, 3, 4, 5];
// console.log(Math.max(...numbers)); // 5

/*------------------------------------------------------
|
|                 Spread Operator با آبچکت ها
|
-------------------------------------------------------*/
// // ترکیب آبجکت‌ها
// const obj1 = { a 1, b 2 };
// const obj2 = { c 3, d 4 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged); // { a 1, b 2, c 3, d 4 }

// // کپی آبجکت
// const originalObj = { x 10, y 20 };
// const copyObj = { ...originalObj };
// console.log(copyObj); // { x 10, y 20 }

// // overwrite properties
// const base = { a 1, b 2, c 3 };
// const updated = { ...base, b 20, d 4 };
// console.log(updated); // { a 1, b 20, c 3, d 4 }


/*------------------------------------------------------
|
|                 Spread Operator مثال‌های ترکیبی
|
-------------------------------------------------------*/
// // ترکیب Rest و Spread
// function processData(first, second, ...rest) {
//   console.log(`First ${first}`);
//   console.log(`Second ${second}`);
//   console.log(`Rest ${rest.join(', ')}`);
  
//   // استفاده از Spread برای پردازش بیشتر
//   const allData = [first, second, ...rest];
//   return allData.map(item => item * 2);
// }

// const result = processData(1, 2, 3, 4, 5);
// console.log(result); // [2, 4, 6, 8, 10]

// // در Destructuring
// const [first, ...others] = [1, 2, 3, 4, 5];
// console.log(first); // 1
// console.log(others); // [2, 3, 4, 5]

// const { a, ...rest } = { a 1, b 2, c 3, d 4 };
// console.log(a); // 1
// console.log(rest); // { b 2, c 3, d 4 }


/*------------------------------------------------------
|
|          Rest Parameters, Spread Operator کاربردهای پیشرفته
|
-------------------------------------------------------*/
// // کلون عمیق ساده (فقط برای آبجکت‌های ساده)
// const original = { a 1, b { c 2 } };
// const clone = { ...original, b { ...original.b } };
// const clone2 = { ...original};
// console.log("clone",clone);
// console.log("clone2",clone2);
// original.b.c = 999;
// console.log("clone",clone); // کلون تغییر نکرده
// console.log("clone2",clone2);// کلون تغییر کرده است.

// // ادغام آبجکت‌ها با ویژگی‌های تکراری
// const defaults = { theme 'light', fontSize 16 };
// const userPreferences = { theme 'dark' };
// const finalConfig = { ...defaults, ...userPreferences };
// console.log(finalConfig); // { theme 'dark', fontSize 16 }

// // ایجاد آرایه بدون مقادیر تکراری
// const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const unique = [...new Set(withDuplicates)];
// console.log(unique); // [1, 2, 3, 4, 5]











/*------------------------------------------------------
|
|          reduce جمع کردن اعداد آرایه
|
-------------------------------------------------------*/
// const numbers = [1, 2, 3, 4, 5];

// // بدون مقدار اولیه
// const sum = numbers.reduce((acc, curr) => acc + curr);
// console.log(sum); // 15

// // با مقدار اولیه
// const sumWithInitial = numbers.reduce((acc, curr) => acc + curr, 10);
// console.log(sumWithInitial); // 25

/*------------------------------------------------------
|
|          reduce 	محاسبه حاصل ضرب
|
-------------------------------------------------------*/
// const numbers = [2, 3, 4];

// // const product = numbers.reduce((acc, curr) => acc * curr, 1);
// const product = numbers.reduce((acc, curr) => acc * curr);
// // const product = numbers.reduce((acc, curr) =>{
// //     console.log("acc " ,acc);
// //     console.log("curr ",curr);
// //     console.log("return ",acc * curr);
// //     return acc * curr
// // });

// console.log(product); // 24

/*------------------------------------------------------
|
|          reduce 	پیدا کردن بیشترین مقدار 
|
-------------------------------------------------------*/
// const numbers = [12, 45, 7, 32, 89, 3];
// const max = numbers.reduce((acc, curr) => Math.max(acc, curr));
// console.log(max); // 89

/*------------------------------------------------------
|
|          reduce 	تبدیل آرایه به شیء
|
-------------------------------------------------------*/
// const fruits = ['apple', 'banana', 'orange'];
// const fruitObject = fruits.reduce((acc, curr, index) => {
//   acc[index] = curr;
//   return acc;
// }, {});

// console.log(fruitObject);
// // {0 "apple", 1 "banana", 2 "orange"}

/*------------------------------------------------------
|
|          reduce 	 شمارش تکرار عناصر
|
-------------------------------------------------------*/
// const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const wordCount = words.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});

// console.log(wordCount);
// // {apple 3, banana 2, orange 1}


/*------------------------------------------------------
|
|          reduce 	  مسطح کردن آرایه‌های تو در تو
|
-------------------------------------------------------*/
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flatArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
// console.log(flatArray); // [1, 2, 3, 4, 5, 6]


/*------------------------------------------------------
|
|          reduce 	 گروه‌بندی اشیا بر اساس ویژگی
|
-------------------------------------------------------*/
// const people = [
//   { name 'Alice', age 25 },
//   { name 'Bob', age 30 },
//   { name 'Charlie', age 25 },
//   { name 'David', age 30 }
// ];

// const groupedByAge = people.reduce((acc, curr) => {
//   const age = curr.age;
//   if (!acc[age]) {
//     acc[age] = [];
//   }
//   acc[age].push(curr);
//   return acc;
// }, {});

// console.log(groupedByAge);
// /*
// {
//   25 [{ name 'Alice', age 25 }, { name 'Charlie', age 25 }],
//   30 [{ name 'Bob', age 30 }, { name 'David', age 30 }]
// }
// */

/*------------------------------------------------------
|
|          reduce 	  محاسبه میانگین
|
-------------------------------------------------------*/
// const scores = [85, 90, 78, 92, 88];
// const average = scores.reduce((acc, curr, index, array) => {
//   acc += curr;
//   if (index === array.length - 1) {
//     return acc / array.length;
//   }
//   return acc;
// }, 0);

// console.log(average); // 86.6


/*------------------------------------------------------
|
|          reduce 	  حذف مقادیر تکراری
|
-------------------------------------------------------*/
// const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];
// const uniqueNumbers = numbers.reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

/*------------------------------------------------------
|
|          reduce 	 ترکیب چندین آرایه
|
-------------------------------------------------------*/
// const arrays = [[1, 2], [3, 4], [5, 6]];
// const combined = arrays.reduce((acc, curr) => [...acc, ...curr], []);
// console.log(combined); // [1, 2, 3, 4, 5, 6]

/*------------------------------------------------------
|
|          reduce تبدیل آرایه به رشته با فرمت خاص
|
-------------------------------------------------------*/
// const items = ['apple', 'banana', 'orange'];
// const sentence = items.reduce((acc, curr, index) => {
//   if (index === 0) {
//     return curr;
//   } else if (index === items.length - 1) {
//     return `${acc} and ${curr}`;
//   } else {
//     return `${acc}, ${curr}`;
//   }
// }, '');

// console.log(sentence); // "apple, banana and orange"










/*------------------------------------------------------
|
|          filter() فیلتر کردن اعداد زوج 
|
-------------------------------------------------------*/
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers); // خروجی [2, 4, 6, 8, 10]


/*------------------------------------------------------
|
|          filter() فیلتر کردن بر اساس طول رشته
|
-------------------------------------------------------*/
// const words = ['hello', 'world', 'javascript', 'filter', 'code', 'web'];
// const longWords = words.filter(word => word.length > 5);
// console.log(longWords); // خروجی ['javascript', 'filter']


/*------------------------------------------------------
|
|          filter() فیلتر کردن اشیاء در آرایه
|
-------------------------------------------------------*/
// const products = [
//   { name 'Laptop', price 1000, category 'electronics' },
//   { name 'Book', price 15, category 'education' },
//   { name 'Phone', price 500, category 'electronics' },
//   { name 'Pen', price 2, category 'office' },
//   { name 'eboard', price 400, category 'education' }
// ];
// const expensiveProducts = products.filter(product => product.price > 100);
// console.log(expensiveProducts); 
// // خروجی [{ name 'Laptop', price 1000, category 'electronics' }, 
// //         { name 'Phone', price 500, category 'electronics' },
// //         {name 'eboard', price 400, category 'education'}]
// const electronicProducts = products.filter(product => product.category === 'education');
// console.log(electronicProducts);
// // خروجی [{name 'Book', price 15, category 'education'},
// //         {name 'eboard', price 400, category 'education'}]




/*------------------------------------------------------
|
|          filter() استفاده از index در فیلتر کردن
|
-------------------------------------------------------*/
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // انتخاب عناصر با ایندکس زوج
// // const evenIndexNumbers = numbers.filter((number, index) => index % 2 === 0);
// const evenIndexNumbers = numbers.filter((number, index) => number % 2 === 0);
// console.log(evenIndexNumbers); // خروجی [0, 2, 4, 6, 8]


/*------------------------------------------------------
|
|          filter() حذف مقادیر falsy از آرایه
|
-------------------------------------------------------*/
// const mixedValues = [0, 1, false, 2, '', 3, null, undefined, 4, NaN];
// const truthyValues = mixedValues.filter(value => value);
// // یا به صورت explicit mixedValues.filter(value => Boolean(value))
// console.log(truthyValues); // خروجی [1, 2, 3, 4]


/*------------------------------------------------------
|
|          filter() مثال مقایسه‌ای
|
-------------------------------------------------------*/
// const numbers = [1, 2, 3, 4, 5];
// // filter فقط اعداد زوج
// const filtered = numbers.filter(n => n % 2 === 0); // [2, 4]
// console.log("filtered to show even numbers" , filtered);
// // map تبدیل هر عدد به مربع آن
// const mapped = numbers.map(n => n * n); // [1, 4, 9, 16, 25]
// console.log("map to show square numbers" , mapped);
// // find یافتن اولین عدد بزرگتر از 3
// const found = numbers.find(n => n > 3); // 4
// console.log("find to show first number biggerthan 3" , found);
// // reduce جمع همه اعداد
// const reduced = numbers.reduce((sum, n) => sum + n, 0); // 15
// console.log("reduced to show sum of numbers" , reduced);


/*------------------------------------------------------
|
|          filter() side effects
|
-------------------------------------------------------*/
// const users = [
//   { id 1, name 'Alice', active true },
//   { id 2, name 'Bob', active false },
//   { id 3, name 'Charlie', active true }
// ];
// // استفاده نادرست انجام عملیات جانبی در filter
// const activeUsers = users.filter(user => {
//   console.log(`Checking user ${user.name}`); // ❌ side effect
//   sendLogToServer(user.id); // ❌ side effect خطرناک
//   return user.active;
// });
// function sendLogToServer(userId) {
//   // شبیه‌سازی ارسال به سرور
//   console.log(`Logging user ${userId} to server...`);
// }
// // خروجی
// // Checking user Alice
// // Logging user 1 to server...
// // Checking user Bob  
// // Logging user 2 to server...
// // Checking user Charlie
// // Logging user 3 to server...
// console.log(activeUsers);
// // [{ id 1, name 'Alice', active true }, { id 3, name 'Charlie', active true }]


/*------------------------------------------------------
|
|          filter() concerns
|
-------------------------------------------------------*/
// const users = [
//   { id 1, name 'Alice', active true },
//   { id 2, name 'Bob', active false }, 
//   { id 3, name 'Charlie', active true }
// ];

// // ابتدا عملیات جانبی را انجام دهید (اگر لازم است)
// users.forEach(user => {
//   console.log(`Checking user ${user.name}`); // ✅ مناسب برای side effects
//   sendLogToServer(user.id); // ✅ در جای مناسب
// });


// function sendLogToServer(id){
//  console.log(`Logging user ${id} to server...`);
// }

// // سپس فیلتر کردن را انجام دهید
// const activeUsers = users.filter(user => user.active); // ✅ فقط فیلتر کردن

// console.log(activeUsers);
// // [{ id 1, name 'Alice', active true }, { id 3, name 'Charlie', active true }]

/*------------------------------------------------------
|
|          filter() اجرای مضاعف عملیات
|
-------------------------------------------------------*/
// const numbers = [1, 2, 3, 4, 5];
// let count = 0;

// // ❌ خطرناک ممکن است چندین بار اجرا شود
// const evenNumbers = numbers.filter(num => {
//   count++; // side effect
//   console.log(`Processing number ${num}`);
//   return num % 2 === 0;
// });

// console.log(`Total operations ${count}`); // 5 - اما ممکن است غیرمنتظره باشد


/*------------------------------------------------------
|
|          filter() در زنجیره متدها
|
-------------------------------------------------------*/
// const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,167,168,169,170,171,172,173,174,175,176,177,177,178,179,180,181,182,183,184,185,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,1416,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,1438,1439,1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,1450,1451,1452,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1467,1468,1469,1470,1471,1472,1473,1474,1475,1476,1477,1478,1479,1480,1481,1482,1483,1484,1485,1486,1487,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1515,1516,1517,1518,1519,1520,1521,1522,1523,1524,1525,1526,1527,1528,1529,1530,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540,1541,1542,1543,1544,1545,1546,1547,1548,1549,1550,1551,1552,1553,1554,1555,1556,1557,1558,1559,1560,1561,1562,1563,1564,1565,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1625,1626,1627,1628,1629,1630,1631,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,1642,1643,1644,1645,1646,1647,1648,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1750,1751,1752,1753,1754,1755,1756,1757,1758,1759,1760,1761,1762,1763,1764,1765,1766,1767,1768,1769,1770,1771,1772,1773,1774,1775,1776,1777,1778,1779,1780,1781,1782,1783,1784,1785,1786,1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804,1805,1806,1807,1808,1809,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1840,1841,1842,1843,1844,1845,1846,1847,1848,1849,1850,1851,1852,1853,1854,1855,1856,1857,1858,1859,1860,1861,1862,1863,1864,1865,1866,1867,1868,1869,1870,1871,1872,1873,1874,1875,1876,1877,1878,1879,1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999];
// // ❌ عملکرد ضعیف
// const result = data
//   .filter(item => {
//     logToAnalytics(item); // side effect سنگین
//     return item.value > 10;
//   })
//   .map(item => transformItem(item)) // ممکن است چندین بار صدا زده شود
//   .slice(0, 10);


// function logToAnalytics(item){
//     console.log(item);
// }


/*------------------------------------------------------
|
|          filter() مشکلات در دیباگ کردن
|
-------------------------------------------------------*/
// const sourceData = [
//   { id: 1, name: 'Alice', isValid: true },
//   { id: 2, name: 'Bob', isValid: false }, 
//   { id: 3, name: 'Charlie', isValid: true }
// ];
// // ❌ تشخیص منبع side effect سخت می‌شود
// const processedData = sourceData.filter(item => {
//   updateCache(item); // side effect پنهان
//   validateItem(item); // side effect دیگر
//   return item.isValid;
// });
// function updateCache(item){
//     console.log(item);
// }
// function validateItem(item){
//     console.log(item);
// }
// console.log(processedData);






/*------------------------------------------------------
|
|          Map() 
|
-------------------------------------------------------*/
// // ایجاد یک Map جدید
// const myMap = new Map();

// // یا مقداردهی اولیه با آرایه‌ای از جفت‌های [key, value]
// const initializedMap = new Map([
//   ['name', 'Alice'],
//   [1, 'number one'],
//   [true, 'boolean true']
// ]);
// console.log(initializedMap);
// /*------------------------------------------------------
// |
// |          get() 
// |
// -------------------------------------------------------*/
// // دسترسی به مقدار 'name'
// const nameValue = initializedMap.get('name');
// console.log(nameValue); // خروجی: 'Alice'

// // دسترسی به سایر مقادیر
// const numberValue = initializedMap.get(1);
// console.log(numberValue); // خروجی: 'number one'

// const booleanValue = initializedMap.get(true);
// console.log(booleanValue); // خروجی: 'boolean true'
// /*------------------------------------------------------
// |
// |          get() 1.	بررسی وجود کلید قبل از دسترسی
// |
// -------------------------------------------------------*/
// if (initializedMap.has('name')) {
//     const name = initializedMap.get('name');
//     console.log('Name found:', name); // خروجی: 'Name found: Alice'
// } else {
//     console.log('Key not found');
// }
// /*------------------------------------------------------
// |
// |          get() Iteration
// |
// -------------------------------------------------------*/
// // روش ۱: استفاده از for...of
// for (const [key, value] of initializedMap) {
//     console.log(key, ':', value);
// }
// // خروجی:
// // name : Alice
// // 1 : number one
// // true : boolean true

// // روش ۲: استفاده از forEach
// initializedMap.forEach((value, key) => {
//     console.log(`${key} → ${value}`);
// });
// /*------------------------------------------------------
// |
// |          get() دریافت همه کلیدها و مقادیر
// |
// -------------------------------------------------------*/
// // دریافت همه کلیدها
// const keys = Array.from(initializedMap.keys());
// console.log(keys); // خروجی: ['name', 1, true]

// // دریافت همه مقادیر
// const values = Array.from(initializedMap.values());
// console.log(values); // خروجی: ['Alice', 'number one', 'boolean true']

// // دریافت همه entries به صورت آرایه
// const entries = Array.from(initializedMap.entries());
// console.log(entries);
// // خروجی: [['name', 'Alice'], [1, 'number one'], [true, 'boolean true']]
// /*------------------------------------------------------
// |
// |          get() مدیریت خطا برای کلیدهای ناموجود
// |
// -------------------------------------------------------*/
// function safeGet(map, key, defaultValue = null) {
//     return map.has(key) ? map.get(key) : defaultValue;
// }

// const name = safeGet(initializedMap, 'name', 'Unknown');
// const age = safeGet(initializedMap, 'age', 25); // کلید وجود ندارد

// console.log(name); // 'Alice'
// console.log(age); // 25 (مقدار پیش‌فرض)
// /*------------------------------------------------------
// |
// |          get() استفاده در تابع
// |
// -------------------------------------------------------*/
// function getUserInfo(map) {
//     return {
//         name: map.get('name') || 'N/A',
//         id: map.get('id') || 0,
//         isActive: map.get('isActive') || false
//     };
// }

// const userInfo = getUserInfo(initializedMap);
// console.log(userInfo);
// // خروجی: { name: 'Alice', id: 0, isActive: false }
// /*------------------------------------------------------
// |
// |          map() Map به Object
// |
// -------------------------------------------------------*/
// function mapToObject(map) {
//     const obj = {};
//     for (const [key, value] of map) {
//         obj[key] = value;
//     }
//     return obj;
// }
// const mapObject = mapToObject(initializedMap);
// console.log(mapObject.name); // 'Alice'
// console.log(mapObject[1]); // 'number one'
// console.log(mapObject[true]); // 'boolean true'


/*------------------------------------------------------
|
|          map()  case-sensitive
|
-------------------------------------------------------*/
// const myMap = new Map([['NAME', 'Bob']]);
// console.log(myMap.get('name')); // undefined
// console.log(myMap.get('NAME')); // 'Bob'
// const myMap = new Map(['NAME', 'Bob']);
// console.log(myMap);

// console.log(myMap.get('name')); // undefined
// console.log(myMap.get('NAME')); // 'Bob'


/*------------------------------------------------------
|
|          map()  متدهای اصلی:
|
-------------------------------------------------------*/
// const map = new Map();

// // 1. set() -
// map.set('name', 'Alice');
// map.set('age', 30);
// map.set('name', 'Bob'); // Update مقدار

// // 2. get() - دریافت مقدار
// console.log(map.get('name')); // 'Bob'
// console.log(map.get('age')); // 30

// // 3. has() - بررسی وجود کلید
// console.log(map.has('name')); // true
// console.log(map.has('city')); // false

// // 4. delete() - حذف یک کلید
// map.delete('age');
// console.log(map.has('age')); // false

// // 5. clear() - حذف همه عناصر
// map.clear();
// console.log(map.size); // 0

// // 6. size - تعداد عناصر
// console.log(map.size); // 0+


/*------------------------------------------------------
|
|          map()  Iteration
|
-------------------------------------------------------*/
// const userMap = new Map([
//   ['name', 'Alice'],
//   ['age', 30],
//   ['city', 'New York']
// ]);

// // 1. keys() - کلیدها
// for (const key of userMap.keys()) {
//   console.log(key); // 'name', 'age', 'city'
// }

// // 2. values() - مقادیر
// for (const value of userMap.values()) {
//   console.log(value); // 'Alice', 30, 'New York'
// }

// // 3. entries() - جفت‌های [key, value] (پیش‌فرض)
// for (const [key, value] of userMap.entries()) {
//   console.log(key, value);
// }

// // 4. forEach() - مانند آرایه
// userMap.forEach((value, key) => {
//   console.log(key, value);
// });


/*------------------------------------------------------
|
|          map()  مدیریت کاربران
|
-------------------------------------------------------*/
// class UserManager {
//   constructor() {
//     this.users = new Map();
//   }

//   addUser(id, userData) {
//     this.users.set(id, { ...userData, createdAt: new Date() });
//   }

//   getUser(id) {
//     return this.users.get(id);
//   }

//   updateUser(id, updates) {
//     if (this.users.has(id)) {
//       const user = this.users.get(id);
//       this.users.set(id, { ...user, ...updates });
//     }
//   }

//   deleteUser(id) {
//     this.users.delete(id);
//   }

//   getAllUsers() {
//     return Array.from(this.users.entries());
//   }
// }

// // استفاده
// const manager = new UserManager();
// manager.addUser(1, { name: 'Alice', email: 'alice@example.com' });
// manager.addUser(2, { name: 'Bob', email: 'bob@example.com' });

// console.log(manager.getUser(1));



/*------------------------------------------------------
|
|          map()  Caching
|
-------------------------------------------------------*/
// class DataCache {
//   constructor(maxSize = 100) {
//     this.cache = new Map();
//     this.maxSize = maxSize;
//   }

//   set(key, value) {
//     if (this.cache.size >= this.maxSize) {
//       // حذف قدیمی‌ترین آیتم (اولین آیتم)
//       const firstKey = this.cache.keys().next().value;
//       this.cache.delete(firstKey);
//     }
//     this.cache.set(key, value);
//   }

//   get(key) {
//     if (this.cache.has(key)) {
//       const value = this.cache.get(key);
//       // بروزرسانی به عنوان جدیدترین آیتم
//       this.cache.delete(key);
//       this.cache.set(key, value);
//       return value;
//     }
//     return null;
//   }

//   clear() {
//     this.cache.clear();
//   }
// }

// let micatch = new DataCache(3);
// // افزودن آیتم‌ها به کش
// micatch.set('user-1', { id: 1, name: 'Alice', age: 30 });
// micatch.set('user-2', { id: 2, name: 'Bob', age: 25 });
// micatch.set('user-3', { id: 3, name: 'Charlie', age: 35 });
// micatch.set('user-4', { id: 4, name: 'merile', age: 65 });
// const user1 = micatch.get('user-1');
// console.log(user1); // {id: 2, name: 'Bob', age: 25}
// const user2 = micatch.get('user-2');
// console.log(user2); 
// const user3 = micatch.get('user-3');
// console.log(user3); 
// const user4 = micatch.get('user-4');
// console.log(user4); //{id: 4, name: 'merile', age: 65}
// const user5 = micatch.get('user-5');
// console.log(user5); // null (چون وجود ندارد)


/*------------------------------------------------------
|
|          map()  شمارش تکرار عناصر
|
-------------------------------------------------------*/
// function countOccurrences(array) {
//   const countMap = new Map();
  
//   for (const item of array) {
//     const currentCount = countMap.get(item) || 0;
//     countMap.set(item, currentCount + 1);
//   }
  
//   return countMap;
// }

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const fruitCounts = countOccurrences(fruits);

// console.log(fruitCounts);
// // Map(3) { 'apple' → 3, 'banana' → 2, 'orange' → 1 }



/*------------------------------------------------------
|
|          map() تبدیل بین ساختارها
|
-------------------------------------------------------*/
// تبدیل Object به Map
// const obj = { a: 1, b: 2, c: 3 };
// const mapFromObj = new Map(Object.entries(obj));

// // تبدیل Map به Object
// const objFromMap = Object.fromEntries(mapFromObj);
// console.log(objFromMap);


// // تبدیل Map به Array
// const arrayFromMap = Array.from(mapFromObj);
// console.log(arrayFromMap);
// // یا
// const arrayFromMap2 = [...mapFromObj];
// console.log(arrayFromMap2);

// // تبدیل Array به Map
// const array = [['a', 1], ['b', 2], ['c', 3]];
// const mapFromArray = new Map(array);
// console.log(mapFromArray);


/*------------------------------------------------------
|
|          map() Object
|
-------------------------------------------------------*/
// const user1 = { id: 1, name: 'Alice' };
// const user2 = { id: 2, name: 'Bob' };

// const userSettings = new Map();

// userSettings.set(user1, { theme: 'dark', language: 'en' });
// userSettings.set(user2, { theme: 'light', language: 'fa' });

// console.log(userSettings.get(user1)); // { theme: 'dark', language: 'en' }


/*------------------------------------------------------
|
|          map() NaN
|
-------------------------------------------------------*/
// const map = new Map();
// map.set(NaN, 'This is NaN');

// console.log(map.get(NaN)); // 'This is NaN'
// console.log(map.get(Number('abc'))); // 'This is NaN' - چون NaN === NaN


/*------------------------------------------------------
|
|          map() زنجیره‌ای   
|
-------------------------------------------------------*/
// const map = new Map();

// // زنجیره‌ای کردن
// map.set('a', 1)
//    .set('b', 2)
//    .set('c', 3);

// console.log(map); // Map(3) { 'a' → 1, 'b' → 2, 'c' → 3 }



/*------------------------------------------------------
|
|          map() توابع   
|
-------------------------------------------------------*/
// function createCounter() {
//   const counts = new Map();
  
//   return {
//     increment(key) {
//       counts.set(key, (counts.get(key) || 0) + 1);
//     },
//     getCount(key) {
//       return counts.get(key) || 0;
//     },
//     getAllCounts() {
//       return Array.from(counts.entries());
//     }
//   };
// }

// const counter = createCounter();
// counter.increment('apple');
// counter.increment('banana');
// counter.increment('apple');

// console.log(counter.getCount('apple')); // 2
// console.log(counter.getAllCounts()); // [['apple', 2], ['banana', 1]]


/*------------------------------------------------------
|
|          map() JSON    
|
-------------------------------------------------------*/
// تبدیل Map به JSON و برعکس
// const map = new Map([['name', 'Alice'], ['age', 30]]);

// // به JSON
// const json = JSON.stringify(Array.from(map.entries()));
// console.log(json);


// // از JSON
// const reconstructedMap = new Map(JSON.parse(json));
// console.log(reconstructedMap);


/*------------------------------------------------------
|
|          map() 	مپ کردن آرایه   
|
-------------------------------------------------------*/
// const array = [1, 4, 9, 16];

// // Pass a function to map
// const mapped = array.map((x) => x * 2);

// console.log(mapped);
// // Expected output: Array [2, 8, 18, 32]


/*------------------------------------------------------
|
|          map() 	مربع عناصر
|
-------------------------------------------------------*/
// const numbers = [1, 4, 9];
// const roots = numbers.map((num) => Math.sqrt(num));
// console.log(roots);
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]



/*------------------------------------------------------
|
|          map() simple list to li    
|
-------------------------------------------------------*/
// const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

// // روش 1: استفاده از map و join
// // const htmlList = fruits.map(fruit => `<li>${fruit}</li>`).join('\n');
// const htmlList = fruits.map(fruit => `<li>${fruit}</li>`);

// console.log(htmlList);
// // خروجی:
// // <li>سیب</li>
// // <li>موز</li>
// // <li>پرتقال</li>
// // <li>انگور</li>

// // قرار دادن در ul
// const fullHtml = `<ul>\n${htmlList}\n</ul>`;
// console.log(fullHtml);
// app.innerHTML = fullHtml;
/*------------------------------------------------------
|
|          map() list to li    DOM 
|
-------------------------------------------------------*/
// const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

// // روش 2: ایجاد عناصر DOM واقعی
// const listItems = fruits.map(fruit => {
//     const li = document.createElement('li');
//     li.textContent = fruit;
//     li.className = 'fruit-item';
//     return li;
// });

// // اضافه کردن به DOM
// const ulElement = document.createElement('ul');
// ulElement.append(...listItems);

// document.body.appendChild(ulElement);
/*------------------------------------------------------
|
|          map() list to li template literals 
|
-------------------------------------------------------*/
// const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

// // روش 3: با قالب‌بزی پیشرفته
// const htmlList = fruits.map(fruit => `
//     <li class="fruit-item" data-fruit="${fruit}">
//         <span>${fruit.toUpperCase()}</span>
//     </li>
// `).join('');

// const fullHtml = `
//     <ul class="fruits-list">
//         ${htmlList}
//     </ul>
// `;

// console.log(fullHtml);
// app.innerHTML = fullHtml;
/*------------------------------------------------------
|
|          map() list to li لیست کاربران 
|
-------------------------------------------------------*/
// const users = ['علی محمدی', 'فاطمه احمدی', 'محمد رضایی', 'زهرا حسینی'];

// const userList = users.map(user => `
//     <li class="user-item">
//         <i class="icon-user"></i>
//         <span>${user}</span>
//     </li>
// `).join('');

// const usersHtml = `
//     <div class="users-container">
//         <h3>لیست کاربران</h3>
//         <ul class="users-list">
//             ${userList}
//         </ul>
//     </div>
// `;

// // قرار دادن در DOM
// document.getElementById('app').innerHTML = usersHtml;
/*------------------------------------------------------
|
|          map() list to li لیست با شماره
|
-------------------------------------------------------*/
// const tasks = ['تمرین جاوااسکریپت', 'پروژه وب', 'مطالعه ریاضی', 'ورزش'];

// const numberedList = tasks.map((task, index) => `
//     <li class="task-item">
//         <span class="task-number">${index + 1}.</span>
//         <span class="task-text">${task}</span>
//         <button onclick="completeTask(${index})">انجام شد</button>
//     </li>
// `).join('');

// const tasksHtml = `
//     <div class="tasks-wrapper">
//         <h2>لیست کارهای روزانه</h2>
//         <ul class="tasks-list">
//             ${numberedList}
//         </ul>
//     </div>
// `;
// app.innerHTML = tasksHtml;
// function completeTask(){
//     console.log("done");
// }
/*------------------------------------------------------
|
|          map() list to li icons
|
-------------------------------------------------------*/
// const features = [
//     'پشتیبانی 24/7',
//     'امنیت بالا', 
//     'رابط کاربری آسان',
//     'پشتیبانی از تمام دستگاه‌ها'
// ];

// const icons = ['🕒', '🔒', '💻', '📱'];

// const featureList = features.map((feature, index) => `
//     <li class="feature-item">
//         <span class="feature-icon">${icons[index]}</span>
//         <span class="feature-text">${feature}</span>
//     </li>
// `).join('');

// const featuresHtml = `
//     <section class="features">
//         <h2>ویژگی‌های محصول</h2>
//         <ul class="features-list">
//             ${featureList}
//         </ul>
//     </section>
// `;
// app.innerHTML = featuresHtml;
/*------------------------------------------------------
|
|          map() list to li DocumentFragment 
|
-------------------------------------------------------*/
// const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

// function createListItems(items) {
//     const fragment = document.createDocumentFragment();
    
//     items.map(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         li.className = 'fruit-item';
//         fragment.appendChild(li);
//         return li;
//     });
    
//     return fragment;
// }

// const ulElement = document.createElement('ul');
// ulElement.appendChild(createListItems(fruits));

// // فقط یک بار DOM را آپدیت می‌کنیم
// document.getElementById('app').appendChild(ulElement);

/*------------------------------------------------------
|
|          map() list to li innerHTML  
|
-------------------------------------------------------*/
// const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

// function renderList(items) {
//     const html = items.map(item => `<li>${item}</li>`).join('');
//     return `<ul>${html}</ul>`;
// }

// document.getElementById('app').innerHTML = renderList(fruits);
/*------------------------------------------------------
|
|          map() list to li تابع   
|
-------------------------------------------------------*/
// function arrayToHtmlList(items, options = {}) {
//     const {
//         listType = 'ul',
//         itemClass = '',
//         listClass = '',
//         transform = item => item
//     } = options;
    
//     const listItems = items.map(item => `
//         <li class="${itemClass}">${transform(item)}</li>
//     `).join('');
    
//     return `
//         <${listType} class="${listClass}">
//             ${listItems}
//         </${listType}>
//     `;
// }

// // استفاده
// const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

// const html = arrayToHtmlList(fruits, {
//     listType: 'ul',
//     listClass: 'fruits-list',
//     itemClass: 'fruit-item',
//     transform: fruit => `<strong>${fruit}</strong>`
// });

// app.innerHTML = html;

/*------------------------------------------------------
|
|          join() 
|
-------------------------------------------------------*/
// const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(""));
// // Expected output: "FireAirWater"

// console.log(elements.join("-"));
// // Expected output: "Fire-Air-Water



/*------------------------------------------------------
|
|          DocumentFragment() 
|
-------------------------------------------------------*/
// const element = document.getElementById("app"); // assuming ul exists
// const fragment = document.createDocumentFragment();
// const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

// browsers.forEach((browser) => {
//   const li = document.createElement("li");
//   li.textContent = browser;
//   fragment.appendChild(li);
// });
// const ul =  document.createElement("ul");
// ul.appendChild(fragment);
// element.appendChild(ul);








/*------------------------------------------------------
|
|          Destructuring Assignment
|
-------------------------------------------------------*/
// آرایه سنتی
// const numbers = [1, 2, 3];
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];

// // با Destructuring
// const [x, y, z] = [1, 2, 3];
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 3
/*------------------------------------------------------
|
|          Destructuring   مقداردهی پیشفرض
|
-------------------------------------------------------*/
// const [a = 10, b = 20, c = 30] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 30 (پیش‌فرض)
/*------------------------------------------------------
|
|          Destructuring   رد کردن عناصر
|
-------------------------------------------------------*/
// const [first, , third] = [1, 2, 3, 4];
// console.log(first); // 1
// console.log(third); // 3
/*------------------------------------------------------
|
|          Destructuring   جمع‌آوری باقی‌مانده‌ها
|
-------------------------------------------------------*/
// const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]
/*------------------------------------------------------
|
|          Destructuring   Swap
|
-------------------------------------------------------*/
// let a = 1;
// let b = 2;

// // روش سنتی
// let temp = a;
// a = b;
// b = temp;

// // با Destructuring
// [a, b] = [b, a];
// console.log(a); // 2
// console.log(b); // 1
/*------------------------------------------------------
|
|          Destructuring   Object 
|
-------------------------------------------------------*/
// const person = {
//     name: 'علی',
//     age: 30,
//     city: 'تهران'
// };

// // روش سنتی
// // const name = person.name;
// // const age = person.age;


// // با Destructuring
// const { name, age, city } = person;
// console.log(name); // 'علی'
// console.log(age); // 30
// console.log(city); // 'تهران'
/*------------------------------------------------------
|
|          Destructuring    نام‌گذاری مجدد متغیرها 
|
-------------------------------------------------------*/
// const person = {
//     firstName: 'فاطمه',
//     lastName: 'احمدی'
// };

// const { firstName: fname, lastName: lname } = person;
// console.log(fname); // 'فاطمه'
// console.log(lname); // 'احمدی'
/*------------------------------------------------------
|
|          Destructuring    مقادیر پیش‌فرض
|
-------------------------------------------------------*/
// const { name = 'ناشناس', age = 0, city = 'نامشخص' } = { name: 'محمد' };
// console.log(name); // 'محمد'
// console.log(age); // 0 (پیش‌فرض)
// console.log(city); // 'نامشخص' (پیش‌فرض)
/*------------------------------------------------------
|
|          Destructuring    نام‌گذاری مجدد و پیش‌فرض
|
-------------------------------------------------------*/
// const user = {
//     username: 'user123'
// };

// const { 
//     username: uname = 'مهمان', 
//     role: userRole = 'user' 
// } = user;

// console.log(uname); // 'user123'
// console.log(userRole); // 'user' (پیش‌فرض)
/*------------------------------------------------------
|
|          Destructuring    تو در تو
|
-------------------------------------------------------*/
// const company = {
//     name: 'فناوری اطلاعات',
//     address: {
//         city: 'مشهد',
//         street: 'آزادی',
//         zip: '12345'
//     }
// };

// const { 
//     name, 
//     address: { 
//         city, 
//         street: mainStreet, 
//         zip: postalCode = '00000' 
//     } 
// } = company;

// console.log(name); // 'فناوری اطلاعات'
// console.log(city); // 'مشهد'
// console.log(mainStreet); // 'آزادی'
// console.log(postalCode); // '12345'
/*------------------------------------------------------
|
|          Destructuring    تابع
|
-------------------------------------------------------*/
// // روش سنتی
// // function printPerson(person) {
// //     console.log(person.name, person.age);
// // }

// // با Destructuring
// function printPerson({ name, age, city = 'نامشخص' }) {
//     console.log(`${name} - ${age} سال - ${city}`);
// }

// printPerson({ name: 'علی', age: 30 }); // علی - 30 سال - نامشخص
/*------------------------------------------------------
|
|          Destructuring    API
|
-------------------------------------------------------*/
// // شبیه‌سازی پاسخ API
// const apiResponse = {
//     status: 'success',
//     data: {
//         users: [
//             { id: 1, name: 'User1' },
//             { id: 2, name: 'User2' }
//         ],
//         total: 2
//     }
// };

// // Destructuring برای دسترسی به داده‌ها
// const { 
//     status, 
//     data: { 
//         users, 
//         total 
//     } 
// } = apiResponse;

// console.log(status,users[0]["name"],total);
/*------------------------------------------------------
|
|          Destructuring   	پیکربندی 
|
-------------------------------------------------------*/
// const defaultConfig = {
//     theme: 'light',
//     language: 'fa',
//     notifications: true
// };

// function initApp(userConfig = {}) {
//     const {
//         theme = 'light',
//         language = 'fa',
//         notifications = true,
//         fontSize = 16
//     } = userConfig;

//     console.log(`پیکربندی: ${theme}, ${language}, ${fontSize}`);
// }

// initApp({ theme: 'dark', fontSize: 18 });
/*------------------------------------------------------
|
|          Destructuring   	آرایه‌های آبجکت‌ها 
|
-------------------------------------------------------*/
// const users = [
//     { name: 'علی', age: 30 },
//     { name: 'فاطمه', age: 25 },
//     { name: 'محمد', age: 35 }
// ];

// // Destructuring در map
// const names = users.map(({ name }) => name);
// console.log(names); // ['علی', 'فاطمه', 'محمد']

// // Destructuring در for-of
// for (const { name, age } of users) {
//     console.log(`${name}: ${age} سال`);
// }
/*------------------------------------------------------
|
|          Destructuring   	  آبجکت‌های پیچیده
|
-------------------------------------------------------*/
// const project = {
//     title: 'وبسایت شرکت',
//     team: [
//         { name: 'علی', role: 'developer' },
//         { name: 'فاطمه', role: 'designer' }
//     ],
//     deadline: '2024-12-31'
// };

// const {
//     title,
//     team: [firstMember, secondMember],
//     deadline: dueDate
// } = project;

// console.log(title); // 'وبسایت شرکت'
// console.log(firstMember); // { name: 'علی', role: 'developer' }
// console.log(dueDate); // '2024-12-31'
/*------------------------------------------------------
|
|          Destructuring   	  آرایه‌های کوتاه
|
-------------------------------------------------------*/
// const [a, b, c] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // undefined

// // با پیش‌فرض
// const [x, y, z = 0] = [1, 2];
// console.log(z); // 0


