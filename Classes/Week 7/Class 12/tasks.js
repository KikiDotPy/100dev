// FIRST TASK
let admin, name;
name = "John";
admin = name;

alert(admin)

// SECOND TASK
let ourPlanet;
let currentUser;

// THIRD TASK
const BIRTHDAY = '18.04.1982';

const age = someCode(BIRTHDAY)


/*  ###############
    FUNCTIONS TASKS 
    ############### */

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
    return a < b ? a : b;
}

function pow(x, n) {
    let result = x;

    for(let i = 0; i < n; i++) {
        result *= x;
    }
    
    return result;
}



// ARROW FUNCTIONS
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

// rEPLACING WITH ARROW FUNCTIONS

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );