
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