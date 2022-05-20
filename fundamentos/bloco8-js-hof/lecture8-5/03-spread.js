const point = [1.0, 2.2, -6.6];
const otherPoint = [0.1, 3.5, -99.6];

const printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;

console.log(printPointCoordinates(...point));
// console.log(printPointCoordinates(...otherPoint));
// 'Point coordinates are x = 1, y = 2.2 and z = -6.6'

module.exports = { printPointCoordinates, point, otherPoint };