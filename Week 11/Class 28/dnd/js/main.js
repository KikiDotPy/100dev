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
        console.log(data.subclasses)
        // loop through array and take each of the obj
        data.subclasses.forEach( obj => {
            // create an li
            const li = document.createElement('li')
            // put the sub name into li
            li.textContent = obj.name
            // append li to ul
            document.querySelector('ul').appendChild(li)
        });
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

