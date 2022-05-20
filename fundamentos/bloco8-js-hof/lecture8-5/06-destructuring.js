//OBJECT DESTRUCTURING
// Extraia as informações de name e birthplace do objeto para montar uma frase!

const richestDuckInTheWorld = {
  name: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
};

const { name, birthplace, jobs } = richestDuckInTheWorld;
const [first, second, third, quarto, quinto, sexto] = jobs;

// console.log(richestDuckInTheWorld.name);
console.log(birthplace);
console.log(jobs);
console.log(first);
console.log(second);
console.log(third);
console.log(quarto);
console.log(quinto);
console.log(sexto);

console.log(`${name} from ${birthplace}`);

module.exports = { name, birthplace };