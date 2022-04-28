// Write a program that launches a carousel for 10 turns, showing the turn number each time.

let userInput = window.prompt("Enter the turn numbers");

for( let i = 0; i < userInput; i++) {
    console.log("Turn " + i);
}

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.
let input = window.prompt("Starting number");
let input2 = window.prompt("Ending number");

for (input; input <= input2; input++) {
    if (input % 2 === 0) {
      console.log(`${input} is even`);
    } else {
        console.log(`${input} is odd`)
    }
  }