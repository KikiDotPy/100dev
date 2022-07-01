//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ["Scrub", "Hannibal", "Legion"];
tvShows.forEach((el) => console.log(el));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const nums = [2, 3, 4, 6, 7, 10];
const numsEven = arr => arr.filter(n => n % 2 === 0);
console.log(numEven(nums));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumLowHigh (arr) {
    const sorted = arr.sort((a,b) => a - b);
    alert(sorted[1] + sorted[sorted.length - 2]);
}