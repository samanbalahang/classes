// js/mapDOM.js
const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

// روش 2: ایجاد عناصر DOM واقعی
const listItems = fruits.map(fruit => {
    const li = document.createElement('li');
    li.textContent = fruit;
    li.className = 'fruit-item';
    return li;
});

// اضافه کردن به DOM
const ulElement = document.createElement('ul');
ulElement.append(...listItems);

document.body.appendChild(ulElement);
