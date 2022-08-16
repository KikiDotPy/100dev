class SmallestIntegerFinder {
    findSmallestInt(args) {
      const arr = args.sort((a,b) => a-b)
      return arr[0]
      
    }
  }


  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }


  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }