function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    const num = Math.sqrt(sq);
    if (Number.isInteger(num)) {
      while (sq) {
        sq++;
        if (Number.isInteger(Math.sqrt(sq))){
          return sq;
        } else {
          continue;
        }
      }
      
    }
    return -1;
  }