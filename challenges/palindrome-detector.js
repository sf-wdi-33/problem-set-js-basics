/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE
var isPalindrome = function (str) {
  var reverse=str.split('').reverse().join('');
  if (reverse===str) {
    return true
    console.log("That's a palindrome")
  }
  else {
    return false
    console.log("That's not a palindrome")
  }
}

isPalindrome("mom");
