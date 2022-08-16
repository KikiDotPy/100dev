function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }

  function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    const average = (yourPoints + (classPoints.reduce( (a, b) => a + b))) / classPoints.length;
    return average <= yourPoints ? true : false;
  }