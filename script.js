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

let amongus1 = true;
let amongus2 = true;
let amongus3 = true;
let amongus4 = true;
let amongus5 = true;

function Death(number) {
    if (number == 1) {
        if (amongus1 == true) {
            var killsound = new Audio();
            killsound.src = "kill.mp3";
            killsound.play();
            new Audio().src = "kill.mp3";
            document.getElementById('amongus1').src='dead_body_standing_up.png';
            amongus1 = false;
        }
    }
    else if (number == 2) {
        if (amongus2 == true) {
            var killsound = new Audio();
            killsound.src = "kill.mp3";
            killsound.play();
            new Audio().src = "kill.mp3";
            document.getElementById('amongus2').src='dead_body_standing_up.png';
            amongus2 = false;
        }
    }
    else if (number == 3) {
        if (amongus3 == true) {
            var killsound = new Audio();
            killsound.src = "kill.mp3";
            killsound.play();
            new Audio().src = "kill.mp3";
            document.getElementById('amongus3').src='dead_body_standing_up.png';
            amongus3 = false;
        }
    }
    else if (number == 4) {
        if (amongus4 == true) {
            var killsound = new Audio();
            killsound.src = "kill.mp3";
            killsound.play();
            new Audio().src = "kill.mp3";
            document.getElementById('amongus4').src='dead_body_standing_up.png';
            amongus4 = false;
        }
    }
}