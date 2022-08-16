// return masked string
function maskify(cc) {
    if (cc.length < 4){
      return cc
    }
    const ccLen = cc.length - 4
    const ccFourDigit = cc.split("").splice(cc.length-4, cc.length).join("")
    return `${'#'.repeat(ccLen)}${ccFourDigit}`
  }
  
  function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }  