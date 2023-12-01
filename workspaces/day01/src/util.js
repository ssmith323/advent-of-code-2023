const {
  getFirstNumberWithWord,
  getSecondNumberWithWord,
} = require('./words.js')

const getNumbers = (line, [first, second] = [undefined, undefined]) => {
  const arr = line.split('')
  for (const char of arr) {
    if (!first && Number(char)) {
      first = char
    }
    if (Number(char)) {
      second = char
    }
  }
  return [first, second]
}

const getNumbersWithoutWords = (line) => {
  const [first, second] = getNumbers(line)
  return Number(first + second)
}

const getNumbersWithWords = (line) => {
  const first = getFirstNumberWithWord(line)
  let second = first
  const [firstDigit, secondDigit] = getNumbers(line, [first, second])

  second = getSecondNumberWithWord(line, secondDigit)
  return Number(firstDigit + second)
}

module.exports = { getNumbersWithoutWords, getNumbersWithWords }
