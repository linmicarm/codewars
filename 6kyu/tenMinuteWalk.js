/*
You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
The city provides its citizens with a Walk Generating App on their phones -- 
everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, 
of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!).
*/

//My Solution://

const isValidWalk = walk => {

  // If the walk isn't exactly 10 steps, it can't take 10 minutes — return false immediately
  if (walk.length !== 10) return false;

  // Start at position (0, 0) — our home base
  // x tracks east/west movement, y tracks north/south movement
  let x = 0;
  let y = 0;

  // Loop through every direction in the walk
  for (const dir of walk) {

    // North moves us up, south moves us down
    if (dir === 'n') y++;
    if (dir === 's') y--;

    // East moves us right, west moves us left
    if (dir === 'e') x++;
    if (dir === 'w') x--;
  }

  // After the walk, check if we're back at (0, 0)
  // If both x and y are 0, we made it back to where we started
  if (x === 0 && y === 0) {
    return true;
  } else {
    return false;
  }

}
