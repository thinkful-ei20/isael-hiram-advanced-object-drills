'use strict';
function makeStudentsReport(data) {
  let result = [];
  data.forEach(item => {
    result.push(`${item.name}: ${item.grade}`);
  });
  return result;
}
console.log(makeStudentsReport([
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
]));