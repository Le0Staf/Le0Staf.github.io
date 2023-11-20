//-------------------------------------------------Calculator-------------------------------------------------//


function CloseCalculator() {
    document.getElementById("calculator").classList.toggle("visible");
}

function OpenCalculator() {
    if (!document.getElementById("calculator").classList.contains("visible")) {
    document.getElementById("calculator").classList.toggle("visible")
    }
}

let calculatorIsMaximized = 0;

function MaximizeCalculator() {
    if (calculatorIsMaximized == 0) {
        document.getElementById("calculator").style.top = "0";
        document.getElementById("calculator").style.left = "0";
        document.getElementById("calculator").style.width = "100%";
        document.getElementById("calculator").style.height = "100%";

        document.getElementById("calculator-header").style.height = "2.7%";
        document.getElementById("calculator-minimize").style.width = "2.7vw";
        document.getElementById("calculator-fullscreen").style.width = "2.7vw";
        document.getElementById("calculator-close").style.width = "2.7vw";

        document.getElementById("left-calculator-nav").style.marginLeft = "0.5%";
        document.getElementById("calculator-burger").style.marginLeft = "1%";
        document.getElementById("calculator-header2").style.height = "1.5%";
        document.getElementById("calculator-backspace").style.width = "1.5vw";
        document.getElementById("calculator-divide").style.width = "1.2vw"

        calculatorIsMaximized = 1;
    }
    else if (calculatorIsMaximized == 1) {
        document.getElementById("calculator").style.top = "15%";
        document.getElementById("calculator").style.left = "23%";
        document.getElementById("calculator").style.width = "19.55%";
        document.getElementById("calculator").style.height = "55.5%";

        document.getElementById("calculator-header").style.height = "5%"
        document.getElementById("calculator-minimize").style.width = "2.7vw"
        document.getElementById("calculator-fullscreen").style.width = "2.7vw"
        document.getElementById("calculator-close").style.width = "2.7vw"
        document.getElementById("left-calculator-nav").style.marginLeft = "0.5%";
        document.getElementById("calculator-burger").style.marginLeft = "4%";
        document.getElementById("calculator-header2").style.height = "8%";
        document.getElementById("calculator-backspace").style.width = "1.2vw";
        document.getElementById("calculator-divide").style.width = "1vw"

        calculatorIsMaximized = 0;
    }
}

//-----Calculator Calculate-----//

let calculatorNumberCap = 10;

let calculatorValue = 0;
let secondCalculatorValue = 0;

let calculatorIsValue = 1;

let calculatorAddition = false;
let calculatorSubtraction = false;
let calculatorDivision = false;
let calculatorMultiplication = false;

let calculatorChangeToDecimal = false;
let calculatorDecimalDivideBy = 10;

let calculatorHasBeenEqual = false;

function UpdateCalculator() {
    if (calculatorIsValue == 1) {
        document.getElementById("calculator-output").innerHTML = Math.round(calculatorValue * 1e10) / 1e10;
    }
    else if (calculatorIsValue == 2) {
        document.getElementById("calculator-output").innerHTML = secondCalculatorValue;
    }
}

function CalculatorChangeToDecimal() {
    if (calculatorHasBeenEqual == false) {
        calculatorChangeToDecimal = true;
    }
    else if (calculatorHasBeenEqual == true) {
        CalculatorReset();
        calculatorChangeToDecimal = true;
        calculatorHasBeenEqual = false;
    }

}

function CalculatorNumber(number) {
    if (calculatorChangeToDecimal == true) {
        if (calculatorIsValue == 1) {
            calculatorValue = calculatorValue + (number / calculatorDecimalDivideBy);
            calculatorDecimalDivideBy = calculatorDecimalDivideBy * 10;
            UpdateCalculator();
        }
        else if (calculatorIsValue == 2) {
            secondCalculatorValue = secondCalculatorValue + (number / calculatorDecimalDivideBy);
            calculatorDecimalDivideBy = calculatorDecimalDivideBy * 10;
            UpdateCalculator();
        }
    }
    else if (calculatorChangeToDecimal == false) {
        if (calculatorIsValue == 1 && calculatorHasBeenEqual == false) {
            calculatorValue = calculatorValue * 10;
            calculatorValue = calculatorValue + number;
            UpdateCalculator();
        }
        else if (calculatorIsValue == 2 && calculatorHasBeenEqual == false) {
            secondCalculatorValue = secondCalculatorValue * 10;
            secondCalculatorValue = secondCalculatorValue + number;
            UpdateCalculator();
        }
        else if (calculatorIsValue == 1 && calculatorHasBeenEqual == true) {
            CalculatorReset();
            calculatorHasBeenEqual = false;
            calculatorValue = calculatorValue * 10;
            calculatorValue = calculatorValue + number;
            UpdateCalculator();
        }
        else if (calculatorIsValue == 2 && calculatorHasBeenEqual == true) {
            CalculatorReset();
            calculatorHasBeenEqual = false;
            secondCalculatorValue = secondCalculatorValue * 10;
            secondCalculatorValue = secondCalculatorValue + number;
            UpdateCalculator();
        }
    }
}

