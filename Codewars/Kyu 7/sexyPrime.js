function sexy_prime(x, y){
    for (var i=2; i<x; ++i)
      if (x%i==0)
        return false;
    for (var i=2; i<y; ++i)
      if (y%i==0)
        return false;    
    if (y==1 ||x==1)
      return false;
    return Math.abs(x-y)==6
  }