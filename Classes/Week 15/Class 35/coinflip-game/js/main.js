//Make an api request using async await

document.getElementById('buttonApi').addEventListener('click', makeAPIRequest);


async function makeAPIRequest() {
    const request = await fetch(' http://localhost:8000/');
    const response = await request.json();
    console.log(response.message);
    document.getElementById('flipResult').innerHTML = response.message // we will have a message with Head or Tails
}

