function periodIsLate(last, today, cycleLength) {
    const differenceMilliseconds = today - last
    const differenceDays = Math.ceil(differenceMilliseconds / (1000 * 3600 * 24))
    return differenceDays > cycleLength ;
  }
  