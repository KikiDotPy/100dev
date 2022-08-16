function position(letter){
    //Write your own Code!
      return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
    }


    function position(letter){
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
      }