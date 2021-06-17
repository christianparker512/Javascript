// const BMI = mass/height ** 2;

let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

const BMIMark = markMass /markHeight **2;
const BMIJohn = johnMass/johnHeight **2;

console.log(BMIMark);
console.log(BMIJohn);


// Challenge #2
if (BMIMark > BMIJohn){
  console.log("Mark's BMI is greater than John's")
} else {
  console.log("John's BMI is higher than Mark's")
}
