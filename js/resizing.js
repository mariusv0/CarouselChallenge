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