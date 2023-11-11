document.addEventListener("DOMContentLoaded", function () {
    var ageString = prompt("Please enter your age:");
    var age = parseInt(ageString);
    if (!isNaN(age)) {
        var currentYear = new Date().getFullYear();
        var birthYear = currentYear - age;
        document.getElementById("birthYearDisplay").textContent = "Your birth year is: " + birthYear;
    } else {
        alert("Invalid age. Please enter a valid number.");
    }
});
