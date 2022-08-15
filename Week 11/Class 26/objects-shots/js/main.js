//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {

    let drink = document.querySelector('input').value.trim()

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)
        




        for (let i = 0; i < data['drinks'].length; i++){
            setTimeout(function timer() {
                document.querySelector('h2').innerText = data.drinks[i].strDrink
                document.querySelector('img').src = data.drinks[i].strDrinkThumb
                document.querySelector('h3').innerText = data.drinks[i].strInstructions
              }, i * 3000)
        }
    })
    .catch(err => {
        console.log('error ' + err)
    })

}

