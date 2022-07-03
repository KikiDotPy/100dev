function getGrade (s1, s2, s3) {
    // Code here
    const average = (s1 + s2 + s3) / 3;
    
    if(average >= 90 && average <= 100){
      return "A";
    } else if (average >= 80 && average < 90) {
          return "B";
      } else if (average >= 70 && average < 80) {
          return "C";
      } else if (average >= 60 && average < 70) {
          return "D";
      } else {
          return "F";
      }
  }



avg = (s1+s2+s3)/3;
if (avg < 60)  return "F";
  else if (avg < 70) return "D";
  else if (avg < 80) return "C";
  else if (avg < 90) return "B";
  else return "A";
}



