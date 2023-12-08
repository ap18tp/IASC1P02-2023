function displayDateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  alert('Current Date and Time: ' + dateTimeString);
}

function ChangeText() {
  document.getElementById("output").innerHTML = ":)";
}

document.addEventListener('DOMContentLoaded', function () {
  // This function dynamically fills content on page load
  const dynamicContentElement = document.getElementById('dynamicContent');
  dynamicContentElement.innerHTML = 'This content is dynamically filled using JavaScript.';
});
