var addImgBtn = document.getElementById("addImgBtn")
addImgBtn.addEventListener("click", addImg)

function addImg() {

    var imgUrl = prompt("Skriv linket til billedet:", "");
    if (!imgUrl) {
      alert("Du skrev ikke en URL ind")
      console.log("Du skrev ikke en URL ind")
      return;
    }


    var imgNode = document.createElement("img");
    imgNode.setAttribute("src", "")
    imgNode.dataset.src = imgUrl;
    imgNode.classList.add("img", "lazy")

    var countNode = document.createElement("h3");
    var newNumber = document.querySelectorAll('.img').length + 1;
    console.log(document.querySelectorAll('.img').length)
    var countText = document.createTextNode(newNumber);
    countNode.appendChild(countText);

    var subNode = document.createElement("h4");
    var subText = document.createTextNode("Klik på billedet for at ændre navnet");
    subNode.appendChild(subText);

    var liNode = document.createElement("li");

    liNode.appendChild(imgNode);
    liNode.appendChild(countNode);
    liNode.appendChild(subNode);
    document.getElementById("list").appendChild(liNode);

    lazyLoading(document.querySelector(".wrapper"))
  }

console.log("Tilføjbillede JS loaded")