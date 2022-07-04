function filter_list(l) {
    // Return a new array with the strings filtered out
    let nums = [];
    for (num of l) {
      if (typeof(num) === "number") {
        nums.push(num);
      }
    }
    return nums;
  }


  function filter_list(l) {
    return l.filter(n => typeof(n) === "number");
  }