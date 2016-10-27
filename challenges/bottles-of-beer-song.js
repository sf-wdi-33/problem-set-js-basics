/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE



for (var numOfBottles = 5; numOfBottles >= 0; numOfBottles--) {
  var beerSong = numOfBottles + " " + "bottles of beer on the wall," +
      numOfBottles + " " + "bottles of beer!" +
      "Take one down and pass it around," +
      numOfBottles + " " + "bottles of beer on the wall...";
  
  if (numOfBottles == 0) {
    numOfBottles = "no more";
  }
  console.log(beerSong);
}
