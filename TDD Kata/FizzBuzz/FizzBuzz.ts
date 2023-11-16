type mixed = string | number;

export const fizzBuzz = (minNumber : number, maxNumber) =>  { 
    let i = minNumber;

    while (i <= maxNumber) {
        if (i % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(i);
        }
        i++;
    }
 }
