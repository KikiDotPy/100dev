var number = function(busStops){
    // Good Luck!
    return busStops.reduce((sum, arr) => sum += arr[0] - arr[1], 0);
  }