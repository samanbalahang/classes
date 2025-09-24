const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

// روش 3: با قالب‌بزی پیشرفته
const htmlList = fruits.map(fruit => `
    <li class="fruit-item" data-fruit="${fruit}">
        <span>${fruit.toUpperCase()}</span>
    </li>
`).join('');

const fullHtml = `
    <ul class="fruits-list">
        ${htmlList}
    </ul>
`;

console.log(fullHtml);
