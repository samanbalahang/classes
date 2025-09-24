const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 }
];

const groupedByAge = people.reduce((acc, curr) => {
  const age = curr.age;
  if (!acc[age]) {
    acc[age] = [];
  }
  acc[age].push(curr);
  return acc;
}, {});

console.log(groupedByAge);
/*{  25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
      30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]}*/
