'use strict'

const helpers = {
  lcm: lcm,
  isDivisibleByAny: isDivisibleByAny,
  gcd: gcd,
  gcdEuclidean: gcdEuclidean,
  isPrime: isPrime,
  isPalindromeNumber: isPalindromeNumber,
  factorNumber: factorNumber,
  rho: rho,
  g: g,
  f: f,
  sumOfSquares: sumOfSquares,
  squareOfSum: squareOfSum,
  primeSieve: primeSieve,
  nthPrime: nthPrime,
  nthPrimeUpperBound: nthPrimeUpperBound,
  trueValues: trueValues
}

/**
 * Checks if an integer x is divisible by every integer in arr.
 *
 * @param {number} x - An integer x.
 * @param {number[]} arr - An array of integers.
 * @returns {boolean} If x is not divisible by any value in arr, false. Otherwise, true.
 */
function isDivisibleByAny(x, arr) {
  if (Number.isInteger(x) && arr.every(cur => Number.isInteger(cur))) {
    for (let i=0; i < arr.length; i++) {
      if (x % arr[i] == 0) {
        return true
      }
    }
  }
  
  return false
}

/**
 * Determines whether or not a natural number n is a palindrome number?
 *
 * @param {number} n - An natural number n.
 * @returns {boolean} Returns true if n is a palindrome. Otherwise, returns false.
 */
function isPalindromeNumber(n) {
  if (Number.isInteger(n) || n > 0) {
    return (n.toString() == n.toString().split('').reverse().join(''))
  }

  return false
}

/**
 * Determines whether or not n is prime.
 *
 * @param {number} n - A natural number n.
 * @returns {boolean} Returns true if n is prime. Otherwise, returns false.
 */
function isPrime(n) {
  if (!Number.isInteger(n) || n <= 1) {
    return false
  }
  else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) return false
    }

    return true
  }
}

/**
 * Determines the greatest common denominator of x and y using the Euclidean method.
 *
 * @param {number} x - An integer x.
 * @param {number} y - An integer y.
 * @returns {number|boolean} The greatest common denominator of x and y, or false if x or y is not an integer.
 */
function gcdEuclidean (x, y) {
  if (Number.isInteger(x) && Number.isInteger(y)) {
    return (x % y == 0) ? Math.abs(y) : gcdEuclidean(y, x % y)
  }

  return false
}

/**
 * Determines the greatest common denominator of an array of integers.
 *
 * @param {number[]} arr - An array of integers.
 * @returns {number|boolean} The greatest common denominator of the integers in arr, or false if any value in the array is not an integer.
 */
function gcd(arr) {
  if (arr.every(cur => Number.isInteger(cur))) {
    if (arr.length == 2) return gcdEuclidean(...arr)

    let gcd = Math.max(...arr)
    for (let i=0; i < arr.length; i++) {
      gcd = gcdEuclidean(gcd, arr[i])
    }

    return gcd
  }

  return false
}

/**
 * Determines the least common multiple of the natural numbers in arr.
 *
 * @param {number[]} arr - An array of natural numbers.
 * @returns {number|boolean} The least common multiple of the natural numbers in arr. If any value in arr is not a natural number, returns false.
 */
function lcm(arr) {
  if (arr.every(cur => Number.isInteger(cur) && cur > 0)) {
    return arr.reduce(function(a,b){return (a*b)/gcd([a,b]);});
  }

  return false
}

/**
 * Determines the prime factors for a natural number n.
 *
 * @param {number} n - A natural number.
 * @param {number[]} arr - An array of natural numbers.
 * @returns {number[]|boolean} An array of the prime factors of n. Returns false if n is not a natural number.
 */
function factorNumber(n, arr) {
  if (Number.isInteger(n) && n > 1) {
    if (isPrime(n)) {
      arr.push(n)
      return
    }
    
    let divisor = rho(n, f)
    
    factorNumber(divisor, arr)
    factorNumber(n / divisor, arr)
  }

  return false
}

/**
 * Pollard rho algorithm for integer factorization.
 *
 * @param {number} n - A natural number n.
 * @param {*} func - Either tortoise move, f(n), or hare move, g(n).
 * @param {number} n - A natural number n.
 */
