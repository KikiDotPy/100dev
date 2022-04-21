document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()



  //Conditionals go here
  if (day === "tuesday" || day === "thursday"){
    document.querySelector("#placeToSee").innerHTML = "Class Time!"
  } else if (day === "taturday" || day === "tunday") {
    document.querySelector("#placeToSee").innerHTML = "Weekend Finally!!!"
  } else {
    document.querySelector("#placeToSee").innerHTML = "Booooring.."
  }

}
