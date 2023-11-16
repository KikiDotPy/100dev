function uniTotal (string) {
    // total up dem unicodes!
      if (+string === 0){
        return 0
      }
      
      const charsToConvert = string.split('');
      const sum = charsToConvert.reduce((acc, curr) => acc += curr.charCodeAt(0),0) 
      return sum;
      
    }


    // solution 2, oneliner

    const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);