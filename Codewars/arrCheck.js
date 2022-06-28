function check(a, x) {
    // your code here
    let result = false;
    for (el of a){
      (el === x) ? result = true : result;
    }
    return result;
  }


  function check(a,x){
    return a.includes(x);
  };