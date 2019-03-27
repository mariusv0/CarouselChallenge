var deleteBtn = document.querySelectorAll(".deleteBtn")
for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteImage);
}

function deleteImage() {
  console.log("Fjern knap trykket");
  // var billedeList = document.querySelectorAll('.img').length;
  // var billedeFjern = billedeList[i];
  var billedeParent = document.getElementById("wrapper");
  var billedeFjern = document.querySelectorAll("li");
  billedeParent.removeChild(billedeFjern[0]);
  console.log(billedeFjern);

}

console.log("Fjernbillede JS loaded")