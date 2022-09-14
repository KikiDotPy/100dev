//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://animechan.vercel.app/api/random'
  let animeName = ''

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)
        animeName = data.anime
        document.getElementById('animeName').innerHTML = data.anime
        document.getElementById('charName').innerHTML = `-- ${data.character}`
        document.getElementById('quote').innerHTML = `"${data.quote}"`

        console.log(animeName) 
        let imageurl = `https://www.mediawiki.org/w/index.php?title=Special:Redirect/file/${animeName}.jpg&width=200&height=200`
        let img = document.getElementById('animeImage');
        img.setAttribute('src', imageurl)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    

}

