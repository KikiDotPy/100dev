function bmi(weight, height) {
  
    var bmi  = weight/(height*height);
    
     return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
    
    }

    function bmi (weight, height) {
        const bmi = weight / (height * height);
        
        if (bmi <= 18.5) {
         return 'Underweight'
        } else if (bmi <= 25.0) {
          return 'Normal'
        } else if (bmi <= 30.0) {
          return 'Overweight'
        } else {
          return 'Obese'
        }
      }