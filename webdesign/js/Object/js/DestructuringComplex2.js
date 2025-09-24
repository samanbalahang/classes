const project = {
    title: 'وبسایت شرکت',
    team: [
        { name: 'علی', role: 'developer' },
        { name: 'فاطمه', role: 'designer' }
    ],
    deadline: '2024-12-31'
};

const {
    title,
    team: [firstMember, secondMember],
    deadline: dueDate
} = project;

console.log(title); // 'وبسایت شرکت'
console.log(firstMember); // { name: 'علی', role: 'developer' }
console.log(dueDate); // '2024-12-31'
