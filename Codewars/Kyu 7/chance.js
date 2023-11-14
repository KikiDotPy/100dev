function getChance(n, x, a){
    let chance = 1;
    while (a > 0) {
        chance = (n - x) / n * chance;
        n--;
        a--;
    }
    return Math.round(chance * 100) / 100;
}