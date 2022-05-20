const sumAll = (...rest) => {
  let sum = 0;
  
  rest.forEach( (value) => {
    sum += value;
  } );

  return sum;
}


// const sumAll = (...rest) => rest.reduce( (acc, curr) => acc + curr);

console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));
console.log(sumAll(1, 2, 3, 4, 5));

module.exports = { sumAll };