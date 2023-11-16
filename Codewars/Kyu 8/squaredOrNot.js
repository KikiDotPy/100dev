function squareOrSquareRoot(array) {
    const squaredArray = array.map(num => {
      if ( num > 1 && Math.sqrt(num) % 1 === 0 ) {
        return Math.sqrt(num)
      } else {
        return num * num 
      }
    })  
    
    return squaredArray;
  }


  // 2nd solution, cleaner and shorter

  function squareOrSquareRoot(array) {
    return array.map(num => {
      const numberToAdd = Math.sqrt(num);
      
      return (numberToAdd % 1 == 0) ? numberToAdd : (num * num);
    });  
  }