function anyArrows(arrows){
    // arrow it
    return arrows.some( arrow => arrow.damaged ? false : true);
  }


  function anyArrows(arrows){
    return arrows.some(a => !a.damaged);
  }