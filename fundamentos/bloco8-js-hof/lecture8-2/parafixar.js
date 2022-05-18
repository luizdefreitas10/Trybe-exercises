// 1 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => names.find( (name) =>  name.length === 5); 

console.log(findNameWithFiveLetters());

// 2 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find( (musica) => musica.id === id );
}

console.log(findMusic('31031685')); 

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {
//   // Adicione seu código aqui
//   return musicas.find( (musica) => {
//     // console.log(musica);
//     // console.log(musica.id);
//     // console.log(id);
//     // console.log(index);
//     if (musica.id === id) {
//       return musica;
//     }; 
//   });
// }

// console.log(findMusic('31031685')); 

