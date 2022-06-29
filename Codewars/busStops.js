var number = function(busStops){
    // Good Luck!
    return busStops.reduce((sum, arr) => sum += arr[0] - arr[1], 0);
  }

  const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);