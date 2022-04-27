// Mood selector
document.getElementById("cozy").onclick = bgCozy;
document.getElementById("calm").addEventListener("click", bgCalm);
document.getElementById("chill").addEventListener("click", bgChill);
// Drink selector
document.getElementById("coffee").addEventListener("click", coffeeIcon)
document.getElementById("tea").addEventListener("click", teaIcon);
document.getElementById("cocktail").addEventListener("click", cocktailIcon);

function bgCozy() {
    document.querySelector("body").style.backgroundImage = "url(https://images.unsplash.com/photo-1559235387-25d3011f5ba8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"
    document.querySelector("body").style.backgroundSize = "cover"
    document.querySelector("body").style.backgroundRepeat = "no-repeat"
    document.getElementById("drink").style.display = "flex"
    document.querySelector("#vibe").classList.add("left")
    document.querySelector("#drink").classList.add("left")
    // coffee position
    document.querySelector("#coffeeImg").style.width = "19%";
    document.querySelector("#coffeeImg").style.right = "490px";
    document.querySelector("#coffeeImg").style.bottom = "-10px";
    // tea position
    document.querySelector("#teaImg").style.width = "20%";
    document.querySelector("#teaImg").style.right = "-50px";
    document.querySelector("#teaImg").style.bottom = "100px";
    // cocktail position
    document.querySelector("#cocImg").style.width = "35%";
    document.querySelector("#cocImg").style.right = "250px";
    document.querySelector("#cocImg").style.bottom = "-70px";
}

function bgCalm() {
    document.querySelector("body").style.backgroundImage = "url(https://images.unsplash.com/photo-1588066080712-b972871ee36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80)"
    document.querySelector("body").style.backgroundSize = "cover"
    document.querySelector("body").style.backgroundRepeat = "no-repeat"
    document.getElementById("drink").style.display = "flex"
    document.querySelector("#vibe").classList.add("left")
    document.querySelector("#drink").classList.add("left")
    // coffee position
    document.querySelector("#coffeeImg").style.width = "35%";
    document.querySelector("#coffeeImg").style.right = "-50px";
    document.querySelector("#coffeeImg").style.bottom = "-50px";
    // tea position
    document.querySelector("#teaImg").style.width = "45%";
    document.querySelector("#teaImg").style.right = "190px";
    document.querySelector("#teaImg").style.bottom = "10px";
    // cocktail position
    document.querySelector("#cocImg").style.width = "60%";
    document.querySelector("#cocImg").style.right = "-20px";
    document.querySelector("#cocImg").style.bottom = "-105px";
    document.querySelector("#cocImg").style.zIndex = "-2";

}

function bgChill() {
    document.querySelector("body").style.backgroundImage = "url(https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"
    document.querySelector("body").style.backgroundSize = "cover"
    document.querySelector("body").style.backgroundRepeat = "no-repeat"
    document.getElementById("drink").style.display = "flex"
    document.querySelector("#vibe").classList.add("left")
    document.querySelector("#drink").classList.add("left")
    // coffee position
    document.querySelector("#coffeeImg").style.width = "25%";
    document.querySelector("#coffeeImg").style.right = "150px";
    document.querySelector("#coffeeImg").style.bottom = "2px";
    // tea position
    document.querySelector("#teaImg").style.width = "30%";
    document.querySelector("#teaImg").style.right = "300px";
    document.querySelector("#teaImg").style.bottom = "50px";
    document.querySelector("#teaImg").style.zIndex = "-1";
    // cocktail position
    document.querySelector("#cocImg").style.width = "40%";
    document.querySelector("#cocImg").style.right = "-80px";
    document.querySelector("#cocImg").style.bottom = "-20px";
    document.querySelector("#cocImg").style.zIndex = "-2";
}

function coffeeIcon() {
    document.querySelector("#coffeeImg").classList.toggle("hide")
}

function teaIcon() {
    document.querySelector("#teaImg").classList.toggle("hide")
}

function cocktailIcon() {
    document.querySelector("#cocImg").classList.toggle("hide")
}
