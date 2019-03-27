var billeder = document.querySelectorAll('.img');
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

console.log("Navngivning JS loaded")