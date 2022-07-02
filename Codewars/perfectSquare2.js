let isSquare = function(n){
    return Number.isInteger(Math.sqrt(n)); // fix me
  }

  function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }