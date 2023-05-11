function multiTable(number) {
    // good luck
    let string = ""
    for (let i = 1; i <= 10; i++){
      if (i == 10) {
        string += `${i} * ${number} = ${i * number}`
      } else {
        string += `${i} * ${number} = ${i * number}\n`  
      }
      
    }
    return string
  }



  const multiTable = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
  
    return table;
  }