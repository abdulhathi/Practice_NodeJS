let count = 0

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = {
  name: "Abdul",
  age: 39,
  inc,
  dec,
  getCount
}