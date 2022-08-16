function howMuchWater(L,X,N){
    if (N > 2 * X) return "Too much clothes";
    if (N < X) return "Not enough clothes";
    return +(L * 1.1 ** (N - X)).toFixed(2);
  }