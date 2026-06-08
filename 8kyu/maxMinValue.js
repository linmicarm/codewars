/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, 
and return the largest and lowest number in that list, respectively. Each function returns one number.
*/

var min = function(list) {
  let smallest = list[0];
  for (const num of list) {
    if (num < smallest) {
      smallest = num;
    }
  }
  return smallest;
};

var max = function(list) {
  let largest = list[0];
  for (const num of list) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
};
