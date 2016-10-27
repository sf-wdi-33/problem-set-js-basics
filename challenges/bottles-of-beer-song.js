var bottles;
var bottleNum = prompt("Please input a number: ");
for (counter = bottleNum; counter >= 1; counter--)
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter + " " + bottles + " of beer on the wall,");
    console.log(counter + " " + bottles + " of beer!");
    console.log("Take one down and pass it aound,");
    if (counter == 1) {
        console.log("No more beer on the wall.");
    } else {
       console.log(counter-1 + " " + bottles + " of beer on the wall...\n\n");
    }
}
