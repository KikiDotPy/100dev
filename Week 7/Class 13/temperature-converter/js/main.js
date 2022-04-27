//Write your pseduo code first! 

// put event listener on a button or element
document.getElementById("check").onclick = convert;
// call a function to convert the value
 function convert() {
     let sel = document.querySelector("#celsius").value;
     sel = sel * 9/5 + 32;
     document.getElementById("placeForValu").innerText = celsius;
 }

// structure function
// put id on the input and take and store the input value in a variable
// do the math in a new variable to convert cel in farh
// put the new value into HTML element

