//Create a function that takes in an array of numbers. Return a new array containing every even number from the 
//original array (do not use map or filter)

function evenArr (arr) {
    let newArr = [];
    for (e of arr) {
        (e % 2 === 0) ? newArr.push(e) : 0;
    }
    return newArr;
}
