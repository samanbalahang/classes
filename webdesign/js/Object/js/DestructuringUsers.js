
const userData = {
    personalInfo: {
        name: 'زهرا',
        family: 'رضایی',
        birthDate: '1995-05-15'
    },
    contact: {
        email: 'zahra@example.com',
        phone: '09123456789'
    }
};

// Destructuring برای استخراج اطلاعات
const {
    personalInfo: { name, family },
    contact: { email, phone }
} = userData;

console.log(`نام: ${name} ${family}`);
console.log(`تماس: ${email} - ${phone}`);
