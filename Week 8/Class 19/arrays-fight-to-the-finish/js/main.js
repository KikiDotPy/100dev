//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = ["Spiderman into Spiderverse", "Isle of Dogs", "Pulp Fiction"];
movies.forEach((e) => document.querySelector("h2").innerText += e);


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const numbers = [10, 40, 30];
numbers.forEach((n, i) => numbers[i] = n + 3);

//Find the average of all the numbers from question three
const nLen = numbers.length;
const sum = 0;
numbers.forEach((n) => sum += n)
console.log(sum/nLen);