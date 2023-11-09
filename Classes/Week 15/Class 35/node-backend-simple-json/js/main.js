document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  try {
    const res = await fetch(`/api?student=${userName}`)
    const data = await res.json()
    console.log(data);
   } catch (error) {  
    console.log(error);
   }

  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}