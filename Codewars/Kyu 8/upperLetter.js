function abbrevName(name){
    const nameArr = name.split(' ');
    const firstName = nameArr[0]
    const surname = nameArr[1]
    
    return `${firstName[0].toUpperCase()}.${surname[0].toUpperCase()}`
  
      // code away
  
  }


  function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }


  function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}