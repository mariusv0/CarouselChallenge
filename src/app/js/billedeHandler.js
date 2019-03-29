import lazyLoading from './lazyload';

var billeder = document.querySelectorAll(".img");

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
var inputFields = document.querySelector(".inputfields");
var inputSubmit = document.getElementById("imgSubmit")

function addImg() {

  if (inputFields.style.display == "none"){
    inputFields.style.display = "block";
  } else {
    inputFields.style.display = "none";
  }
  // var imgUrl = prompt("Skriv linket til billedet:", "");
  // if (!imgUrl) {
  //   alert("Du skrev ikke en URL ind");
  //   console.log("Du skrev ikke en URL ind");
  //   return;
  // }
  inputSubmit.addEventListener("click", function (){
  var imgUrl = document.getElementById("imgUrl").value;
  if (!imgUrl) {
    imgUrl = "https://media.licdn.com/dms/image/C510BAQEVyP3a3AfYYQ/company-logo_200_200/0?e=2159024400&v=beta&t=IJsT9TJ-Npycia49sVzcmPskhMovCCNZsxFZKz32RGU";
  }


  var imgNode = document.createElement("img");
  imgNode.setAttribute("src", "");
  imgNode.dataset.src = imgUrl;
  imgNode.classList.add("img", "lazy");

  var imgName = document.getElementById("imgName").value;

  // var imgName = prompt("Hvad skal billedet hedde?:", "");
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

  var subBtnText = document.createTextNode("Fjern");
  var subBtn = document.createElement("div");
  subBtn.classList.add("deleteBtn");
  subBtn.appendChild(subBtnText);
  subBtn.addEventListener("click", deleteImage);


  var liNode = document.createElement("li");

  liNode.appendChild(imgNode);
  liNode.appendChild(nameNode);
  liNode.appendChild(subNode);
  liNode.appendChild(subBtn);
  document.getElementById("list").appendChild(liNode);
  imgNode.addEventListener("click", navngivBillede);
  console.log("Billede tilføjet med navn:", countText)

  document.getElementById("imgUrl").value = "";
  document.getElementById("imgName").value = "";

  lazyLoading(document.querySelector(".wrapper"));
  }
  )
  
  
}

console.log("Tilføjbillede JS loaded");

var deleteBtn = document.querySelectorAll(".deleteBtn");
for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteImage);
}

function deleteImage(e) {
  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}

console.log("Fjernbillede JS loaded");