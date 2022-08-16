function capitalizeWord(word) {
    let arr = word.split("");
    arr[0] = arr[0].toUpperCase()
    return arr.join("")
  }



  function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());