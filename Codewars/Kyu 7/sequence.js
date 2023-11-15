var seqlist = function(first,c,l){
    // Thou shalt begin !
      
      const sequence = []
      
      for (let i = first; sequence.length < l; i += c) {
        sequence.push(i)
      }
        
      return sequence
    }
    

    function seqlist(first, c, l) {
        for (var list = []; list.length < l; )
          list.push(first + c * list.length);
        return list;
      }