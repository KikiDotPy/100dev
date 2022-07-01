function sumMix(x){
    return x.reduce((sum, el) => sum += Number(el), 0);
  }

  function sumMix(x){
    return x.reduce((sum, el) => sum += +el, 0);
  } 