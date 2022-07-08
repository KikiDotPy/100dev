function mergeArrays(arr1, arr2) {
    const arr3 = arr1.concat(arr2);
    const noDuplicate = [...new Set(arr3)]
    return noDuplicate.sort((a,b) => a - b);
  }


  function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
  }


  function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b)
  }