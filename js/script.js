let js = "FrontEnd Software Developer";
if (js==='FrontEnd') alert ("He's a great Front End Software Engineer!")

console.log("Christian");
console.log(37);

//declaring a variable
let firstName = "Christian";
let lastName = "Parker";

//variable name conventions
console.log(firstName);
console.log(firstName + " " + lastName);

let christan_parker = "CP";
let $function = 50;

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof 37);
console.log(typeof "Christian");


let age = 50;
console.log(age);
age= 51;
console.log(age);

const birthYear= 1970;
console.log(birthYear)

const now = 2021
const ageChristian = now - 1970;
const ageAbby = now - 2001;
console.log(ageChristian - ageAbby);

let x = 10 +5 //15
x += 10;
x *= 4;
x ++;
x --;
console.log(x);

console.log(ageChristian > ageAbby);

console.log(now - 1991 > now -2020);

console.log(25 - 10 - 5);

x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageChristian + ageAbby) /2
console.log(ageChristian, ageAbby)
console.log(averageAge);

const myName = 'Christian';
const job = 'Software Developer';
const yearBorn = '1970';
let currentYear = '2021';

const christian = "I'm " + myName + ". I'm " + (currentYear - yearBorn) + " years old. I'm " + "a " + job + "."
const christianNew = `I'm ${myName}, a ${currentYear - yearBorn} year old ${job}`;

console.log(christian);
console.log(christianNew);
console.log('String with \n try');

console.log('string number 2 with \n\
multiple \n\
lines');

const isOldEnough = ageAbby >=21;

if (isOldEnough) {
  console.log("She's old enough");
} else {
  const yearsLeft = (21-ageAbby);
  console.log(`She's too young. Wait another ${yearsLeft} years`)
}

//if else statements
const birthYr = 2001;
let century;
if (birthYr <= 2000){
  century = 20;
} else {
  century = 21;
}
console.log(century);

//type conversion and coercion
const inputYear = '1991';
console.log(Number(inputYear )+ 18);
console.log(inputYear + 18);
// not a number
console.log(Number('Christian'));

// falsey levels
// 0, '', undefined, null, NaN

const money = 0;
if(money){
  console.log("Don't spend it all");
} else {
  console.log("you should get a job");
}

let height = 0;
if (height){
  console.log("yay! height is defined");
} else {
  console.log("height is undefined!")
}
