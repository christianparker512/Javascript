const bill = 40
const tip = bill <=300 && bill >= 50 ? bill * .15 : bill * .2;
console.log(`Tonight's dinner total was ${bill}, the tip was ${tip}, and the total value of the meal is ${bill + tip}`);
