function repeatNinjaImage() {
    setTimeout(function () {
        document.getElementById("ninja").src = "ninjasad.jpg";
        setTimeout(function () {
            document.getElementById("ninja").src = "ninja.jpg";
            repeatNinjaImage(); // Repeat the function
        }, 200);
    }, 10000);
}

// Call the function to start the infinite repetition
repeatNinjaImage();

function menuOpen() {
    document.getElementById("menu").classList.toggle("visible");
} 