let menuItem = document.getElementById("menu");
let theDisplay = "none";

function menuOpen() {
    if (theDisplay == "none") {
        console.log(menuItem.style.display);
        theDisplay = "block";
        menuItem.style.display='block';
    }
    else {
        menuItem.style.display='none';
        theDisplay = "none";
    }
}