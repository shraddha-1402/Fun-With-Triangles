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