var billeder = document.querySelectorAll(".img");
var billedeList = document.querySelector("ul");
var nodes = document.querySelectorAll("li");

for (var i = 0; i < billeder.length; i++) {
  billeder[i].addEventListener("click", navngivBillede);
}

function navngivBillede(e) {
  if (!e.target) return;

  var txt;
  var navn = prompt("Navngiv billedet:", "");
  if (navn == null || navn == "") {
    txt = "Du annulerede";
  } else {
    txt = navn;
  }
  e.target.parentNode.querySelector("li h3").innerHTML = txt;
}

console.log("Navngivning JS loaded");

var addImgBtn = document.getElementById("addImgBtn");
addImgBtn.addEventListener("click", addImg);

function addImg() {
  var imgUrl = prompt("Skriv linket til billedet:", "");
  if (!imgUrl) {
    alert("Du skrev ikke en URL ind");
    console.log("Du skrev ikke en URL ind");
    return;
  }

  var imgNode = document.createElement("img");
  imgNode.setAttribute("src", "");
  imgNode.dataset.src = imgUrl;
  imgNode.classList.add("img", "lazy");

  var imgName = prompt("Hvad skal billedet hedde?:", "");
  if (!imgName) {
    var nameNode = document.createElement("h3");
    var newNumber = document.querySelectorAll(".img").length + 1;
    console.log(document.querySelectorAll(".img").length);
    var countText = document.createTextNode(newNumber);
    nameNode.appendChild(countText);
  } else {
    var nameNode = document.createElement("h3");
    var countText = document.createTextNode(imgName);
    nameNode.appendChild(countText);
  }

  var subNode = document.createElement("h4");
  var subText = document.createTextNode("Klik på billedet for at ændre navnet");
  subNode.appendChild(subText);

  var liNode = document.createElement("li");

  liNode.appendChild(imgNode);
  liNode.appendChild(nameNode);
  liNode.appendChild(subNode);
  document.getElementById("list").appendChild(liNode);
  imgNode.addEventListener("click", navngivBillede);

  lazyLoading(document.querySelector(".wrapper"));
}

console.log("Tilføjbillede JS loaded");

/*---------------Skal fixes---------------------------- */
/*---------------Skal fixes---------------------------- */
var deleteBtn = document.querySelectorAll(".deleteBtn");
for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteImage);
}

function deleteImage() {
  console.log("Fjern knap trykket");
  console.log(nodes);
  nodes[i].parentNode.removeChild(nodes[i]);
}

console.log("Fjernbillede JS loaded");
/*---------------Skal fixes---------------------------- */
/*---------------Skal fixes---------------------------- */
