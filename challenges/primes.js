/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE

var isPrime = function(num) {
  if (num % 2 === 0) {
    return false;
  } else if (num <= 2) {
    return false;
  } else {
    return true;
  }
}



var primes = function(max) {
  primeNums = [];
  for (i = 0; i < max; i++) {
    if (isPrime(i) === true);
    primeNums.push(i);
  } 
    return primeNums;
}

primes(2);