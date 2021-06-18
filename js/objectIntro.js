const christian = {
    firstName: 'Christian',
    lastName: 'Parker',
    birthYear: 1970,
    job: "software developer",
    family: [
      "Lisa",
      "Abby",
      "Quincy",
      "Baxter"
    ],
    hasDriversLicense: true,
//     calcAge: function(){
//     console.log(this);
//     return 2021 - this.birthYear;
//   }
// };
  calcAge: function(){
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function(){
      return`${this.firstName} is a ${this.calcAge()} year old ${christian.job}, and he has ${this.hasDriversLicense ? 'a ' : 'no '} driver's licence.`
  }
};
// console.log(christian);
// console.log(christian.lastName)
//
// const interestedIn = prompt("What do you want to know about Christian? Choose between firstName, lastName, age, job, and family?");
// console.log(christian[interestedIn]);
//
// console.log(`${christian.firstName} has ${christian.family.length} family members. His wife is named ${christian.family[0]}`);

console.log(christian.calcAge());
console.log(christian.getSummary());
