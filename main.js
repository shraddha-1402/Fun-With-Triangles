//Start of Angles of Triangle JS

const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const anglesForm = document.querySelector("#angles-form");
const output = document.querySelector("#output");

function checkIfTriangle(event) {
  if (parseInt(angleOne.value) + parseInt(angleTwo.value) + parseInt(angleThree.value) === 180)
    output.innerText = "Yayy! These angles can make a triangle!";
  else
    output.innerText = "Oops! Can't make a triangle with these three :(";
  event.preventDefault();
}

anglesForm.addEventListener("submit", checkIfTriangle);

// End of Angles of Triangle JS



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