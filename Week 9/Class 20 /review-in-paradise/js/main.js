// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "buh";
food = "pizza";
alert(food);

//Declare a variable, assign it a string, alert the second character in the string 
//(Use your google-fu and the MDN)
const yolo = "Lolle";
alert(yolo[1]);


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. 
// Alert the product. Call the function.
function divideAndMulty (a, b, c) {
    alert((a / b) * c);
}
divideAndMulty(1,3,4);


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function root(n) {
    console.log(Math.pow(n));
}

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function yayOrNay(month){
    const check = month.toLowerCase();
    if (check === "june" || check === "july" || check === "August" || check === "May") {
        alert("YAY!")
    } else {
        alert("Boooo!")
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function loopNotFive(n){
    for (let i = 1; i <= n; i++){
        if (!(i % 5 === 0)){
            console.log(i);
        }
    }
}