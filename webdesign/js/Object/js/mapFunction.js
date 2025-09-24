function arrayToHtmlList(items, options = {}) {
    const {
        listType = 'ul',
        itemClass = '',
        listClass = '',
        transform = item => item
    } = options;
    
    const listItems = items.map(item => `
        <li class="${itemClass}">${transform(item)}</li>
    `).join('');
    
    return `
        <${listType} class="${listClass}">
            ${listItems}
        </${listType}>
    `;
}

// استفاده
const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

const html = arrayToHtmlList(fruits, {
    listType: 'ul',
    listClass: 'fruits-list',
    itemClass: 'fruit-item',
    transform: fruit => `<strong>${fruit}</strong>`
});

let app = document.getElementById("app");
app.innerHTML = html;
