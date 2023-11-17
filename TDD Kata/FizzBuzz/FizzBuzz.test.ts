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

      it('should console.log 1, 2, "Fizz", 4, "Buzz", "Fizz"', () => {

        fizzBuzz(1, 6);

        expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 2);
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Fizz');
        expect(consoleSpy).toHaveBeenNthCalledWith(4, 4);
        expect(consoleSpy).toHaveBeenNthCalledWith(5, 'Buzz');
        expect(consoleSpy).toHaveBeenNthCalledWith(6, 'Fizz');

      });

      it('should console.log "Buzz", "Fizz", 7, 8, "Fizz", "Buzz', () => {

        fizzBuzz(5, 10);

        expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Buzz');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Fizz');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 7);
        expect(consoleSpy).toHaveBeenNthCalledWith(4, 8);
        expect(consoleSpy).toHaveBeenNthCalledWith(5, 'Fizz');
        expect(consoleSpy).toHaveBeenNthCalledWith(6, 'Buzz');

      });

      it('should console.log "Buzz", 11, "Fizz", 13, 14 and "FizzBuzz"', () => {

        fizzBuzz(10, 15);

        expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Buzz');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 11);
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Fizz');
        expect(consoleSpy).toHaveBeenNthCalledWith(4, 13);
        expect(consoleSpy).toHaveBeenNthCalledWith(5, 14);
        expect(consoleSpy).toHaveBeenNthCalledWith(6, 'FizzBuzz');

      });
});