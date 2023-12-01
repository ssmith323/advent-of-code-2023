const { getCommands } = require('@util/file.js')
require('@util/array.js')
const { getNumbersWithWords } = require('./util.js')

const part2 = (filename) => {
  const input = getCommands(filename)
  return input.map(getNumbersWithWords).sum()
}

module.exports = { part2 }
