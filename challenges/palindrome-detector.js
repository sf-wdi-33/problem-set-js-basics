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

function checkPalindrome(str){
  //remove all non-alphanumeric characters and change string into lowercase
  var newStr = str.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase();
  var length = newStr.length;
  for(var i=0; i<length/2; i++){
    if(newStr.charAt(i) !== newStr.charAt(length-1-i)){
      return false;
    }
  }
  return true;
}

checkPalindrome("abcdcba");
