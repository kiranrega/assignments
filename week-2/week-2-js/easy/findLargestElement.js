/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  // let max = numbers[0]
  //   numbers.forEach((e) => {
  //       (max < e) && (max = e)
  //   })
  
  
  let max = numbers.reduce((acc, e) =>  acc > e ? acc : e, numbers[0])
  
  return max
}

module.exports = findLargestElement;
