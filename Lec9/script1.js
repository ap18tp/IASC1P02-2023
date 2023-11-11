function stopTime() {
    var stop = new Date();
    var timeDifference = stop.getTime() - start.getTime();
    var secondsPassed = timeDifference / 1000;
    alert("Seconds passed since page load: " + secondsPassed);
}

var start = new Date();
