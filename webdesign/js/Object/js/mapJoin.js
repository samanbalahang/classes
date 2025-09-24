// js/mapJoin.js
const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

// روش 1: استفاده از map و join
const htmlList = fruits.map(fruit => `<li>${fruit}</li>`).join('\n');

console.log(htmlList);
// خروجی:
// <li>سیب</li>
// <li>موز</li>
// <li>پرتقال</li>
// <li>انگور</li>

// قرار دادن در ul
const fullHtml = `<ul>\n${htmlList}\n</ul>`;
console.log(fullHtml);
