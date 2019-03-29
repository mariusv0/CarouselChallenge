var right = document.getElementById("right");
var left = document.getElementById("left");

right.addEventListener("click", scrollRight);
left.addEventListener("click", scrollL);

var wrapper = document.querySelector(".wrapper");
var list = document.getElementById("list");

var animation = [
  { transform: "translateX(" + (wrapper.clientWidth + 16) + "px)" }
];

var animationTiming = {
  duration: 350,
  fill: "forwards",
  easing: "ease-in-out"
};

var oldPosition = 0;

function scrollL() {
  var scrollLength = oldPosition + (wrapper.clientWidth + 16);

  console.log("%i -> %i", oldPosition, scrollLength);

  var left = list.animate(
    {
      transform: [
        "translateX(" + oldPosition + "px)",
        "translateX(" + scrollLength + "px)"
      ]
    },
    animationTiming
  );

  left.onfinish = function() {
    oldPosition = scrollLength;
  };
}



function scrollRight() {
  var scrollLength = oldPosition - (wrapper.clientWidth + 16);

  console.log("%i -> %i", oldPosition, scrollLength);

  var right = list.animate(
    {
      transform: [
        "translateX(" + oldPosition + "px)",
        "translateX(" + scrollLength + "px)"
      ]
    },
    animationTiming
  );

  right.onfinish = function() {
    oldPosition = scrollLength;
  };

  
}


console.log("Slider JS loaded");

var resizeTimeout;
var list = document.getElementById("list");

window.addEventListener("resize", function(e) {
  if (resizeTimeout !== null) {
    clearTimeout(resizeTimeout);
  }

  resizeTimeout = setTimeout(function() {
    resizeTimeout = null;
    oldPosition = 0;

    // wrapper.scrollLeft = 0;
    list.animate(
      {
        transform: ["translateX(" + 0 + "px)", "translateX(" + 0 + "px)"]
      },
      animationTiming
    );
  }, 100);
});

console.log("Resizing JS loaded");
