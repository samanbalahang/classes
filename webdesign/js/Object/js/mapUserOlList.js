//mapUserOlList.js
const tasks = ['تمرین جاوااسکریپت', 'پروژه وب', 'مطالعه ریاضی', 'ورزش'];

const numberedList = tasks.map((task, index) => `
    <li class="task-item">
        <span class="task-number">${index + 1}.</span>
        <span class="task-text">${task}</span>
        <button onclick="completeTask(${index})">انجام شد</button>
    </li>
`).join('');

const tasksHtml = `
    <div class="tasks-wrapper">
        <h2>لیست کارهای روزانه</h2>
        <ol class="tasks-list">
            ${numberedList}
        </ol>
    </div>
`;

let app = document.getElementById("app");
app.innerHTML = tasksHtml;