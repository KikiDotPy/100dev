function points(games) {
    // your code here
    let tot = 0;
    for (let i = 0; i < 10; i++) {
      let x = Number(games[i][0]);
      let y = Number(games[i][2]);
      if (x > y) {
        tot += 3;
      } else if (x === y) {
        tot += 1
      }
    }
    return tot
  }


  const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)