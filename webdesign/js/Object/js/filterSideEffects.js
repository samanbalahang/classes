const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true }
];
// استفاده نادرست: انجام عملیات جانبی در filter
const activeUsers = users.filter(user => {
  console.log(`Checking user: ${user.name}`); //  side effect
  sendLogToServer(user.id); //  side effect خطرناک
  return user.active;
});
function sendLogToServer(userId) {
  // شبیه‌سازی ارسال به سرور
  console.log(`Logging user ${userId} to server...`);
}
// خروجی:
// Checking user: Alice
// Logging user 1 to server...
// Checking user: Bob  
// Logging user 2 to server...
// Checking user: Charlie
// Logging user 3 to server...
console.log(activeUsers);
// [{ id: 1, name: 'Alice', active: true }, { id: 3, name: 'Charlie', active: true }]
