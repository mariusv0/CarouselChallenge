//Slider
var wrapper = document.querySelector('.wrapper');

if (window.innerWidth < 700) {
    function scrollL() {
        wrapper.scrollLeft -= 272;
    }
    
    function scrollRight() {
        wrapper.scrollLeft += 272;
    }
  } else {
    function scrollL() {
        wrapper.scrollLeft -= 948;
    }
    
    function scrollRight() {
        wrapper.scrollLeft += 948;
    }
  }
  var billede = document.querySelector('.img');
  billede.addEventListener("click", navngivBillede);

  function navngivBillede() {
    var txt;
    var navn = prompt("Navngiv billedet:", "");
    if (navn == null || navn == "") {
      txt = "Du annulerede";
    } else {
      txt = navn;
    }
    document.querySelector("li h3").innerHTML = txt;
  }

//LazyLoad
let lazyImages = [...document.querySelectorAll('li img .img')]
let inAdvance = 300

function lazyLoad() {
    lazyImages.forEach(image => {
        if ( image.offsetTop < window.innerWidth + window.pageXOffset + inAdvance) {
            image.src = image.dataset.src
        }
    })
}

lazyLoad()

window.addEventListener('scroll', _.throttle(lazyLoad, 50))
window.addEventListener('resize', _.throttle(lazyLoad, 50))