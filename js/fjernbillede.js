//Fjern Billede
var deleteBtn = document.querySelectorAll(".deleteBtn")
for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteImage);
}

function deleteImage() {
  console.log("Button Clicked");

}
