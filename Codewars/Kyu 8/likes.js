function likes(names) {
    // TODO
    const length = names.length
    if (length === 0){
      return "no one likes this"
    } else if (length === 1) {
        return names[0] + " likes this";
    } else if (length === 2) {
        const first = names.slice(0,2).join(" and ")
        return first + " like this"
    } else if (length === 3) {
        const first = names.slice(0,2).join(", ")
        return first + " and " + names[2] + " like this"
    }
    const first = names.slice(0,2).join(", ")
    return first + " and " + (length - 2) + " others like this" 
  }


  function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }


  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}