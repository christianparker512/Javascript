// function logger(){
//   console.log("My name is Christian");
// }
// logger();
// logger();
// logger();
//
// function fruit(apples, oranges){
//   console.log(apples,oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
//   return juice;
// }
// const appleJuice = fruit(12,5);
// console.log(appleJuice);
// console.log(fruit(12,0))
//
// const appleOrangeJuice = fruit(5,5);
// console.log(appleOrangeJuice);
//
//
// const num =(Number('37'));
// console.log(num);


function cutFruitPieces(fruit){
  return fruit*4;
}
function foodJuicer (apples, oranges){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juiceyJuice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juiceyJuice;
}
console.log(foodJuicer(2,3));

