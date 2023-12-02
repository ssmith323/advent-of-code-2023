/* eslint-disable max-lines-per-function */
const { getCommands } = require('@util/file.js')
require('@util/array.js')

const part2 = (filename) => {
  const input = getCommands(filename)
  return input
    .map((record) => {
      const game = record.split(':')
      const pulls = game[1].split(';')
      const cubeTotal = { red: 0, green: 0, blue: 0 }
      for (let i = 0; i < pulls.length; i++) {
        const pull = pulls[i].split(',')
        for (let j = 0; j < pull.length; j++) {
          const [_, count, color] = pull[j].split(' ')
          if (cubeTotal[color] < Number(count)) {
            cubeTotal[color] = Number(count)
          }
        }
      }
      return Object.values(cubeTotal).multiply()
    })
    .sum()
}

module.exports = { part2 }
