import {describe, expect, test, jest} from '@jest/globals';
import { fizzBuzz } from './FizzBuzz';


describe('FizzBuzz', () => {
    test('Should print each number from 1 to 100', () => {
        console.log = jest.fn();

        fizzBuzz(1, 100);

        expect(console.log).toHaveBeenCalledTimes(100);

    });
    test('Should print each number in a range of 2 numbers', () => {
        console.log = jest.fn();

        fizzBuzz(2, 6);

        expect(console.log).toHaveBeenCalledTimes(5);
    });
});






// Write a program that prints one line for each number from 1 to 100

// Usually just print the number itself.
// For multiples of three print Fizz instead of the number
// For the multiples of five print Buzz instead of the number
// For numbers which are multiples of both three and five print FizzBuzz instead of the number