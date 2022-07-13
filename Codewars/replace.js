function correct(string)
{
  // your code here
  let newStr = ""
  for (let i = 0; i < string.length; i++){
    if (string[i] == "5"){
      newStr += "S";
    } else if (string[i] == "0"){
      newStr += "O";
    } else if (string[i] === "1"){
      newStr += "I";
    } else {
      newStr += string[i]
    }
  }
  return newStr;
}

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
  };
  
  const correct = string => (
    string.replace(/[501]/g, character => corrections[character])
  );