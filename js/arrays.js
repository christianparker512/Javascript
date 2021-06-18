const parker1 = "christian";
const parker2 = "lisa";
const parker3 = "abby";

const parker = ['Christian', 'Lisa', 'Abby'];
console.log(parker);

const years = new Array(1965, 1970, 2001)
console.log(years);

console.log(parker[0]);
console.log(parker[1]);
console.log(parker[2]);

// finding the last name, the minus one is due to the zero starting position
console.log(parker[parker.length -1]);

//mutating the array
parker[1] ="lisa jo"
console.log(parker);

const calcAge = function (birthYear){
  return 2021 - birthYear;
}

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

console.log(age1, age2, age3);

//add to the end
parker.push('Quincy');
console.log(parker);

parker.unshift('Baxter');
console.log(parker)

// remove elements
parker.pop('');
console.log(parker);
parker.pop('');
console.log(parker);

parker.shift();

console.log(parker.includes('lisa jo'));

if(parker.includes('lisa jo')){
  console.log('Lisa is a parker');
}

