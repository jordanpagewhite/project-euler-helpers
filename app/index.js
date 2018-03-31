/**
 * Provides useful helper methods for solving Project Euler problems.
 */
class ProjectEulerHelpers {
  /**
   * Checks if an integer x is divisible by every integer in arr.
   *
   * @param {number} x - An integer x.
   * @param {number[]} arr - An array of integers.
   * @return {boolean} If x is not divisible by any value in arr, returns false.
   * Else, returns true.
   */
  isDivisibleByAny(x, arr) {
    if (Number.isInteger(x) && arr.every((cur) => Number.isInteger(cur))) {
      for (let i=0; i < arr.length; i++) {
        if (x % arr[i] == 0) return true
      }
    }

    return false
  }

  /**
   * Determines whether or not a natural number n is a palindrome number?
   *
   * @param {number} n - An natural number n.
   * @return {boolean} Returns true if n is a palindrome. Else, returns false.
   */
  isPalindromeNumber(n) {
    if (Number.isInteger(n) || n > 0) {
      return (n.toString() == n.toString().split('').reverse().join(''))
    }

    return false
  }

  /**
   * Determines whether or not n is prime.
   *
   * @param {number} n - A natural number n.
   * @return {boolean} Returns true if n is prime. Otherwise, returns false.
   */
  isPrime(n) {
    if (Number.isInteger(n) && n > 1) {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false
      }

      return true
    }

