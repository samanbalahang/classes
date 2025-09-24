const users = ['علی محمدی', 'فاطمه احمدی', 'محمد رضایی', 'زهرا حسینی'];

const userList = users.map(user => `
    <li class="user-item">
        <i class="icon-user"></i>
        <span>${user}</span>
    </li>
`).join('');

const usersHtml = `
    <div class="users-container">
        <h3>لیست کاربران</h3>
        <ul class="users-list">
            ${userList}
        </ul>
    </div>
`;

// قرار دادن در DOM
document.getElementById('app').innerHTML = usersHtml;
