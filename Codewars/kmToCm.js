const cockroachSpeed = s => Math.floor(s / 0.036);


function cockroachSpeed(s) {
    const secsInHour = 3600;
    const centimetersInKilometers = 100000;
    
    return Math.floor((s*centimetersInKilometers)/secsInHour);
  }

  function cockroachSpeed(s) {
    //Good Luck!
    const secInHour = 3600
    const cmInKm = 100000
    return Math.floor((s * cmInKm) / secInHour)
  }