import { describe, expect, it, jest, beforeEach, afterEach, xit } from '@jest/globals';
import { fizzBuzz } from './FizzBuzz';


describe('FizzBuzz', () => {

    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });


    it('Should print each number from 1 to 100', () => {

        fizzBuzz(1, 100);

        expect(consoleSpy).toHaveBeenCalledTimes(100);

    });
    it('Should print each number in a range of 2 numbers', () => {

        fizzBuzz(2, 6);

        expect(consoleSpy).toHaveBeenCalledTimes(5);
    });
    it('should console.log a single number', () => {
        
        fizzBuzz(1, 1);

        expect(consoleSpy).toHaveBeenCalledWith(1);
      });
 
      it('should console.log 1, 2 and "Fizz"', () => {

        fizzBuzz(1, 3);

        expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 2);
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Fizz');

      });
});

// For multiples of three print Fizz instead of the number
// For the multiples of five print Buzz instead of the number
// For numbers which are multiples of both three and five print FizzBuzz instead of the number