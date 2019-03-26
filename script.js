
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

//LazyLoad
var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy"));

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
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
  }