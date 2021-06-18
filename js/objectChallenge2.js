'use strict';

const Christian = {
  fullName: 'Christian Parker',
  mass: 78,
  height: 1.98,
  calcBMI: function() {
    this.bmi = this.mass/this.height **2;
    return this.bmi;
  }
};
const Lisa = {
  fullName: 'Lisa Parker',
  mass: 58,
  height: 1.37,
  calcBMI: function() {
    this.bmi = this.mass/this.height **2;
    return this.bmi;
  }
}
Christian.calcBMI();
Lisa.calcBMI();

console.log(Christian.bmi, Lisa.bmi);

if (Christian.bmi > Lisa.bmi){
  console.log(`${christian.fullName}'s BMI is higher than ${Lisa.fullName}`)
} else if (Lisa.bmi > Christian.bmi){
  console.log(`${Lisa.fullName}'s BMI is higher than ${Christian.fullName}`)
}
