const { getCommands } = require('@util/file.js')
require('@util/array.js')
const { getNumbers } = require('./util.js')

const part1 = (filename) => {
  const input = getCommands(filename)
  return input.map(getNumbers).sum()
}

module.exports = { part1 }
