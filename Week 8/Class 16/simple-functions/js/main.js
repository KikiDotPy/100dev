//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(num, num2){
    alert(num - num2);
}

//create a function that divides three numbers and console logs the quotient
function division(one, two, three) {
    console.log(one / two / three)
}

//create a function that multiplys three numbers and returns the product
function multiply(one, two, three) {
    return one * two * three;
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the 
// remainder of dividing the sum of the first two numbers by the third number
function fancyFunc(one, two, three) {
    return (one + two) % three;
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value.
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hardFunc(one, two, three, four) {
    const mul = one * two;
    if (mul > 100) {
        console.log(three + four)
    } else if (mul < 100) {
        console.log(three - four);
    } else if (mul === 100) {
        const multy = one * two * three;
        alert(multy / four);
    }
}
