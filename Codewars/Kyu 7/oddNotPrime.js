function oddNotPrime(n){
    //your code here
    const oddList = [];
    for (let i = 1; i <= n; i++){
      if (!isPrime(i) && i % 2 !== 0){
        oddList.push(i)
      }
    }
    
    return oddList.length
  }
  
  
  function isPrime(n){
    let isPrime = true;
    
    if (n === 1){
      isPrime = false
    } 
    
    for (let i = 2; i < n; i++){
      if (n % i === 0) {
        isPrime = false;
        break
      }
    }
    return isPrime;
  }


  // 2nd solution

  function isPrime(n) {
	if (n <= 2) return false;
	for (var i = 3; i < n; i++) {
		if (n % i == 0 || n % 2 == 0) return false;
	}
	return true;
}

function oddNotPrime(n){
	var count = 0;
	for (var i = 1; i <= n; i++) {
		if (i % 2 != 0 && !isPrime(i)) count += 1;
	}
	return count;
}