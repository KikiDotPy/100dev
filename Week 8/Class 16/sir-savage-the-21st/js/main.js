//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function tNum() {
    const n = 21;
    for (i = 0; i < 21; i++) {
        console.log(n)
    }
}

tNum()
//Bonus can you make it print '21' 21 times to the dom?
function tNum() {
    document.querySelector('#savageSays').innerText += ' 21'
}