function addNumbers() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        var total = num1 + num2;
        document.getElementById("output").textContent = "Total: " + total;
    } else {
        document.getElementById("output").textContent = "Invalid input. Please enter valid numbers.";
    }
}
