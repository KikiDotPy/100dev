document.getElementById("cozy").onclick = bgCozy;
document.getElementById("calm").addEventListener("click", bgCalm);
document.getElementById("chill").addEventListener("click", bgChill);

function bgCozy() {
    document.querySelector("body").style.backgroundImage = "url(./img/bg3.png)"
    document.querySelector("body").style.backgroundSize = "cover"
    document.querySelector("body").style.backgroundRepeat = "no-repeat"
}