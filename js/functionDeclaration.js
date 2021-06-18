'use strict';


//function declaration
function calcAge1(birthYear){
  const age = 2021 - birthYear;
  return age;
}
const age1 = calcAge1(1970);
console.log(age1);

//function expression
const calcAge2 = function(birthYear){
  return 2021-birthYear;
}
const age2 = calcAge2(1970);
console.log(age1, age2);
