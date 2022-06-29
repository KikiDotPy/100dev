function longest(s1, s2) {
    // your code
    let newStr = s1 + s2;
    return newStr.replace(/(.)(?=.*\1)/g, "").split('').sort((a, b) => a.localeCompare(b)).join('');
  }


  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')