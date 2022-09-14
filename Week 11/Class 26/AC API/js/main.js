//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const villagerID = getRandomInt(1, 392)
  const url = `https://acnhapi.com/v1/villagers/${villagerID}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('villagerImage').src = data.image_uri
        document.getElementById('hello').innerHTML = `${data['catch-phrase']}! I am ${data.name['name-USen']}, nice to meet you!`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}