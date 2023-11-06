setTimeout(function() {
    var div = document.getElementById("header");
    div.style.opacity = 1; // Change opacity to 1 (fully visible)
}, 3400); // Wait for 2 seconds (2000 milliseconds) before changing opacity

const cover = document.getElementById('cover');

        // Change the z-index to a higher value after 2 seconds
        setTimeout(function () {
            cover.style.zIndex = 100;
        }, 1);

        // Revert the z-index back to the original value after 4 seconds
        setTimeout(function () {
            cover.style.zIndex = 0;
        }, 4000);