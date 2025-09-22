// mapCaching.js
class DataCache {
  constructor(maxSize = 100) {
    this.cache = new Map();
    this.maxSize = maxSize;
  }

  set(key, value) {
    if (this.cache.size >= this.maxSize) {
      // حذف قدیمی‌ترین آیتم (اولین آیتم)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      // بروزرسانی به عنوان جدیدترین آیتم
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return null;
  }

  clear() {
    this.cache.clear();
  }
}
let micatch = new DataCache(3);
// افزودن آیتم‌ها به کش
micatch.set('user-1', { id: 1, name: 'Alice', age: 30 });
micatch.set('user-2', { id: 2, name: 'Bob', age: 25 });
micatch.set('user-3', { id: 3, name: 'Charlie', age: 35 });
micatch.set('user-4', { id: 4, name: 'merile', age: 65 });
const user1 = micatch.get('user-1');
console.log(user1); // null چون گزینه چهارم جایگزین شده کش ما سه تایی است.
const user2 = micatch.get('user-2');
console.log(user2); 
const user3 = micatch.get('user-3');
console.log(user3); 
const user4 = micatch.get('user-4');
console.log(user4); //{id: 4, name: 'merile', age: 65}
const user5 = micatch.get('user-5');
console.log(user5); // null (چون وجود ندارد)