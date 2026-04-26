/*
Task

Create a method all which takes two params:

 - a sequence
 - a function

and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

Example
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True
*/

//My Solution://

//Declare a function named all that takes in an array and a function as parameters
const all = (arr, fun) =>
//Return the result of calling the every method on each element in the array, passing in the function as an argument. The every method will return true if the function returns true for every element in the array, and false otherwise. If the array is empty, every will return true by default.
  {return arr.every(fun)}
