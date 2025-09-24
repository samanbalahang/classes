const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false }, 
  { id: 3, name: 'Charlie', active: true }
];
const sendLogToServer = (userId)=>{
    console.log(`this user id is ${userId}`);
}
// ابتدا عملیات جانبی را انجام دهید (اگر لازم است)
users.forEach(user => {
  console.log(`Checking user: ${user.name}`); // ✅ مناسب برای side effects
  sendLogToServer(user.id); // ✅ در جای مناسب
});

// سپس فیلتر کردن را انجام دهید
const activeUsers = users.filter(user => user.active); // ✅ فقط فیلتر کردن
console.log(activeUsers);
// [{ id: 1, name: 'Alice', active: true }, { id: 3, name: 'Charlie', active: true }]
