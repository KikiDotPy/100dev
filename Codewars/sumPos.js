function positiveSum(arr) {
    return arr.reduce((sum, x) => (x > 0) ? sum += x : sum += 0, 0);
  }