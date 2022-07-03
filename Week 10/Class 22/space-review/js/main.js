//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const nums = [2, 3, 4, 5, 6, 10]; 
//const sumArr = nums.reduce((sum, num) => sum + num, 0);
//alert(sumArr);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr) {
    return arr.map(num => Math.sqrt(num));
}

//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str){
    let length = str.length;
    let reversed = "";
    while (length > 0) {
        reversed += str[length - 1];
        length--;
    }
    return reversed;
}

console.log(reverseStr("ciao"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
