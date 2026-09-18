/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

function multiplicationTable(size) {
    // Create an empty array to hold all of our rows
    let table = [];

    // Loop through each row from 1 up to the given size
    for (let i = 1; i <= size; i++) {
        // Create an empty array for the current row
        let row = [];

        // Loop through each column from 1 up to the given size
        for (let j = 1; j <= size; j++) {
            // Multiply the row number by the column number
            // and add the result to the current row
            row.push(i * j);
        }

        // Add the completed row to the multiplication table
        table.push(row);
    }

    // Return the completed table
    return table;
}
