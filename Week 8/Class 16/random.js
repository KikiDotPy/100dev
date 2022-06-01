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

function min(a, b) {
    return a <= b ? a : b;
}

console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(1, 1));