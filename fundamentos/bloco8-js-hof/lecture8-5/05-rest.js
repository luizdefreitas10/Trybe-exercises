// const formatDate = (year, month, day, ...rest) => {
//   return `${day}/${month}/${year} - ${rest[0]}:${rest[1]}:${rest[2]}`;
// }

const formatDate = (year, month, day, ...rest) => {
  return `${day}/${month}/${year} - ${rest.join(':')}`;
}

const dateInfo = ['1981', '7', '31', '22', '47', '12'];

console.log(dateInfo);
console.log(formatDate(...dateInfo)) //Spread Operator
// '31/7/1981'

module.exports = { formatDate, dateInfo }