    return false
  }

  /**
   * Determines the greatest common denominator of x & y by Euclidean's method.
   *
   * @param {number} x - An integer x.
   * @param {number} y - An integer y.
   * @return {number|boolean} The greatest common denominator of x and y, or
   * false if x or y is not an integer.
   */
  gcdEuclidean(x, y) {
    if (Number.isInteger(x) && Number.isInteger(y)) {
      return (x % y == 0) ? Math.abs(y) : this.gcdEuclidean(y, x % y)
    }

    return false
  }

  /**
   * Determines the greatest common denominator of an array of integers.
   *
   * @param {number[]} arr - An array of integers.
   * @return {number|boolean} The greatest common denominator of the integers in
   * arr, or false if any value in the array is not an integer.
   */
  gcd(arr) {
    if (arr.every((cur) => Number.isInteger(cur))) {
      if (arr.length == 2) return this.gcdEuclidean(...arr)

      let gcd = Math.max(...arr)
      for (let i=0; i < arr.length; i++) {
        gcd = this.gcdEuclidean(gcd, arr[i])
      }

      return gcd
    }

    return false
  }

  /**
   * Determines the least common multiple of the natural numbers in arr.
   *
   * @param {number[]} arr - An array of natural numbers.
   * @return {number|boolean} The least common multiple of the natural numbers
   * in arr. If any value in arr is not a natural number, returns false.
   */
  lcm(arr) {
    if (arr.every((cur) => Number.isInteger(cur) && cur > 0)) {
      return arr.reduce((a, b) => (a*b)/this.gcd([a, b]))
    }

    return false
  }

  /**
   * Determines the prime factors for a natural number n.
   *
   * @param {number} n - A natural number.
   * @param {number[]} arr - An array of natural numbers.
   * @return {number[]|boolean} An array of the prime factors of n. Returns
   * false if n is not a natural number.
   */
  factorNumber(n, arr) {
    if (Number.isInteger(n) && n > 1) {
      if (this.isPrime(n)) {
        arr.push(n)
        return
      }

      let divisor = this.rho(n, this.f)

      this.factorNumber(divisor, arr)
      this.factorNumber(n / divisor, arr)
    }

    return false
  }

  /**
   * Pollard rho algorithm for integer factorization.
   *
   * @param {number} n - A natural number n.
   * @param {*} func - Either tortoise move, f(n), or hare move, g(n).
   * @return {function|number} Returns rho(n,g) until n is fully factored. Once
   * factored, returns the divisor.
   */
  rho(n, func) {
    let num1 = 2
    let num2 = 2
    let divisor = 0

    if (n % 2 == 0) return 2

    do {
      num1 = func(num1) % n
      num2 = func(func(num2)) % n
      divisor = this.gcdEuclidean(Math.abs(num1 - num2), n)
    } while (divisor == 1)

    return (divisor == n) ? this.rho(n, this.g) : divisor
  }

  /**
   * Hare move for rho().
   *
   * @param {number} n - A natural number n.
   * @return {number}
   * @see rho
   */
  g(n) {
    return n*n + 1
  }

  /**
   * Tortoise move for rho().
   *
   * @param {number} n - A natural number n.
   * @return {number}
   * @see rho
   */
  f(n) {
    return n*n - 1
  }

  /**
   * Returns the sum of squares for natural number up to n.
   *
   * @param {number} n - A natural number n.
   * @return {number} The sum of square for natural numbers up to n. Returns
   * false if n is not a natural number.
   */
  sumOfSquares(n) {
    if (Number.isInteger(n) && n > 1) {
      return Array.from(Array(n+1).keys())
        .slice(1)
        .reduce((acc, cur) => {
          return acc + Math.pow(cur, 2)
        }
      )
    }

    return false
  }

  /**
   * Returns the square of the sum of natural numbers up to n.
   *
   * @param {number} n - A natural number n.
   * @return {number} The square of the sum of natural numbers up to n. Returns
   * false if n is not a natural number.
   */
  squareOfSum(n) {
    if (Number.isInteger(n) && n > 1) {
      const sum = Array.from(Array(n+1).keys())
        .slice(1)
        .reduce((acc, cur) => {
          return acc + cur
        }
      )

      return Math.pow(sum, 2)
    }

    return false
  }

  /**
   * Sieve of Eratosthenes.
   *
   * Returns all prime numbers less than a natural number n.
   *
   * @param {number} n - A natural number.
   * @return {number[]} Array of prime numbers less than n. Returns false if n
   * is not a natural number.
   */
  primeSieve(n) {
    if (Number.isInteger(n) && n > 1) {
      const array = Array.from(Array(n-1).keys())
      const upperLimit = Math.ceil(Math.sqrt(n))

      // Remove multiples of primes
      for (let i = 2; i <= upperLimit; i++) {
        if (array[i]) {
          for (let j = i * i; j < n; j += i) {
            array[j] = false
          }
        }
      }

      // Return true values i.e. primes
      return array.filter((el) => Number.isInteger(el) && (el >= 2))
    }

    return false
  }

  /**
   * Return nth prime number by setting an upper bound and using primeSieve.
   *
   * @param {number} n - A natural number.
   * @return {number} The nth prime number. Returns false if n is not a natural
   * number.
   * @see primeSieve
   * @see nthPrimeUpperBound
   */
  nthPrime(n) {
    if (Number.isInteger(n)) {
      // The upper bound works for n > 5, so I am settings bounds for n <= 5.
      if (n > 5) {
        return this.primeSieve(this.nthPrimeUpperBound(n))[n-1]
      } else if (n == 5) {
        return 11
      } else if (n == 4) {
        return 7
      } else if (n == 3) {
        return 5
      } else if (n == 2) {
        return 3
      } else if (n == 1) {
        return 2
      }
    }

    return false
  }

  /**
   * Returns an upper bound for the nth prime.
   *
   * @param {number} n - A natural number n.
   * @return {number} A natural number upper bound to the nth prime number.
   * Return false if n is not a natural number.
   */
  nthPrimeUpperBound(n) {
    return (Number.isInteger(n) && n > 5)
      ? Math.ceil(n*Math.log(n*Math.log(n)))
      : false
  }

  /**
   * Returns the number of boolean true values in an array.
   *
   * @param {boolean[]} arr - An array of boolean values.
   * @return {number|boolean} The number of boolean true values in arr. Returns
   * false if arr is not an array or an empty array.
   */
  trueValues(arr) {
    if (Array.isArray(arr)) {
      return arr.filter((a) => a === true).length
    }

    return false
  }

  /**
   * Returns the maximal subset, given a subset size, within a string of digits.
   *
   * @param {string} digits - A string of numeric digits.
   * @param {number} subsetSize - The size of the subset.
   * @return {number} The maximal subset, given a subset size, within a string
   * of digits.
   */
  maxProductSubset(digits, subsetSize) {
    let max = 0
    // Convert string to array of integers.
    let digitsArr = digits.split('').map(Number)

    digitsArr.forEach((e, i) => {
      // Verify that there is a value 13 indices ahead.
      if (typeof digitsArr[i+subsetSize] != 'undefined') {
        let product = this.productOfSubset(digitsArr, i, subsetSize)
        max = (max < product) ? product : max
      }
    })

    return max
  }

  /**
   * Returns the product of a subset of an array.
   *
   * @param {number[]} arr - An array of natural numbers.
   * @param {number} index - An array index (natural number).
   * @param {number} subsetSize - The size of the subset to calculate the
   * product of.
   * @return {number} The product of the subset of the array.
   */
  productOfSubset(arr, index, subsetSize) {
    return arr.slice(index, index+subsetSize).reduce((a, c) => a * c)
  }
}

module.exports = ProjectEulerHelpers
