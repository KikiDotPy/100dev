// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "CHRISTMAS";
console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
const str = "Woahh!";
alert(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subAlert(n1,n2,n3,n4,n5) {
    let sum = 100 - n1 - n2 - n3 - n4 - n5;
    return Math.abs(sum);
}

subAlert(2,3,4,5,6);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function consoleLower(n1,n2,n3) {
    const min = Math.min(n1,n2,n3);
    const max = Math.max(n1,n2,n3);
    console.log(`Lowest is ${min}, Higher is ${max}`);
}


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headOrTail() {
    const num = Math.floor( Math.random() * 2 );
    return num === 1 ? "Tail" : "Head";
}


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x 
//times where x is the number passed into the function. Call the function.
function consoleTH(n) {
    for (let i = 0; i < n; i++) {
        let num = headOrTail();
        console.log(num);
    }
}
