//Create a function that grabs the number of snacks from the input and tells you to stop that 
//many times

document.querySelector('#help').addEventListener('click', noSnack)

function noSnack() {
    const input = Number(document.querySelector('input').value);
    for(let i = 0; i < input; i++) {
        document.querySelector('#stops').innerText += " Stop Snacking!!!";
    }
}
