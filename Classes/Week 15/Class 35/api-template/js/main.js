//Make an api request using async await

document.getElementById('buttonApi').addEventListener('click', makeAPIRequest);


async function makeAPIRequest() {
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const response = await request.json();
    document.querySelector('img').src = response.message
}

