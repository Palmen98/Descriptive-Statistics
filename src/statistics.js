/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author Simon Palm
 * @version 1.0.0
 */

/**
 * Returns the descriptive information (maximum, mean, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {{maximum: number, mean: number, median: number, minimum: number, mode: number[], range: number, standardDeviation: number}}
 */
export function descriptiveStatistics (numbers) {
  typeErrors(numbers)
  const values = {
    maximum: maximum(numbers),
    mean: mean(numbers),
    median: median(numbers),
    minimum: minimum(numbers),
    range: range(numbers),
    standardDeviation: standardDeviation(numbers),
    mode: mode(numbers)
  }
  return values
}

/**
 * Return the highest value from an array
 * * @param {number[]} numbers The set of data to be analyzed.
 * @throws {typeErrors} Contains all the arguments
 * @returns {number}
 * */
export function maximum (numbers) {
  typeErrors(numbers)
  const max = numbers.slice()
  max.sort(function (a, b) {
    return b - a
  })
  return max[0]
}
/**
 * Return mean value by adding all the numbers in an array,
 * and dividing the sum with the length of the same array.
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {typeErrors} Contains all the arguments.
 * @returns {number}
 */

export function mean (numbers) {
  typeErrors(numbers)
  const copy = numbers.slice()
  let sum = 0

  for (let i = 0; i < copy.length; i++) {
    sum += copy[i]
  }
  return sum / copy.length
}
/**
 * Return the value that is in the middle of the array.
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {typeErrors} Contains all the arguments.
 * @returns {number}
 */
export function median (numbers) {
  typeErrors(numbers)
  const copy = numbers.slice()
  copy.sort((a, b) => a - b)
  const middleNumber = Math.floor(copy.length / 2)
  if (copy.length % 2 === 0) { // Checks if the array is even
    return (copy[middleNumber - 1] + copy[middleNumber]) / 2 // adds both values in the middle of the array and divide them with 2
  } else {
    return copy[middleNumber]
  }
}
/**
 * Return the minimum value in the array.
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {typeErrors} Contains all the arguments.
 * @returns {number}
 */
export function minimum (numbers) {
  typeErrors(numbers)
  return Math.min(...numbers) // Math.min looks for the lowest value and (...) iterates through the array
}
/**
 * Returns the spread between the highest and lowest number.
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {typeErrors} Contains all the arguments.
 * @returns {number}
 */
export function range (numbers) {
  return (maximum(numbers)) - (minimum(numbers))
}
/**
 * Return the standard deviation value.
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {typeErrors} Contains all the arguments.
 * @return {number}
 */
export function standardDeviation (numbers) {
  typeErrors(numbers)
  const copy = numbers.slice()
  let stdv = 0
  const diff = []
  const exponent = []
  // for loop with mean(numbers)
  for (let i = 0; i < copy.length; i++) {
    diff.push(copy[i] - mean(numbers))
  }
  // for loop with Math.pow, the first array index value and exponent 2
  for (let i = 0; i < diff.length; i++) {
    exponent.push(Math.pow(diff[i], 2))
  }
  // for loop that sums up the arrays value in result
  for (let i = 0; i < exponent.length; i++) {
    stdv += exponent[i]
  }
  const sum = stdv / copy.length
  stdv = Math.sqrt(sum)
  return stdv
}

/**
 * Return the most common number(s) in an array.
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {typeErrors} Contains all the arguments.
 * @returns {Array} The most common number in an array.
 */
export function mode (numbers) {
  typeErrors(numbers)
  const copy = numbers.slice()
  const countTable = {}
  const commonTable = []
  for (let i = 0; i < copy.length; i++) {
    const num = copy[i]
    if (countTable[num] === undefined) {
      countTable[num] = 1
    } else {
      countTable[num]++
    }
  }
  const maxValue = Object.values(countTable).sort().pop()

  const mostCommonTable = (Object.keys(countTable).filter(num => countTable[num] === maxValue))
  for (let i = 0; i < mostCommonTable.length; i++) {
    commonTable.push(Number(mostCommonTable[i]))
    commonTable.sort((a, b) => a - b)
  }
  return commonTable
}

/**
 * This function Contain all the TypeErrors.
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {typeErrors} Contains all the arguments.
 * @throws {TypeError} The passed argument is not an array.
 *  @throws {Error} The passed array contains no elements.
 *  @throws {TypeError} The passed array contains not just numbers.
 */
// A function for the TypeErrors to call into my other functions.
export function typeErrors (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
  // if the Array is empty throw a Error
  if (!numbers.length) {
    throw new Error('The passed array contains no elements.')
  }
  // if the array contains more then numbers throw a TypeError with for loop
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      throw new TypeError('The passed array contains not just numbers.')
    }
  }
}