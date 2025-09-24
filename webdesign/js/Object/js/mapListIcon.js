const features = [
    'پشتیبانی 24/7',
    'امنیت بالا', 
    'رابط کاربری آسان',
    'پشتیبانی از تمام دستگاه‌ها'
];

const icons = ['🕒', '🔒', '💻', '📱'];

const featureList = features.map((feature, index) => `
    <li class="feature-item">
        <span class="feature-icon">${icons[index]}</span>
        <span class="feature-text">${feature}</span>
    </li>
`).join('');

const featuresHtml = `
    <section class="features">
        <h2>ویژگی‌های محصول</h2>
        <ul class="features-list">
            ${featureList}
        </ul>
    </section>
`;
let app = document.getElementById("app");
app.innerHTML = featuresHtml;