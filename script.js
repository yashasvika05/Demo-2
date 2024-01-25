window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var scrollPosition = window.scrollY;

    // Adjust this value to control when the color change should occur
    var scrollThreshold = 100;

    if (scrollPosition >= scrollThreshold) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; /* Transparent black */
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0)"; /* Transparent */
    }
});
