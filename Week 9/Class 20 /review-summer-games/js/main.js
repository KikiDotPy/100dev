//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multyArr(arr) {
    let product = 1;
    arr.forEach( e => product *= e);
    alert(product);
}