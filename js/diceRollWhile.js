'use strict';

let dice = Math.trunc(Math.random() *6) +1;
console.log(dice);
while(dice !==6){
  console.log(`You rolled ${dice} `);
  dice = Math.trunc(Math.random()*6) +1;
  if (dice ===6) console.log('You got a six...');
}
