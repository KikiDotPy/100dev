/* let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;

const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g); */

/* const day = "Monday".toLowerCase();
const weekDays = ["Monday", "Tuesday", "Wednsday", "Thuersday", "Friday", "Saturday", "Sunday"];

switch (day) {
    case "monday":
        console.log(weekDays[1]);
        break;
    case "tuesday":
        console.log(weekDays[2]);
        break;
    case "wednsday":
        console.log(weekDays[3]);
        break;
    case "thuersday":
        console.log(weekDays[4]);
        break;
    case "friday":
        console.log(weekDays[5]);
        break;
    case "saturday":
        console.log(weekDays[6]);
        break;
    case "sunday":
        console.log(weekDays[0]);
        break;
    default:
        console.log("Wrong day name");
} */

/* let nb1, nb2, nb3;
nb1 = 2;
nb2 = 4;
nb3 = 0;

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 += nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 *2 + nb2;
    }
}
console.log(nb1, nb2,nb3); */

/* function square1(x) {
    return x * x;
}

const square2 = x => x * x;

for(let i = 0; i <= 10; i++) {
    console.log(square2(i));
} */

/* function min(a, b) {
    return a <= b ? a : b;
}

console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(1, 1)); */

/* 
PYRAMID
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write("#");
    }
    console.log("");
}
*/

// print all number from 1 to 100 BUT
// n % 3 === 0 "Fizz"
// n % 5 === 0 "Buzz"
// both FizzBuzz
/* FIZZBUZZ
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
} */

// print 8 x 8 grid with spaces and # alternating
const size = 8; //this is the variable setting

let board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (let i = 0; i < size; i++) {   /*in the outer loop we add newline to seperate rows*/
  for (var j = 0; j < size; j++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((j + i) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
