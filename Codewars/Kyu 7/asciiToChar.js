function convert(number){
    // ...Convert integers given as string into ASCII uppercase letters...
    const ascii = number.match(/.{1,2}/g);
    const convertedChars = ascii.map (digit => String.fromCharCode(digit))
    
    return convertedChars.join('')
  }

  