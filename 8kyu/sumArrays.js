/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative. If the array is empty, return 0.
*/

//My solution://

//Define a function called sum that takes an array of numbers as an argument.
function sum(numbers) {
//Initialize a variable called total to 0. This variable will be used to keep track of the sum of the numbers in the array.  
  let total = 0;
//Use a for loop to iterate through each number in the array. The loop will run from 0 to the length of the array.
  for (let i = 0; i < numbers.length; i++) {
//Inside the loop, add the current number (numbers[i]) to the total variable. This will accumulate the sum of all the numbers in the array.
    total += numbers[i];
  }
//After the loop has finished iterating through all the numbers in the array, return the total variable, which now contains the sum of all the numbers.
  return total;
}
