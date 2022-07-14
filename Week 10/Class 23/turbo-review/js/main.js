// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const quote = "You got this!";
if (quote[quote.length-1] === "?") {
    alert(quote);
}

//Declare a variable, assign it a string of multiple words, 
//replace every "jr. dev" with "software engineer", and print it to the console
let dev = "jr. jr. hello, I am a jr. or not?"
const prova = dev.replace(/jr\./g, "software engineer")
console.log(prova);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function randomRPS(){
    const gameList = ["rock", "paper", "scissors"]
    return gameList[Math.floor(Math.random() * 3)]
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) 
//and determines if they won a game of rock paper scissors against a bot using the above function
function gameChoice(choice) {
    let bot = randomRPS()
    if ((choice === "rock" && bot === "scissors") || (choice === "paper" && bot === "rock") || (choice === "scissors" && bot === "paper")){
        return "You won!"
    } else if (choice === bot){
        return "Fair game"
    } else {
        return "You lose!"
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. 
//Print the results of each game to the console.
function gamesWon(games){
    for (let i = 0; i < games.length; i++){
        console.log(gameChoice(i))
    }
}
