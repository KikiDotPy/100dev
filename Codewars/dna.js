function DNAStrand(dna){
    //your code here
    let newStr = "";
    for (let i = 0; i < dna.length; i++){
      if (dna[i] === "A"){
        newStr += "T";
      } else if (dna[i] === "T"){
        newStr += "A";
      } else if (dna[i] === "C") {
        newStr += "G";
      } else if (dna[i] === "G") {
        newStr += "C";
      }
    }
    return newStr;
  }


  let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);