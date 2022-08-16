function accum(s) {
	// your code
  const str = s.split("");
  let newChar = "";
  let newArr = [];
  for (let i = 0; i < str.length; i++){
    if (i === 0){
      newArr.push(str[i]);
      continue;
    }
    for (let j = 0; j < i; j++) {
      if (j === 0) {
        newChar = str[i].toUpperCase();
      }
      newChar += str[i].toLowerCase()
    }
    newArr.push(newChar)
  }
  return newArr.join("-");
}


function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }