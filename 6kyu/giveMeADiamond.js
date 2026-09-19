/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

function diamond(n) {

    // Handle invalid input
    if (n <= 0 || n % 2 === 0) {
        return null;
    }

    // Store our finished diamond
    let result = '';

    // TOP HALF + MIDDLE
    for (let stars = 1; stars <= n; stars += 2) {

        // Calculate the leading spaces
        let spaces = (n - stars) / 2;

        // Create the current line
        let line = ' '.repeat(spaces) + '*'.repeat(stars) + '\n';

        // Add the line to our result
        result += line;
    }

    // BOTTOM HALF
    for (let stars = n - 2; stars >= 1; stars -= 2) {

        // Calculate the leading spaces
        let spaces = (n - stars) / 2;

        // Create the current line
        let line = ' '.repeat(spaces) + '*'.repeat(stars) + '\n';

        // Add the line to our result
        result += line;
    }

    // Return the finished diamond
    return result;
}
