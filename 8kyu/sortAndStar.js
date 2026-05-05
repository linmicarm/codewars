/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

//My solution://

//Declaration of the function twoSort that takes an array of strings as input
const twoSort = s => {
//Sorting the array of strings in alphabetical order and returning the first element. Then, splitting that string into an array of characters and joining them back together with '***' in between each character.
  return s.sort()[0].split('').join('***');
}