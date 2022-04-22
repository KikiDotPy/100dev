// create variable to store total
let total;

// create event listener to catch what's happening on the page
document.querySelector("#zero").addEventListener("click", zero);


// create function to respond to event (adding or subtracting numbers)
function zero() {
    total = 0;
    document.querySelector("#total").innerHTML = total;
}