/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []
Input strings will only contain letters.
Note: keep the original order of the names in the output.

const friend = friends => friends.filter((name) => name.length === 4)
*/

//My Solution://

//Declare a function called friend that takes in an array of friends; filter the array so that it only shows friends who have a name length of exactly 4 characters.
const friend = (friends) => friends.filter((name) => name.length === 4)
