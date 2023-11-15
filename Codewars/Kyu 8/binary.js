function arr2bin(arr){
    const sum = arr.reduce((acc,current) => (typeof current !== 'number') ? acc += 0 : acc += current, 0)
    
    return sum.toString(2);
  }
    