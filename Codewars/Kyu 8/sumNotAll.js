function sumArray(array) {
    if (!array || array.length < 3) {
      return 0;
    } else {
      return array.sort((a,b) => a-b).slice(1, -1).reduce((sum,n) => sum + n, 0)
    }
  }

  