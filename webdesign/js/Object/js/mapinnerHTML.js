const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

function renderList(items) {
    const html = items.map(item => `<li>${item}</li>`).join('');
    return `<ul>${html}</ul>`;
}

document.getElementById('app').innerHTML = renderList(fruits);
