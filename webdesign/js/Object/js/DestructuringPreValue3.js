const user = {
    username: 'user123'
};

const { 
    username: uname = 'مهمان', 
    role: userRole = 'user' 
} = user;

console.log(uname); // 'user123'
console.log(userRole); // 'user' (پیش‌فرض)
