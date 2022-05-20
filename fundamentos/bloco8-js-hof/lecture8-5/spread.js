const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// let awesomeBooks = [];

// horrorBooks.forEach( (horror) => {
//   awesomeBooks.push(horror);
// } );

// scifiBooks.forEach( (scifi) => {
//   awesomeBooks.push(scifi);
// } );

// COM Spread operator
const awesomeBooks = [...horrorBooks, ...scifiBooks];


// ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']

console.log(awesomeBooks);

module.exports = { awesomeBooks };