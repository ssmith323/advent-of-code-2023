/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
/* eslint-disable complexity */
const { NUMBERS } = require('./consistent.js')

const getNumbers = (line) => {
  let first
  let second
  const arr = line.split('')
  for (const char of arr) {
    if (!first && Number(char)) {
      first = char
    }
    if (Number(char)) {
      second = char
    }
  }
  return Number(first + second)
}

const firstLetters = /^[a-zA-Z]+/g
const endLetters = /[a-zA-Z]+$/g

const getFirstNumberWithWord = (line) => {
  const firstChars = line.match(firstLetters)
  return (
    firstChars &&
    NUMBERS.reduce(
      (prev, curr) => {
        const index = firstChars[0].indexOf(curr)
        if (index > -1 && index < prev.index) {
          return { index, value: (NUMBERS.indexOf(curr) + 1).toString() }
        }
        return prev
      },
      { index: 999999, value: undefined }
    ).value
  )
}

const getSecondNumberWithWord = (line, second) => {
  const endChars = line.match(endLetters)
  return endChars
    ? NUMBERS.reduce(
        (prev, curr) => {
          if (endChars[0].lastIndexOf(curr) > prev.index) {
            return {
              index: endChars[0].lastIndexOf(curr),
              value: (NUMBERS.indexOf(curr) + 1).toString(),
            }
          }
          return prev
        },
        { index: -1, value: second }
      ).value
    : second
}

const getNumbersWithWords = (line) => {
  let first = getFirstNumberWithWord(line)
  let second = first
  const arr = line.split('')
  for (const char of arr) {
    if (!first && Number(char)) {
      first = char
    }
    if (Number(char)) {
      second = char
    }
  }

  second = getSecondNumberWithWord(line, second)
  return Number(first + second)
}

module.exports = { getNumbers, getNumbersWithWords }
