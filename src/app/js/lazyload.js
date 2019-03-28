lazyLoading(document)

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

console.log("Lazyload JS loaded")