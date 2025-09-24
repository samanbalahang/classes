// const fragment = new DocumentFragment();
const element = document.getElementById("app"); // assuming ul exists
const fragment = document.createDocumentFragment(); 
const browsers = ["Firefox", "Chrome", "Opera", "Safari"];
browsers.forEach((browser) => { const li = document.createElement("li"); li.textContent = browser; fragment.appendChild(li); });
element.appendChild(fragment);
