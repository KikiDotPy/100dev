// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string,
// and print the value to the console
let favDrinks = "Tea".trim();
console.log(favDrinks);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
const words = "multiple words where checking if there is apple";
const bool = words.split(" ").find( item => item === "apple");


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function game(){
    const items = ["rock", "paper", "scissor"];
    return items[Math.floor(Math.random() * 3)];
}

// *Conditionals*
// Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game 
// of rock paper scissors against a bot using the above function
function checkWin(choice) {
    let bot = game();
    if ((choice === "rock" && bot === "scissor") || (choice === "paper" && bot === "rock") || (choice === "scissor" && bot === "paper")) {
        console.log("You won");
    } else if (choice === bot) {
        console.log("It's a tie!");
    } else {
        console.log("You lose!")
    }
}

//*Loops*
//Create a function that takes an array of choices. 
// Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function gameArr(arr){
    for (let i = 0; i < arr.length; i++){
        checkWin(arr[i]);
    }
}
