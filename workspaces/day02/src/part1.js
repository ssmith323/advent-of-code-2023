/* eslint-disable max-lines-per-function */
const { getCommands } = require('@util/file.js')
require('@util/array.js')

const part1 = (filename) => {
  const input = getCommands(filename)
  const GAME_TOTAL = { red: 12, green: 13, blue: 14 }
  return input
    .map((record) => {
      const game = record.split(':')
      const gameNumber = game[0].split(' ')[1]
      const pulls = game[1].split(';')
      for (let i = 0; i < pulls.length; i++) {
        const pull = pulls[i].split(',')
        for (let j = 0; j < pull.length; j++) {
          const [_, count, color] = pull[j].split(' ')
          if (GAME_TOTAL[color] < count) {
            return 0
          }
        }
      }
      return Number(gameNumber)
    })
    .sum()
}

module.exports = { part1 }
