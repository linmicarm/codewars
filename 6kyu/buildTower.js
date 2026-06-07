/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
*/

function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 1; i <= nFloors; i++) {
    const stars = (i * 2) - 1;          // i is the floor number
    const spaces = nFloors - i;
    const floor = " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces);
    tower.push(floor);
  }
  return tower;
}
