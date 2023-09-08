let amount = 0;

const decbutton = document.getElementById("decbutton");

function add() {
    amount++;
    if (amount < 10) {
        document.getElementById("amount").innerHTML = "0" + amount;
    }
    else {
        document.getElementById("amount").innerHTML = amount;
    }
}

decbutton.addEventListener("click", decrease);

function decrease() {
    if (amount > 0) {
        amount--;
    }
    
    if (amount < 10) {
        document.getElementById("amount").innerHTML = "0" + amount;
    }
    else if (amount) {
        document.getElementById("amount").innerHTML = amount;
    }
}




