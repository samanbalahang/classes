const products = [
  { name: 'Laptop', price: 1000, category: 'electronics' },
  { name: 'Book', price: 15, category: 'education' },
  { name: 'Phone', price: 500, category: 'electronics' },
  { name: 'Pen', price: 2, category: 'office' },
  { name: 'eboard', price: 400, category: 'education' }
];
const expensiveProducts = products.filter(product => product.price > 100);
console.log(expensiveProducts); 
// خروجی: [{ name: 'Laptop', price: 1000, category: 'electronics' }, 
//         { name: 'Phone', price: 500, category: 'electronics' },
//         {name: 'eboard', price: 400, category: 'education'}]
const electronicProducts = products.filter(product => product.category === 'education');
console.log(electronicProducts);
// خروجی: [{name: 'Book', price: 15, category: 'education'},
//         {name: 'eboard', price: 400, category: 'education'}]