function CalculatorAddition() {
    calculatorHasBeenEqual = false;
    if (calculatorSubtraction == true) {
        calculatorValue = calculatorValue - secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorSubtraction = false;
        calculatorAddition = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorDivision == true) {
        calculatorValue = calculatorValue / secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorDivision = false;
        calculatorAddition = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorMultiplication == true) {
        calculatorValue = calculatorValue * secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorMultiplication = false;
        calculatorAddition = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorAddition == true && secondCalculatorValue > 0) {
        calculatorValue = calculatorValue + secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorIsValue == 1) {
        if (calculatorValue > 0) {
            calculatorIsValue = 2;
            calculatorAddition = true;
            calculatorSubtraction = false;
            calculatorDivision = false;
            calculatorDecimalDivideBy = 10;
            calculatorChangeToDecimal = false;
        }
    }
}

function CalculatorSubtraction() {
    calculatorHasBeenEqual = false;
    if (calculatorAddition == true) {
        calculatorValue = calculatorValue + secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorAddition = false;
        calculatorSubtraction = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorDivision == true) {
        calculatorValue = calculatorValue / secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorDivision = false;
        calculatorSubtraction = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorMultiplication == true) {
        calculatorValue = calculatorValue * secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorMultiplication = false;
        calculatorSubtraction = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorSubtraction == true && secondCalculatorValue > 0) {
        calculatorValue = calculatorValue - secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorIsValue == 1) {
        calculatorIsValue = 2;
        calculatorSubtraction = true;
        calculatorAddition = false;
        calculatorDivision = false;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
    }
}

function CalculatorMultiplication() {
    calculatorHasBeenEqual = false;
    if (calculatorAddition == true) {
        calculatorValue = calculatorValue + secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorAddition = false;
        calculatorMultiplication = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorSubtraction == true) {
        calculatorValue = calculatorValue - secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorSubtraction = false;
        calculatorMultiplication = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorDivision == true) {
        calculatorValue = calculatorValue / secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorDivision = false;
        calculatorMultiplication = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorMultiplication == true && secondCalculatorValue > 0) {
        calculatorValue = calculatorValue * secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorIsValue == 1 && calculatorValue > 0) {
        calculatorIsValue = 2;
        calculatorDivision = false;
        calculatorSubtraction = false;
        calculatorAddition = false;
        calculatorMultiplication = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
    }
}

function CalculatorDivision() {
    calculatorHasBeenEqual = false;
    if (calculatorAddition == true) {
        calculatorValue = calculatorValue + secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorAddition = false;
        calculatorDivision = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorSubtraction == true) {
        calculatorValue = calculatorValue - secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorSubtraction = false;
        calculatorDivision = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorDivision == true && secondCalculatorValue > 0) {
        calculatorValue = calculatorValue / secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorMultiplication == true) {
        calculatorValue = calculatorValue * secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorMultiplication = false;
        calculatorDivision = true;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorIsValue == 1 && calculatorValue > 0) {
        calculatorIsValue = 2;
        calculatorDivision = true;
        calculatorSubtraction = false;
        calculatorAddition = false;
        calculatorDecimalDivideBy = 10;
        calculatorChangeToDecimal = false;
    }
}

function CalculatorEquals() {
    calculatorHasBeenEqual = true;
    if (calculatorIsValue == 2 && secondCalculatorValue > 0) {
        if (calculatorAddition == true) {
            calculatorValue = calculatorValue + secondCalculatorValue; 
            secondCalculatorValue = 0;
            calculatorIsValue = 1;
            calculatorAddition = false;
            calculatorDecimalDivideBy = 10;
            calculatorChangeToDecimal = false;
            calculatorHasBeenEqual = true;
            UpdateCalculator();
        }
        else if (calculatorSubtraction == true) {
            calculatorValue = calculatorValue - secondCalculatorValue; 
            secondCalculatorValue = 0;
            calculatorIsValue = 1;
            calculatorSubtraction = false;
            calculatorDecimalDivideBy = 10;
            calculatorChangeToDecimal = false;
            calculatorHasBeenEqual = true;
            UpdateCalculator();
        }
        else if (calculatorDivision == true ) {
            calculatorValue = calculatorValue / secondCalculatorValue;
            secondCalculatorValue = 0;
            calculatorIsValue = 1;
            calculatorDivision = false;
            calculatorDecimalDivideBy = 10;
            calculatorChangeToDecimal = false;
            calculatorHasBeenEqual = true;
            UpdateCalculator();
        }
        else if (calculatorMultiplication == true ) {
            calculatorValue = calculatorValue * secondCalculatorValue;
            secondCalculatorValue = 0;
            calculatorIsValue = 1;
            calculatorMultiplication = false;
            calculatorDecimalDivideBy = 10;
            calculatorChangeToDecimal = false;
            calculatorHasBeenEqual = true;
            UpdateCalculator();
        }
    }
}

function CalculatorBackspace() {
    if (calculatorIsValue == 1) {
        if (calculatorValue > 0) {
            calculatorValue = calculatorValue - calculatorValue % 10;
            calculatorValue = calculatorValue / 10;
            UpdateCalculator();
        }
    }
}

function CalculatorReset() {
    calculatorValue = 0;
    secondCalculatorValue = 0;

    calculatorIsValue = 1;

    calculatorDecimalDivideBy = 10;
    calculatorChangeToDecimal = false;

    

    UpdateCalculator();
}
