function isIsogram(str){
    //...
    str = str.toLowerCase();
    if (str.length === 0) {
      return true;
    }
    for (let i = 0; i < str.length; i++) {
      for (let j = i+1; j < str.length; j++) {
        if (str[i] === str[j]){
          return false;
        }
      }
    }
    return true;
  }
  
  function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }

  function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
  }