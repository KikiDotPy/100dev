function validateHello(greetings) {
    const res = /(hello|ciao|salut|hallo|hola|ahoj|czesc)/gi
          
    return res.test(greetings)
   
  }