function datingRange(age){
    //return min-max
    let min, max;
    
    if (age <= 14) {
      min = Math.floor(age - 0.10 * age)
      max = Math.floor(age + 0.10 * age)
    } else {
        
      min = Math.floor((age / 2) + 7);
      max = Math.floor((age - 7) * 2);
      
    }
  
    return `${min}-${max}`
  }


  function datingRange(age){
    return `${min(age)}-${max(age)}`;
    
    function min(age) {
      return Math.floor(age > 14 ? (age / 2) + 7 : age - 0.10 * age);
    }
    
    function max(age) {
      return Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
    }
  }

  function datingRange(age){
    var min = age > 14 ? age/2 + 7 : age - (0.10 * age);
    var max = age > 14 ? (age-7)*2 : age + (0.10 * age);
    
    return Math.floor(min) + "" + '-' + Math.floor(max) + ""
  }