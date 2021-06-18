"use strict";

const calcAge = function (birthYear){
  return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName){
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  // return `${firstName} retires in ${retirement} years`;

  if (retirement >0){
    // return retirement;
    console.log(`${firstName} retires in omg ${retirement} years`)
    return retirement;
  } else {
    console.log(`${firstName} is already retired! YAY!`)
    return -1;
  }
}

console.log(yearsUntilRetirement(1970, 'Christian'));
console.log(yearsUntilRetirement(2001, 'Abby'));
console.log(yearsUntilRetirement(1955, 'Lisa'));
