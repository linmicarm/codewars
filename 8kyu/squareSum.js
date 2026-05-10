/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
*/

//My Solution://

const squareSum = (numbers) => {
  return numbers.map((number) => number ** 2)
                .reduce((a, c) => a + c, 0);
};
