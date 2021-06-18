'use strict';

const calcAvg = (a,b,c) => (a + b + c)/3
console.log(calcAvg(3,4,5));


let scoreTexas = calcAvg(2, 4, 11);
let scoreVandy = calcAvg(3,6,9);
console.log(scoreTexas, scoreVandy);

const checkWinner = function (avgTexas, avgVandy){
  if (avgTexas >= avgVandy){
    console.log(`Texas wins ${avgTexas} vs ${avgVandy}`);
  } else if (avgVandy >= 2*  avgTexas) {
    console.log(`Vandy wins ${avgVandy} vs ${avgTexas}`);
  } else {
    console.log("It's a tie!");
  }
}

checkWinner(scoreTexas, scoreVandy);

checkWinner(606, 321);

scoreVandy = (calcAvg(85,54,41));
scoreTexas = (calcAvg(75,12, 23));
console.log(scoreVandy, scoreTexas);
checkWinner(scoreTexas, scoreVandy);
