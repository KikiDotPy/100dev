document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day === "Tuesday" || day === "Thursday"){
    document.querySelector("#placeToSee").innerHTML = "Class Time!"
  } else if (day === "Saturday" || day === "Sunday") {
    document.querySelector("#placeToSee").innerHTML = "Weekend Finally!!!"
  } else {
    document.querySelector("#placeToSee").innerHTML = "Booooring.."
  }

}
