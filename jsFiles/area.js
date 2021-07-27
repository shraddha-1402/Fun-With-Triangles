const optionOne = document.querySelector("#base-height");
const optionTwo = document.querySelector("#three-sides");
const optionThree = document.querySelector("#two-sides-angle");
const displayArea = document.querySelector("#area-section");

function clearSection(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function setDivAttributes(element, innerText, id) {
  let ele = document.createElement(element);
  ele.setAttribute("id", id);
  ele.innerText = innerText;
  return ele;
}

function setHeadingAttributes(element, innerText) {
  let ele = document.createElement(element);
  return ele.innerText = innerText;
}

function setButtonAttributes(element, type, innerText) {
  let ele = document.createElement(element);
  ele.setAttribute("type", type);
  ele.innerText = innerText;
  return ele;
}

function setLabelAttributes(element, fr, innerText) {
  let ele = document.createElement(element);
  ele.setAttribute("for", fr);
  ele.innerText = innerText;
  return ele;
}

function setInputAtrributes(element, type, name, id, min, max, step) {
  let ele = document.createElement(element);
  ele.setAttribute("type", type);
  ele.setAttribute("name", name);
  ele.setAttribute("id", id);
  ele.setAttribute("min", min);
  ele.setAttribute("max", max);
  ele.setAttribute("step", step);
  ele.setAttribute("required", true);
  return ele;
}



function calculateAreaOptionOne(event) {
  let base = parseFloat(document.querySelector("#baseLength").value);
  let height = parseFloat(document.querySelector("#height").value);
  let output = document.querySelector("#output");
  output.innerText = 0.5 * base * height;
  event.preventDefault();
}

function renderOptionOneDOM() {
  clearSection(displayArea);
  let form = document.createElement("form");
  form.setAttribute("id", "form");
  form.append(
    setLabelAttributes("label", "baseLength", "base:"),
    setInputAtrributes("input", "number", "base", "baseLength", "1", "", "0.01"),
    setLabelAttributes("label", "height", "height:"),
    setInputAtrributes("input", "number", "height", "height", "1", "", "0.01"),
    setButtonAttributes("button", "submit", "Calculate")
  );

  displayArea.append(
    form,
    setHeadingAttributes("h3", "Area will be shown here: "),
    setDivAttributes("div", "Area = (1/2)*base*height", "output")
  );
  document.querySelector("#form").addEventListener("submit", calculateAreaOptionOne);
}


function calculateAreaOptionTwo(event) {
  let side1 = parseFloat(document.querySelector("#side1").value);
  let side2 = parseFloat(document.querySelector("#side2").value);
  let side3 = parseFloat(document.querySelector("#side3").value);
  let output = document.querySelector("#output");

  if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1)
    document.querySelector("#warningDiv").innerText = "Enter valid side lengths such that each side length should be less than sum of other two sides";
  else {
    let s = (side1 + side2 + side3) / 2;
    output.innerText = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  }
  event.preventDefault();
}

function renderOptionTwoDOM() {
  clearSection(displayArea);
  let form = document.createElement("form");
  form.setAttribute("id", "form");

  form.append(
    setLabelAttributes("label", "side1", "a:"),
    setInputAtrributes("input", "number", "side1", "side1", "1", "", "0.01"),
    setLabelAttributes("label", "side2", "b:"),
    setInputAtrributes("input", "number", "side2", "side2", "1", "", "0.01"),
    setLabelAttributes("label", "side3", "c:"),
    setInputAtrributes("input", "number", "side3", "side3", "1", "", "0.01"),
    setDivAttributes("div", "", "warningDiv"),
    setButtonAttributes("button", "submit", "Calculate")
  );

  displayArea.append(
    form,
    setHeadingAttributes("h3", "Area will be shown here: "),
    setDivAttributes("div", "Area = √s(s-a)(s-b)(s-c)", "output")
  );
  document.querySelector("#form").addEventListener("submit", calculateAreaOptionTwo);
}


function calculateAreaOptionThree(event) {
  let side2 = parseFloat(document.querySelector("#side2").value);
  let side3 = parseFloat(document.querySelector("#side3").value);
  let degree = parseFloat(document.querySelector("#degree").value);
  let output = document.querySelector("#output");
  output.innerText = 0.5 * side2 * side3 * Math.sin(degree);
  event.preventDefault();
}

function renderOptionThreeDOM() {
  clearSection(displayArea);
  let form = document.createElement("form");
  form.setAttribute("id", "form");

  form.append(
    setLabelAttributes("label", "side2", "b:"),
    setInputAtrributes("input", "number", "side2", "side2", "1", "", "0.01"),
    setLabelAttributes("label", "side3", "c:"),
    setInputAtrributes("input", "number", "side3", "side3", "1", "", "0.01"),
    setLabelAttributes("label", "degree", "∠A(deg)"),
    setInputAtrributes("input", "number", "degree", "degree", "1", "180", "0.01"),
    setButtonAttributes("button", "submit", "Calculate")
  );

  displayArea.append(
    form,
    setHeadingAttributes("h3", "Area will be shown here: "),
    setDivAttributes("div", "Area= 1/2*b*c*sin(A)", "output")
  );
  document.querySelector("#form").addEventListener("submit", calculateAreaOptionThree);
}

optionOne.addEventListener("click", renderOptionOneDOM);
optionTwo.addEventListener("click", renderOptionTwoDOM);
optionThree.addEventListener("click", renderOptionThreeDOM);