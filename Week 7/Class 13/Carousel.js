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

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
// When you are done with the above, improve the program so that the terminating number is between 50 and 100.
let number;
while (number > 100 || number < 50) {
    number = prompt("Enter a number: ");
}

// Write a program that asks the user for a number, then shows the multiplication table for this number.

let number = prompt("Insert number: ");

for(let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}