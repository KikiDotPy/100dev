//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
    
    const date = document.querySelector('input').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.hdurl;
            document.querySelector('h2').innerHTML = data.title;
            document.querySelector('h3').innerHTML = data.explanation;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

// date: "2022-09-14"