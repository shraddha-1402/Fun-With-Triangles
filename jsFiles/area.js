const optionOne = document.querySelector("#base-height");
const optionTwo = document.querySelector("#three-sides");
const optionThree = document.querySelector("#two-sides-angle");
const displayArea = document.querySelector("#area-section");

function clearSection(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function setDivAttributes(element, innerText, id, classs) {
  let ele = document.createElement(element);
  // ele.setAttribute("id", id);
  // ele.innerText = innerText;

  id ? ele.setAttribute("id", id) : ele;
  innerText ? ele.innerText = innerText : ele;
  classs ? ele.setAttribute("class", classs) : ele;
  return ele;
}

function setButtonAttributes(element, type, innerText, classs) {
  let ele = document.createElement(element);
  ele.setAttribute("type", type);
  ele.setAttribute("class", classs);
  ele.innerText = innerText;
  return ele;
}

function setLabelAttributes(element, fr, innerText, classs) {
  let ele = document.createElement(element);
  ele.setAttribute("for", fr);
  ele.setAttribute("class", classs);
  ele.innerText = innerText;
  return ele;
}

function setInputAtrributes(element, type, name, id, min, max, step, classs) {
  let ele = document.createElement(element);
  ele.setAttribute("type", type);
  ele.setAttribute("name", name);
  ele.setAttribute("id", id);
  ele.setAttribute("min", min);
  ele.setAttribute("max", max);
  ele.setAttribute("step", step);
  ele.setAttribute("required", true);
  ele.setAttribute("class", classs);
  ele.setAttribute("autocomplete", "off");
  return ele;
}



function calculateAreaOptionOne(event) {
  let base = parseFloat(document.querySelector("#baseLength").value);
  let height = parseFloat(document.querySelector("#height").value);
  let output = document.querySelector("#output");
  output.style.visibility = "visible";
  output.innerText = `Area = ${(0.5 * base * height).toFixed(5)}`;
  output.scrollIntoView(true);
  event.preventDefault();
}

function renderOptionOneDOM() {
  clearSection(displayArea);
  let form = document.createElement("form");
  form.setAttribute("id", "form");
  form.setAttribute("class", "form display-flex-coloumn");
  let div1 = setDivAttributes("div", "", "");
  let div2 = setDivAttributes("div", "", "");
  div1.append(
    setLabelAttributes("label", "baseLength", "B : ", "label"),
    setInputAtrributes("input", "number", "base", "baseLength", "1", "", "0.01", "input input-with-label"),
  );
  div2.append(
    setLabelAttributes("label", "height", "C : ", "label"),
    setInputAtrributes("input", "number", "height", "height", "1", "", "0.01", "input input-with-label"),
  );

  form.append(
    div1,
    div2,
    setButtonAttributes("button", "submit", "Calculate", "submit-button")
  );

  displayArea.append(
    form,
    setDivAttributes("div", "Area = (1/2)*base*height", "output", "output-para")
  );
  document.querySelector("#form").addEventListener("submit", calculateAreaOptionOne);
}


function calculateAreaOptionTwo(event) {
  let side1 = parseFloat(document.querySelector("#side1").value);
  let side2 = parseFloat(document.querySelector("#side2").value);
  let side3 = parseFloat(document.querySelector("#side3").value);
  let output = document.querySelector("#output");

  if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1)
    document.querySelector("#warning_div").style.display = "block";
  else {
    let s = (side1 + side2 + side3) / 2;
    output.style.visibility = "visible";
    output.innerText = `Area = ${(Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))).toFixed(5)}`;
    output.scrollIntoView(true);
  }
  event.preventDefault();
}

function renderOptionTwoDOM() {
  clearSection(displayArea);
  let form = document.createElement("form");
  form.setAttribute("id", "form");
  form.setAttribute("class", "form display-flex-coloumn")

  let div1 = setDivAttributes("div", "", "", "");
  let div2 = setDivAttributes("div", "", "", "");
  let div3 = setDivAttributes("div", "", "", "");

  div1.append(
    setLabelAttributes("label", "side1", "A : ", "label"),
    setInputAtrributes("input", "number", "side1", "side1", "1", "", "0.01", "input input-with-label"),
  );
  div2.append(
    setLabelAttributes("label", "side2", "B : ", "label"),
    setInputAtrributes("input", "number", "side2", "side2", "1", "", "0.01", "input input-with-label"),
  );
  div3.append(
    setLabelAttributes("label", "side3", "C : ", "label"),
    setInputAtrributes("input", "number", "side3", "side3", "1", "", "0.01", "input input-with-label"),
  );

  let errorDiv = setDivAttributes(
    "div", "Enter valid side lengths such that each side length should be less than sum of other two sides", "warning_div", "error-div"
  );
  errorDiv.append(
    document.createElement("span").setAttribute("class", "fa fa-times-circle")
  );

  form.append(
    div1,
    div2,
    div3,
    errorDiv,
    setButtonAttributes("button", "submit", "Calculate", "submit-button")
  );

  displayArea.append(
    form,
    setDivAttributes("div", "Area = √s(s-a)(s-b)(s-c)", "output", "output-para")
  );
  document.querySelector("#form").addEventListener("submit", calculateAreaOptionTwo);
}


function calculateAreaOptionThree(event) {
  let side2 = parseFloat(document.querySelector("#side2").value);
  let side3 = parseFloat(document.querySelector("#side3").value);
  let degree = parseFloat(document.querySelector("#degree").value);
  let output = document.querySelector("#output");
  output.style.visibility = "visible";
  output.innerText = `Area = ${(0.5 * side2 * side3 * Math.sin(degree).toFixed(5))}`;
  output.scrollIntoView(true);
  event.preventDefault();
}

function renderOptionThreeDOM() {
  clearSection(displayArea);
  let form = document.createElement("form");
  form.setAttribute("id", "form");
  form.setAttribute("class", "form display-flex-coloumn")

  let div1 = setDivAttributes("div", "", "", "");
  let div2 = setDivAttributes("div", "", "", "");
  let div3 = setDivAttributes("div", "", "", "");

  div1.append(
    setLabelAttributes("label", "side2", "B : ", "label"),
    setInputAtrributes("input", "number", "side2", "side2", "1", "", "0.01", "input input-with-label"),
  );
  div2.append(
    setLabelAttributes("label", "side3", "C : ", "label"),
    setInputAtrributes("input", "number", "side3", "side3", "1", "", "0.01", "input input-with-label"),
  );
  div3.append(
    setLabelAttributes("label", "degree", "∠ : ", "label"),
    setInputAtrributes("input", "number", "degree", "degree", "1", "180", "0.01", "input input-with-label"),
  );

  form.append(
    div1,
    div2,
    div3,
    setButtonAttributes("button", "submit", "Calculate", "submit-button")
  );

  displayArea.append(
    form,
    setDivAttributes("div", "Area= 1/2*b*c*sin(A)", "output", "output-para")
  );
  document.querySelector("#form").addEventListener("submit", calculateAreaOptionThree);
}

optionOne.addEventListener("click", renderOptionOneDOM);
optionTwo.addEventListener("click", renderOptionTwoDOM);
optionThree.addEventListener("click", renderOptionThreeDOM);