/* eslint-disable max-lines-per-function */
const { getNumbersWithWords } = require('../util.js')

describe('getNumbersWithWords', () => {
  test('83', () => expect(getNumbersWithWords('eighthree')).toBe(83))
  test('82', () => expect(getNumbersWithWords('eightwo')).toBe(82))
  test('only at the end', () => expect(getNumbersWithWords('hgm2')).toBe(22))
  test('79', () => expect(getNumbersWithWords('sevenine')).toBe(79))
  test('79 with numbers', () => expect(getNumbersWithWords('7l9')).toBe(79))
  test('18', () => expect(getNumbersWithWords('oneight')).toBe(18))
  test('56', () => expect(getNumbersWithWords('5onesix')).toBe(56))
  test('66', () => expect(getNumbersWithWords('6kvfn')).toBe(66))
  test('13', () => expect(getNumbersWithWords('13zls3')).toBe(13))
  test('62', () => expect(getNumbersWithWords('bbsix2')).toBe(62))
  test('24', () =>
    expect(getNumbersWithWords('29787jbhkhtbnbgfoursixfour')).toBe(24))
  test('98', () =>
    expect(
      getNumbersWithWords('9fgsixzkbscvbxdsfive6spjfhzxbzvgbvrthreeoneightn')
    ).toBe(98))
  test('89', () =>
    expect(
      getNumbersWithWords('eightczrstqtcjmrpbhhdxrflkcjpsdjbskfvzdglt6nine')
    ).toBe(89))
  test('66 with a lot', () =>
    expect(getNumbersWithWords('hjdtscdc6twotwosixsevensix9six')).toBe(66))
  test('81', () =>
    expect(getNumbersWithWords('zpcdmvmktlrrq8sixgjtxxjpt8fcstt1')).toBe(81))
})
