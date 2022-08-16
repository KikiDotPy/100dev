const isValid = query => {
    return query.match(/\w+(?=:)/g).every(filter => FILTERS.includes(filter))
  }


  const isValid = query => {
    const filters = query.split(' ').filter(f => f.includes(':'));
    for(let filter of filters) {
      let filterName = filter.split(':')[0];
      if(!FILTERS.includes(filterName)) {return false};
    }
    return true;
  }