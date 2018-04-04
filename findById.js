'use strict';
// you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  return items.find( item => {
    return item.id === idNum ? true : false;
  }) || 'not in database';
}
console.log(findById(scratchData, 9));