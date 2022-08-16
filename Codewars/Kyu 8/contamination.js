function contamination(text, char){
    // Code here ;)
    if (!text || !char) 
      return ""
    else
      return char.repeat(text.length)
  }

  function contamination(text, char){
    return char.repeat(text.length)
  }

  function contamination(text, char){
    return text.replace(/./g, char);
  }