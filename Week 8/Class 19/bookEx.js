// Improve char Obj /w exp prop

/* const Aurora = {
    name = "Aurora",
    health = 150,
    strenght = 25,
    exp = 0;
}

// Aurora is harmed by an arrow
Aurora.health -= 20;

// Aurora equip strengh accessory
Aurora.strenght += 10;

// Aurora kills a monster

Aurora.exp += 100; */
/* 
const Alex = {
    name : "Alex",
    balance : 0,
    
    credit(n) {
        balance += n;
    },

    describe() {
        return `owner: ${this.name}, balance ${this.balance}`;
    }
};

Alex.credit(250);
console.log(Alex.describe()); */

// Musketeers

/* const musketeers = ["Athos", "Porthos", "Aramis"];
for (const el of musketeers) {
    console.log(el);
}
musketeers.push("D'Artagnan");
musketeers.forEach(el => console.log(el));
musketeers.splice(2, 1);
for (const el of musketeers) {
    console.log(el);
} */

// SUM

/* const values = [3,11,7,2,9,10];
console.log(values.reduce((a, b) => a + b)) */

/* function camelize(arr) {
    let words = arr.split("-");
    console.log(words)
    let newArr = words.map( e => e.charAt(0).toUpperCase() + e.slice(1));
    return newArr.join("");
}

console.log(camelize("ciao-sono-io"));

function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  } */

/* function filterRange(arr, a, b) {
    return arr.filter( x => (x >= a && x <= b) ? x : false)
}
console.log(filterRange([5, 3, 8, 1], 1, 4));

// solution 
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  } */

  