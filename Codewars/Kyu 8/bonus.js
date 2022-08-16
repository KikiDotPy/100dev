function bonusTime(salary, bonus) {
    // your code here
      return `\u00A3${bonus ? salary * 10 : salary}`
    }


    const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;