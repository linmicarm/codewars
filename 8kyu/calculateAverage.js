/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/

//My solution://

//Define a function called findAverage that takes in an array as an argument
const findAverage = (array) => {
//Initialize a variable called sum to 0
    let sum = 0;
//Use a for loop to iterate through each element in the array
    for (let i = 0; i < array.length; i++) {
//Add the current element to the sum variable
        sum += array[i];
    }
//Return the average by dividing the sum by the length of the array, or return 0 if the array is empty
    return sum/array.length || 0;
}