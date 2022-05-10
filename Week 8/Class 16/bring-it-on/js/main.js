// *Variables*
// Create a variable and console log the value
const num = 21;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let varAdd = 10;
alert(varAdd + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subNumsAndAlert(n1, n2, n3, n4) {
    alert(n1 - n2 - n3 - n4);
}

// Create a function that divides one number by another and returns the remainder
function divAndReturn(n1, n2) {
    return n1 % n2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function AddJum(n1, n2) {
    const sum = n1 + n2;
    if (sum > 50) {
        alert("Jumanji!")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multy(n1, n2, n3) {
    const prody = n1 * n2 * n3;
    if (prody % 3 === 0) {
        alert("ZEBRA!")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function numAndWord(word, num) {
    for (let i = 0; i < num; i++) {
        console.log(word);
    }
}
