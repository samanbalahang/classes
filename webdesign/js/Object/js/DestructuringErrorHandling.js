
function safeDestructuring(obj, path, defaultValue) {
    const keys = path.split('.');
    let current = obj;
    
    for (const key of keys) {
        if (current === null || current === undefined) {
            return defaultValue;
        }
        current = current[key];
    }
    
    return current !== undefined ? current : defaultValue;
}

// استفاده
const data = { user: { profile: { name: 'علی' } } };
const userName = safeDestructuring(data, 'user.profile.name', 'ناشناس');
console.log(userName); // 'علی'
