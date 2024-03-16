'use strict';
function calcAge(birthYear) {
  const age = 1991;

  function printAge() {
    const output = `you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firatName = 'jonas';
calcAge(1991);
