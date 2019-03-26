
var right = document.getElementById("right")
var left = document.getElementById("left")

right.addEventListener("click", scrollRight)
left.addEventListener("click", scrollL)
//Slider
var wrapper = document.querySelector('.wrapper');

    function scrollL() {
        var scrollLength = wrapper.clientWidth + 16;
        wrapper.scrollLeft -= scrollLength;
    }
    
    function scrollRight() {
        var scrollLength = wrapper.clientWidth + 16;
        wrapper.scrollLeft += scrollLength;
    }

//Navngiv Billede
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

var resizeTimeout;

window.addEventListener("resize", function(e) {
    if (resizeTimeout !== null) {
        clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        console.log(e);
        wrapper.scrollLeft = 0;
    }, 500);
});

var addImgBtn = document.getElementById("addImgBtn")
addImgBtn.addEventListener("click", addImg)

function addImg() {

    var imgUrl = prompt("Skriv linket til billedet:", "");
    if (!imgUrl) return;


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
    document.querySelector(".wrapper").appendChild(liNode);

    lazyLoading(document.querySelector(".wrapper"))
  }

lazyLoading(document)

//LazyLoad
function lazyLoading(view){
    var lazyBackgrounds = [].slice.call(view.querySelectorAll(".lazy"));

  if ("IntersectionObserver" in window) {
    var lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var lazyImg = entry.target;
            lazyImg.src = lazyImg.dataset.src;
            lazyImg.classList.remove("lazy");
          lazyBackgroundObserver.unobserve(lazyImg);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  } else {
      console.warn("IntersectionObserver not supported")
  }
}