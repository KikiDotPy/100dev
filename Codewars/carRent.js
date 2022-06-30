function rentalCarCost(d) {
    // Your solution here
    if (d < 3) {
      return d * 40;
    } else if (d >= 7) {
      return d * 40 - 50;
    } else if (d >= 3 && d < 7) {
      return d * 40 - 20;
    }
  }



  function baseCost(days, rate) {
    return days * rate;
  }
  
  function discountRate(days) {
    if ( days >= 7 ) {
      return 50;
    }
    else if ( days >= 3 ) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
  }