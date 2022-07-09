function closeCompare(a, b, margin = 0){
    // ...
    const distance = Math.abs(a - b);
    if (margin >= distance) {
      return 0;
  } if (a < b){
    return -1
  } if (a > b) {
    return 1
  }
    
  }
  
  function closeCompare(a, b, margin = 0) {
    if (a < b - margin) return -1;
    if (a - margin > b) return 1;
    return 0;
  }