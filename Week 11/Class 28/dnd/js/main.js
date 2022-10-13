//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const input = document.querySelector('input').value
  const choice = input.toLowerCase().replace(' ', '-')
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerHTML = data.name;
        document.querySelector('h3').innerHTML = data[classes];
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

