function stairsIn20(s){
    //your code here
    let sum = 0
    for (let day of s){
      sum += day.reduce((tot,n) => tot + n,0)
    }
    return sum * 20
  }

  // A proper solution
function stairsIn20(a) {
    return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
  }