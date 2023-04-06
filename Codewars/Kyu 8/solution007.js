const flip=(d, a)=>{
    if (d === 'R'){
      return a.sort((a,b) => a - b)
    }
    return a.sort((a,b) => b - a)
  }


  
const flip2 = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);
  