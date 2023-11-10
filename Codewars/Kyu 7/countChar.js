function count (string) {  
    var count = {};
    string.split('').forEach(char => count[char] ? count[char]++ : count[char] = 1);
    
    return count;
  }