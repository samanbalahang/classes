// شبیه‌سازی پاسخ API
const apiResponse = {
    status: 'success',
    data: {
        users: [
            { id: 1, name: 'User1' },
            { id: 2, name: 'User2' }
        ],
        total: 2
    }
};

// Destructuring برای دسترسی به داده‌ها
const { 
    status, 
    data: { 
        users, 
        total 
    } 
} = apiResponse;

console.log(status); // 'success'
console.log(users); // [{...}, {...}]
console.log(total); // 2
