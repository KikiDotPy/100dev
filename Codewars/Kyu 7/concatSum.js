function checkConcatenatedSum(x, n) {
    x = Math.abs(x)
    
    return `${x}`
      .split``
      .map(x => Number(x.repeat(n)))
      .reduce((a,b) => a + b) === x
  }