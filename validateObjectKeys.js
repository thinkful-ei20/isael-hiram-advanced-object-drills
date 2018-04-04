'use strict';
// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  let keys = Object.keys(object);
  if(keys.length !== expectedKeys.length){
    return false;
  } 
  for (let i in expectedKeys){
    if (!Object.keys(object).find(key => key === expectedKeys[i])) {
      return false;
    }
  }
  return true;
}
//had to look at solution for the code in line 27
console.log(validateKeys(objectA, expectedKeys));