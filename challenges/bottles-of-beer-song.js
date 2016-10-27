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
for(var i=5; i>0; i--){
  var bottle = (i===1)?" bottle":" bottles";
  console.log(i + bottle + " of beer on the wall,\n" +
              i + bottle + " of beer!\n" +
              "Take one down and pass it around,\n" +
              ((i-1)>0?(i-1):"No more") +" bottles of beer on the wall...\n\n");
}
