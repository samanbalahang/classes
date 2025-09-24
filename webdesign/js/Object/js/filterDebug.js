const users = [
  { id: 1, name: 'Alice', premium: true },
  { id: 2, name: 'Bob', premium: false },
  { id: 3, name: 'Charlie', premium: true }
];
const premiumUsers = [];
const logs = [];
// انجام همزمان فیلتر و logging با کنترل کامل
for (const user of users) {
  console.log(`Processing user: ${user.name}`);
  logs.push(`Processed user ${user.id}`);
  if (user.premium) {
    premiumUsers.push(user);
  }
}
console.log(premiumUsers);
console.log(logs);
