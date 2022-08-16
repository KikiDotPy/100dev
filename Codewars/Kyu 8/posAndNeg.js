function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0){
      return [];
    } else {
      let posNums = 0;
      let negNums = 0;
      input.forEach((e) => (e <= 0) ? negNums +=e : posNums++)
      return [posNums, negNums];
    }
  }