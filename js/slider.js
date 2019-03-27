
var right = document.getElementById("right")
var left = document.getElementById("left")

right.addEventListener("click", scrollRight)
left.addEventListener("click", scrollL)

var wrapper = document.querySelector('.wrapper');

var animation = [
  { transform: 'translateX(20%)' },
  { transform: 'translateY(0)' } 
];

var animationTiming = {
  duration: 250,
  iterations: 1
}

var animationLeft = [
  { transform: 'translateX(-20%)' },
  { transform: 'translateY(0)' } 
];

    function scrollL() {
        var scrollLength = wrapper.clientWidth + 16;
        wrapper.scrollLeft -= scrollLength;
        wrapper.animate(animationLeft, animationTiming)
    }
    
    function scrollRight() {
        var scrollLength = wrapper.clientWidth + 16;
        wrapper.scrollLeft += scrollLength;
        wrapper.animate(animation, animationTiming)
    }

console.log("Slider JS loaded")