const christian = {
    firstName: 'Christian',
    lastName: 'Parker',
    age: 2021 - 1970,
    job: "software developer",
    family: [
      "Lisa",
      "Abby",
      "Quincy",
      "Baxter"
    ]
}
console.log(christian);
console.log(christian.lastName)

const interestedIn = prompt("What do you want to know about Christian? Choose between firstName, lastName, age, job, and family?");
console.log(christian[interestedIn]);
