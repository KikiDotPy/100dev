function sumTwoSmallestNumbers(numbers) {  
    //Code here
    const orderedNums = numbers.sort((a,b) => a - b);
    return orderedNums[0] + orderedNums[1];
  }


  const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);