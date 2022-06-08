function find_average(array) {
    // your code here
    let sum = 0;
    const arrLen = array.length;
    if (arrLen === 0) {
      return 0;
    } else {
      array.forEach((e) => sum += e)
    }
    return sum / arrLen;
  }