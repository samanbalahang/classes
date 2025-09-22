const initializedMap = new Map([
  ['name', 'Alice'],
  [1, 'number one'],
  [true, 'boolean true']
]);
function getUserInfo(map) {
    return {
        name: map.get('name') || 'N/A',
        id: map.get('id') || 0,
        isActive: map.get('isActive') || false
    };
}

const userInfo = getUserInfo(initializedMap);
console.log(userInfo);
// خروجی: { name: 'Alice', id: 0, isActive: false }
