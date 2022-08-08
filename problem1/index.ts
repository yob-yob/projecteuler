/**
 * Project #1 (https://projecteuler.net/problem=1)
 * # Multiples of 3 or 5
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

const problem = {
  title: "Multiples of 3 or 5",
  url: "https://projecteuler.net/problem=1",
  arguments: [
    {name: 'num', type: 'number', default: 1000}
  ],
  solution: <T>(num: T) => {
    if (typeof num === 'number') {
      let sum = 0
      for (let index = 1; index < num; index++) {
        if ((index % 3) === 0 || (index % 5) === 0) {
          sum = sum + index
        }
      }
      console.log(sum)
    }
  }
}

export default problem