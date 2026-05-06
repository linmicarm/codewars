/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

//My solution://

//Declare a function called getAverage that takes in an array of marks as a parameter 
function getAverage(marks){
//Initialize a variable called sum to store the total of the marks starting at 0
    let sum = 0
//Use a for loop to iterate through the marks array and add each mark to the sum variable
    for (let i = 0; i < marks.length; i++){
        sum += marks[i]
  }
//Calculate the average by dividing the sum by the length of the marks array and return the result rounded down to the nearest integer using Math.floor()
  return Math.floor(sum/marks.length)
}