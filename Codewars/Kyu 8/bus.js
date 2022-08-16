function enough(cap, on, wait) {
    // your code here
    const tot = on + wait
    if (tot <= cap) {
      return 0;
    }
    return Math.abs(cap - tot)
  
  }


  function enough(cap, on, wait) {
    if (on + wait < cap){
    return 0;
    } else {
    return (on + wait) - cap;
    }
  }