function rho(n, func) {
  let num1 = 2
  let num2 = 2
  let divisor = 0
  
  if (n % 2 == 0) return 2

  do {
    num1 = func(num1) % n
    num2 = func(func(num2)) % n
    divisor = gcd(Math.abs(num1 - num2), n)
  } while (divisor == 1)
  
  return (divisor == n) ? rho(n, g) : divisor
}

/**
 * Hare move for rho().
 *
 * @param {number} n - A natural number n.
 * @return {number}
 * @see rho
 */
function g(n) {
  return n*n + 1;
}

/**
 * Tortoise move for rho().
 *
 * @param {number} n - A natural number n.
 * @return {number}
 * @see rho
 */
function f(n) {
  return n*n - 1;
}

/**
 * Returns the sum of squares for natural number up to n.
 *
 * @param {number} n - A natural number n.
 * @return {number} The sum of square for natural numbers up to n. Returns false if n is not a natural number.
 */
function sumOfSquares(n) {
  if (Number.isInteger(n) && n > 1) {
    return Array.from(Array(n+1).keys())
      .slice(1)
      .reduce((acc, cur) => {
        return acc + Math.pow(cur,2)
      }
    )
  }

  return false
}

/**
 * Returns the square of the sum of natural numbers up to n.
 *
 * @param {number} n - A natural number n.
 * @return {number} The square of the sum of natural numbers up to n. Returns false if n is not a natural number.
 */
function squareOfSum(n) {
  if (Number.isInteger(n) && n > 1) {
    const sum = Array.from(Array(n+1).keys())
      .slice(1)
      .reduce((acc, cur) => {
        return acc + cur
      }
    )

    return Math.pow(sum,2)
  }

  return false
}

/**
 * Sieve of Eratosthenes.
 *
 * Returns all prime numbers less than a natural number n.
 *
 * @param {number} n - A natural number.
 * @returns {number[]} Array of prime numbers less than n. Returns false if n is not a natural number.
 */
function primeSieve(n) {
  if (Number.isInteger(n) && n > 1) {
    const array = Array.from(Array(n-1).keys()),
          upperLimit = Math.sqrt(n)

    // Remove multiples of primes
    for (let i = 2; i <= upperLimit; i++) {
      if (array[i]) {
        for (let j = i * i; j < n; j += i) {
          array[j] = false;
        }
      }
    }

    // Return true values i.e. primes
    return array.filter((el, i, arr) => {
      return el && (el >= 2)
    })
  }

  return false
};

/**
 * Return nth prime number by setting an upper bound and using primeSieve.
 *
 * @param {number} n - A natural number.
 * @returns {number} The nth prime number. Returns false if n is not a natural number.
 * @see primeSieve
 * @see nthPrimeUpperBound
 */
function nthPrime(n) {
  return (Number.isInteger(n) && n >= 1) ? primeSieve(nthPrimeUpperBound(n))[n-1] : false
}

/**
 * Returns an upper bound for the nth prime.
 *
 * @param {number} n - A natural number n.
 * @returns {number} A natural number upper bound to the nth prime number. Return false if n is not a natural number.
 */
function nthPrimeUpperBound(n) {
  if (n > 3) {
    return (Number.isInteger(n) && n > 1) ? Math.ceil(n*Math.log(n*Math.log(n))) : false
  }
  // This estimation only seems to work for n > 3, so I had to manually dictate the bound for n <= 3.
  else if (n == 3) {
    return 6
  }
  else if (n == 2) {
    return 4
  }
  else if (n == 1) {
    return 3
  }
  else {
    return false
  }
}

/**
 * Returns the number of boolean true values in an array.
 * 
 * @param {boolean[]} arr - An array of boolean values.
 * @returns {number|boolean} The number of boolean true values in arr. Returns false if arr is not an array or an empty array.
 */
function trueValues(arr) {
  if (Array.isArray(arr)) {
    return arr.filter(a => a === true).length
  }

  return false
}

module.exports = helpers
