/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

function sumArray(array) {

    // Check if the array doesn't exist OR has fewer than 2 elements
    if (!array || array.length < 2) {
        // If the input is invalid, return 0
        return 0;
    }

    // Start by assuming the first value is the lowest
    let lowest = array[0];

    // Start by assuming the first value is the highest
    let highest = array[0];

    // Loop through every value in the array
    for (let i = 0; i < array.length; i++) {

        // If the current value is smaller than our lowest value
        if (array[i] < lowest) {

            // Update lowest to the current value
            lowest = array[i];
        }

        // If the current value is larger than our highest value
        if (array[i] > highest) {

            // Update highest to the current value
            highest = array[i];
        }
    }

    // Create a variable to keep track of the total
    let total = 0;

    // Loop through every value in the array again
    for (let i = 0; i < array.length; i++) {

        // Add the current value to the total
        total += array[i];
    }

    // Remove one lowest and one highest from the total, then return the result
    return total - lowest - highest;
}
