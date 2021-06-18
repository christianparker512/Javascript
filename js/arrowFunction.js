'use strict';

let firstName = "christian";
const calcAge2 = function(birthYear, firstName){
  return 2021 - birthYear;
}
//arrow function
const calcAge3 = birthYear => 2021 - birthYear;

calcAge3(1970);

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {

  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} returns in ${retirement} years`;
}
console.log(yearsUntilRetirement(1965, 'Lisa'));
console.log(yearsUntilRetirement(1970, 'Christian'));
