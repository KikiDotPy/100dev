function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the 
    //given DNA sequence
    if (dna.length !== 0){
      return dna.replace(/T/gi, "U");
    } else {
      return "";
    }
  }

  function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }