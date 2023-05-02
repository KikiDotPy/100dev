function array(string) {
    // TODO
    const arr = string.split(",") 
    const len = arr.length
    
    if (len <= 2) {
      return null
    }
    return arr.slice(1, len-1).join(" ")
  
  }



  function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }