const fruits = ['سیب', 'موز', 'پرتقال', 'انگور'];

function createListItems(items) {
    const fragment = document.createDocumentFragment();
    
    items.map(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.className = 'fruit-item';
        fragment.appendChild(li);
        return li;
    });
    
    return fragment;
}

const ulElement = document.createElement('ul');
ulElement.appendChild(createListItems(fruits));

// فقط یک بار DOM را آپدیت می‌کنیم
document.getElementById('app').appendChild(ulElement);
