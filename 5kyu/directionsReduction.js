/*
function dirReduc(arr) {
    let result = [];

    let opposites = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST"
    };

    for (let i = 0; i < arr.length; i++) {
        let last = result[result.length - 1];

        if (opposites[last] === arr[i]) {
            result.pop();
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}
*/

function dirReduc(arr) {
    let result = [];

    let opposites = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST"
    };

    for (let i = 0; i < arr.length; i++) {
        let last = result[result.length - 1];

        if (opposites[last] === arr[i]) {
            result.pop();
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}
