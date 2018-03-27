const isNumber = require('is-number-g')
const slice = require('array-slice-g')
const isArray = Array.isArray

const arrayFirst = (arr, num) => {
  if (!isArray(arr)) {
    throw new Error('array-first expects an array as the first argument.')
  }

  if (arr.length === 0) {
    return null
  }

  let first = slice(arr, 0, isNumber(num) ? +num : 1)
  if (+num === 1 || num == null) {
    return first[0]
  }
  return first
}

module.exports = arrayFirst
