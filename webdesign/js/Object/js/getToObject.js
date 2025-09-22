// getToObject.js
const initializedMap = new Map([
  ['name', 'Alice'],
  [1, 'number one'],
  [true, 'boolean true']
]);
function mapToObject(map) {
    const obj = {};
    for (const [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}
const mapObject = mapToObject(initializedMap);
console.log(mapObject.name); // 'Alice'
console.log(mapObject[1]); // 'number one'
console.log(mapObject[true]); // 'boolean true'
