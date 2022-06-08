function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let sum = 0;
    arrayOfSheep.forEach((e) => (!e) ? 0 : sum++);
    return sum;
  }