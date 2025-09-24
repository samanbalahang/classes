// mapSimple2.js
// ساده‌ترین روش
const items = ['آیتم ۱', 'آیتم ۲', 'آیتم ۳'];
const html = items.map(item => `<li>${item}</li>`).join('');

// یا برای عناصر واقعی
const listElements = items.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
});
let app = document.getElementById("app");
app.innerHTML = html;
listElements.forEach(li => app.appendChild(li));