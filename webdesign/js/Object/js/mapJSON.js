// mapJSON.js
// تبدیل Map به JSON و برعکس
const map = new Map([['name', 'Alice'], ['age', 30]]);
console.log(map.get("name"));


// به JSON
const json = JSON.stringify(Array.from(map.entries()));
console.log(json);
// از JSON
const reconstructedMap = new Map(JSON.parse(json));
console.log(reconstructedMap.get("name"));
