/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
*/

//My solution://

//Delclare a function called digitize that takes in a number, n, as a parameter
const digitize = n => {
//Convert the number to a string. Split into individual digits. Reverse the order. Place that into a new array using .map and convert string back to numbers.
return String(n).split('').reverse().map(Number)
}