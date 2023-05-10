var cubeChecker = function(volume, side){
    return volume > 0 ? side*side*side === volume : false;
  };