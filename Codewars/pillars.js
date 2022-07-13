function pillars(numPill, dist, width) {
    // your code here
    if (numPill === 1){
      return 0;
    }

    const distCm = dist * 100;
    const realWidth = (numPill * width) - (width * 2)
    return distCm * (numPill-1) + realWidth
  }

  function pillars(num_pill, dist, width) {
    // your code here
    return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
  }