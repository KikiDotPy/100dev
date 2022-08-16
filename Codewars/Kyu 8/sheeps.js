function warnTheSheep(queue) {
    const len = queue.length
    if (queue[len - 1] === "wolf") {
      return "Pls go away and stop eating my sheep"
    }
    let sheepToWarn = 0;
    for (let i = len - 1; i >= 0; i--){
      sheepToWarn++;
      if (queue[i] === "wolf") {
        return `Oi! Sheep number ${sheepToWarn - 1}! You are about to be eaten by a wolf!`   
      }
    }

    function warnTheSheep(queue) {
        const position = queue.reverse().indexOf('wolf');
        return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
      }