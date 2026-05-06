/*
Given an array of integers your solution should find the smallest integer.

For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

//My solution://

//Define a function called findSmallestInt that takes an array of integers as an argument.
function findSmallestInt(arr) {
//set the smallestInt variable to the minimum value of the array using the Math.min() function and the spread operator.
    let smallestInt = Math.min(...arr);
//Then return the smallestInt variable.
  return smallestInt;
}
