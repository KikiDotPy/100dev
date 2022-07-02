// Write the code, one line for each action:

// Create an empty object user.
let user = {};
// Add the property name with the value John.
user.name = "John";
// Add the property surname with the value Smith.
user.surname = "Smith";
// Change the value of the name to Pete.
user.name = "Pete";
console.log(user);
// Remove the property name from the object.
delete user.name;

console.log(user);

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
    for (prop in obj){
        return false;
    } 
    return true;
}

//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above. If salaries is empty, then the result must be 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (salarie in salaries) {
    sum += salaries[salarie];
}
console.log(sum);