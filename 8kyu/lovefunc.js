/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

//My Soultion://

//Define a function called lovefunc that takes in two numbers, flower1 and flower2
const lovefunc = (flower1, flower2) => {
//If flower1 is even and flower2 is odd, return true
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) return true
//If flower2 is even and flower1 is odd, return true
  else if (flower2 % 2 === 0 && flower1 % 2 !== 0) return true
//Otherwise (both are the same), return false
  else return false
}