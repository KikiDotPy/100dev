function index(array, n){
    //your code here
    if ((array.length - 1) < n){
      return -1
    }
    else{
      return Math.pow(array[n], n) 
    }
  }


  const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;



  function index(array, n){
    //your code here
    return array[n] ** n || -1;
  }