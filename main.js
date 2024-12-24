const degreeInput = document.getElementById("degree");
const fromUnit = document.getElementById("unit");
const toUnit = document.getElementById("convert-to");
const convertbtn = document.getElementById("convert-btn");
const resultUnit = document.getElementById("result-unit"); // degree unit show kargye
const resultValue = document.getElementById("result-value"); //reselt value show ki liye
fromUnit.addEventListener("change", function () {
    if (fromUnit.value === "Celsius") {
        toUnit.value = "Fahrenheit";
    } else {
        toUnit.value = "Celsius";
    }
});

toUnit.addEventListener("change", function () {
    if (toUnit.value === "Fahrenheit") {
        fromUnit.value = "Celsius";
    } else {
        fromUnit.value = "Fahrenheit";
    }
});

convertbtn.addEventListener("click", function () {
    const degree = parseFloat(degreeInput.value);
    if (isNaN(degree)) {
        resultValue.textContent = "Enter a Valid Number";
        resultUnit.textContent = ""; //  unit clear kargye if its inavlid
        return;
    }

    let result = 0;
    if (fromUnit.value === "Celsius" && toUnit.value === "Fahrenheit") {
        result = (degree * 9 / 5) + 32;
        resultUnit.textContent = "°F"; // for F
    } else if (fromUnit.value === "Fahrenheit" && toUnit.value === "Celsius") {
        result = (degree - 32) * 5 / 9;
        resultUnit.textContent = "°C"; // for C
    } else {
        result = degree;
        resultUnit.textContent = ""; // no unit
    }
    resultValue.textContent = `${result.toFixed(2)}`; // fianl result value show kargye
});
