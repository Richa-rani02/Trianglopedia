var sides = document.querySelectorAll(".angle-input");
const calculate = document.querySelector(".angles-btn");
const result = document.querySelector(".result");

function sumOfSquares(a, b) {
    var sumValue = a * a + b * b;
    return sumValue;
}

function findHypotenuse() {
    var sumOfTwoSides = sumOfSquares(Number(sides[0].value), Number(sides[1].value));
    var hypotenuse = Math.sqrt(sumOfTwoSides).toFixed(2);
    result.innerText = "The lenght of hypotenuse is " + hypotenuse + " units.";
}


calculate.addEventListener("click", findHypotenuse);