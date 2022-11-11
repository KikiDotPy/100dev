
// put event listener to element choice and let it call a function
document.getElementById("blue").onclick = first;
document.getElementById("green").onclick = second;
document.getElementById("yellow").onclick = third;
document.getElementById("orange").onclick = fourth;
document.getElementById("red").onclick = fifth;



// create the function with the desired output
function first() {
    document.querySelector("body").style.backgroundColor = "rgba(171, 197, 223)";
    document.querySelector("body").style.color = "white";
}

function second() {
    document.querySelector("body").style.backgroundColor = "rgba(199, 233, 204)";
    document.querySelector("body").style.color = "white";
}

function third() {
     document.querySelector("body").style.backgroundColor = "rgba(245, 238, 196)";
     document.querySelector("body").style.color = "white";
}

function fourth() {
    document.querySelector("body").style.backgroundColor = "rgba(236, 204, 170)";
    document.querySelector("body").style.color = "white";
}

function fifth() {
    document.querySelector("body").style.backgroundColor = "rgba(235, 171, 168)";
    document.querySelector("body").style.color = "white";
}
