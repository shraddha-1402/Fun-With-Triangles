// Start of Hypotenuse Of Triangle
const hypotenuseForm = document.querySelector("#hypotenuse-form");
const adjacentLength = document.querySelector("#adjacent-side");
const baseLength = document.querySelector("#base");

function calculateHypotenuse(event) {
  var adjLen = parseInt(adjacentLength.value);
  var baseLen = parseInt(baseLength.value);
  var hypo = Math.sqrt((Math.pow(adjLen, 2) + Math.pow(baseLen, 2)));
  output.innerText = hypo;
  event.preventDefault();
}

hypotenuseForm.addEventListener("submit", calculateHypotenuse);
// End of Hypotenuse Of Triangle



