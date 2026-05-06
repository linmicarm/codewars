/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!
*/

//My Solution://

//Define a function betterThanAverage that takes in an array of class points and your points
function betterThanAverage(classPoints, yourPoints) {
//Calculate the average of the class points
  let average = classPoints.reduce((sum, num) => sum + num, 0) / classPoints.length
 //Compare your points to the average and return true if you're better, else false
  if (average < yourPoints){
    return true
  }else{
    return false
  }
}