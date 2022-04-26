document.getElementById("cozy").onclick = bgCozy;
document.getElementById("calm").addEventListener("click", bgCalm);
document.getElementById("chill").addEventListener("click", bgChill);

function bgCozy() {
    document.querySelector("body").style.backgroundImage = "url(https://images.unsplash.com/photo-1559235387-25d3011f5ba8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"
    document.querySelector("body").style.backgroundSize = "cover"
    document.querySelector("body").style.backgroundRepeat = "no-repeat"
}

function bgCalm() {
    document.querySelector("body").style.backgroundImage = "url(https://images.unsplash.com/photo-1588066080712-b972871ee36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80)"
    document.querySelector("body").style.backgroundSize = "cover"
    document.querySelector("body").style.backgroundRepeat = "no-repeat"
}

function bgChill() {
    document.querySelector("body").style.backgroundImage = "url(https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"
    document.querySelector("body").style.backgroundSize = "cover"
    document.querySelector("body").style.backgroundRepeat = "no-repeat"
}