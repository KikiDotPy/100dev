function findMultiples(integer, limit) {
    //your code here
    let numbers = []
    for (let i = integer; i <= limit; i++){
      numbers.push(i);
    }
    return numbers.filter(n => n % integer === 0)
    
  }

  function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }