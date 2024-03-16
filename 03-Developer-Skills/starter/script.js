// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;
const y = 27;
if (x === 23) console.log(23);
if (y === 27) console.log(27);
*/

const measurKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    //c)fix the bug
    value: (Number = prompt('degree celius')),
  };
  //b) find the bug
  console.log(measurment);
  return measurment;
  console.log(measurment.value);
  const kelvin = measurment.value + 273;
  return kelvin;
};
//a) identify the bug

console.log(measurKelvin());
