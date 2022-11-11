//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h3').innerText = localStorage.getItem('books')


function getFetch(){
  const input = document.querySelector('input').value
  const choice = input.toLowerCase().replace(' ', '+')
  const url = `http://openlibrary.org/search.json?q=${choice}`
  
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
      if (!localStorage.getItem('books')) {
        localStorage.setItem('books', data.docs[0].title)
      } else {
        let books = localStorage.getItem('books') + ', ' + data.docs[0].title
        localStorage.setItem('books', books)
      }
      document.querySelector('h3').innerText = localStorage.getItem('books')

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

