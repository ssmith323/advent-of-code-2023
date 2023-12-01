const { NUMBERS } = require('./consistent.js')

const firstLetters = /^[a-zA-Z]+/g
const endLetters = /[a-zA-Z]+$/g

const getFirstNumberWithWord = (line) => {
  const firstChars = line.match(firstLetters)
  return (
    firstChars &&
    NUMBERS.reduce(
      (prev, curr) => {
        const index = firstChars[0].indexOf(curr)
        return index > -1 && index < prev.index
          ? { index, value: (NUMBERS.indexOf(curr) + 1).toString() }
          : prev
      },
      { index: 999999, value: undefined }
    ).value
  )
}

// eslint-disable-next-line max-lines-per-function
const getSecondNumberWithWord = (line, second) => {
  const endChars = line.match(endLetters)
  return endChars
    ? NUMBERS.reduce(
        (prev, curr) => {
          const index = endChars[0].lastIndexOf(curr)
          return index > prev.index
            ? {
                index: index,
                value: (NUMBERS.indexOf(curr) + 1).toString(),
              }
            : prev
        },
        { index: -1, value: second }
      ).value
    : second
}

module.exports = { getFirstNumberWithWord, getSecondNumberWithWord }
