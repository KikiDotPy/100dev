function openOrSenior(data){
    // ...
    let members = [];
    for (member of data) {
      let age = member[0];
      let handicap = member[1];
      if (age >= 55 && handicap > 7){
        members.push("Senior");
      } else {
        members.push("Open");
      }
    }
    return members;
  }


  // Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }