
const epic = ['A', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicPhrase = (array) => {
  return array.reduce( (acc, curr) => {
    console.log(`Acc: ${acc} ---> Curr: ${curr}`);
    return `${acc} ${curr}`;
  }, 'StarWars epic phrase:');
}


// const epicPhrase = (array) => array.reduce( (acc, curr) => `${acc} ${curr}`, 'StarWars epic phrase:');

console.log(epicPhrase(epic));
// console.log('StarWars epic phrase: ', epic.join(' '));