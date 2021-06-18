"use strict";

const christianArray = [
  'christian',
  'parker',
  2021 -1970,
  'software developer',
  ['lisa', 'abby','quincy','baxter'],
];

for (let i = christianArray.length -1; i >= 0; i--){
  console.log(i, christianArray[i]);
}

for (let exercise = 1; exercise <4; exercise++) {
  console.log(`Starting exercise ${exercise}`
  );

  for (let rep = 1; rep < 6; rep++) {
    console.log(`lifting weight repetition ${rep}`)
  }
  let rep =1;
  while (rep <=10){
    console.log(`lifting heavy weights repetition ${rep}`);
    rep++;
  }
}
