const { getCommands } = require('@util/file.js')
require('@util/array.js')
const { getNumbersWithoutWords } = require('./util.js')

const part1 = (filename) => {
  const input = getCommands(filename)
  return input.map(getNumbersWithoutWords).sum()
}

module.exports = { part1 }
