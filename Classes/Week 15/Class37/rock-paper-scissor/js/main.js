document.getElementById('startBattle').addEventListener('click', evaluate);

async function evaluate() {
  const request = await fetch(' http://localhost:8000/');
    const response = await request.json();
    console.log('clicked')
    console.log(response.message);
    // document.getElementById('flipResult').innerHTML = response.message // we will have a message with Head or Tails
}