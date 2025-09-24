const sourceData = [
  { id: 1, name: 'Alice', isValid: true },
  { id: 2, name: 'Bob', isValid: false }, 
  { id: 3, name: 'Charlie', isValid: true }
];
//  تشخیص منبع side effect سخت می‌شود
const processedData = sourceData.filter(item => {
  updateCache(item); // side effect پنهان
  validateItem(item); // side effect دیگر
  return item.isValid;
});
function updateCache(item){
    console.log(item);
}
function validateItem(item){
    console.log(item);
}
console.log(processedData);
