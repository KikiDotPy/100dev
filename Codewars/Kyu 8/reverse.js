function digitize(n) {
    //code here
    const str = "" + n
    return str.split("").reverse().map(n => +n)
  }


  return String(n).split('').map(Number).reverse()