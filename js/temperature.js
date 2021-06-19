"use strict";

const temperature = [3,-2,-6,-1,'error', 9, 13, 17, 15, 14, 9 ,5];

//what is the temperature amplitude? Difference between the highest and the lowest.
//how do we compute the max and min temperature?
//what's a sensor error? what to do with it?
//how to ignore errors?

//find max value in temp array
//find min value in temp array
//subtract min from max (amplitude) and return it.


//breaking up into subproblems

const calcTempAmplitude = function (temps){
  //Have to declare the first value in the array.
  let max= temps[0];
  let min = temps[0];

  for (let i = 0; i< temps.length; i++ ){
    const curTemp = temps[i];
    if (typeof curTemp !=='number') continue;
    if (curTemp>max)max = temps[i];
    if (curTemp<min)min = temps[i];
  }
  console.log(max);
  console.log(min);
  return max-min;
};
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);
