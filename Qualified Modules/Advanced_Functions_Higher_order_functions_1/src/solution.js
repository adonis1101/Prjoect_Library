function printNames(names) { 
  // your solution here
  names.forEach((person) => console.log(person))
}

function logTreeType(trees) {
  // your solution here
  trees.forEach((type) => console.log(type.type))
}

function totalPoints(points) {
  // your solution here
  let result = 0
  points.forEach((sum) => console.log (result += points))
}


function buildSentence(words) {
  // your solution here
}

function logPercentages(decimals) {
  // your solution here
}

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages
}