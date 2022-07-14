//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const nums = [1,2,3,4,5];
alert(nums.reduce((sum,num) => sum = num, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(nums){
    return nums.map(n => Math.sqrt(n))
}

//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str){
    return str.split("").reverse().join("");
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
    let check = reverseStr(str);
    if (str === check){
        alert("It's palindrome!")
    } else {
        alert("NOT a palindrome")
    }
}