//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = ["Spiderman into Spiderverse", "Isle of Dogs", "Pulp Fiction"];
const h2 = document.querySelector("h2").innerHTML;
movies.forEach((e) => h2 = e);


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const numbers = [1, 3, 4, 5, 10];
numbers.forEach((n) => n += 3);

//Find the average of all the numbers from question three
const nLen = numbers.length;
const sum = 0;
numbers.forEach((n) => sum += n)
console.log(sum/nLen);