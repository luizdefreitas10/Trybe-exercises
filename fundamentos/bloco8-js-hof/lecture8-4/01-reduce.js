
// Somar os valores do array

const numbers = [2, 3, 4, 6, 7, 12, 24];

// const sum = (array) => {
//   let somatorio = array[0];
  
//   for (let index = 1; index < array.length; index += 1) {
//     somatorio = somatorio + array[index];
//   }
//   return somatorio;
// }

const sum = (array) => array.reduce( (acc, curr) => acc + curr, 0 );

console.log(sum(numbers));

module.exports = { sum }