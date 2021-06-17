function logger(){
  console.log("My name is Christian");
}
logger();
logger();
logger();

function fruit(apples, oranges){
  console.log(apples,oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
  return juice;
}
const appleJuice = fruit(12,5);
console.log(appleJuice);
