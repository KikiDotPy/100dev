//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://animechan.vercel.app/api/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('animeName').innerHTML = data.anime
        document.getElementById('charName').innerHTML = data.character
        document.getElementById('quote').innerHTML = `"${data.quote}"`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

