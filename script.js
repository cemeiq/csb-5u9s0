const display = document.querySelector(".display");
const display1 = document.querySelector(".dsp1");
const display2 = document.querySelector(".dsp2");
const tempresult = document.querySelector(".tempresult");

const divbuttons = document.querySelector(".buttons");
const listbuttons = document.querySelectorAll(".button");
const inputnum = document.querySelectorAll(".number");
const operationslst = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const zerobutton = document.querySelector("btn-0");
const allclear = document.querySelector("all-clear");
const lastentityclear = document.querySelector("last-entity-clear");

let display1num = "";
let display2num = "";
let resultnum = "";
let lastOperation = "";
let havedot = false;

inputnum.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.innerText === "." && !havedot) {
      havedot = true;
    } else if (event.target.innerText === "." && havedot) {
      return;
    }

    display2num += event.target.innerText;
    display2.innerText = display2num;
  });
});

operationslst.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (!display2num) {
      return;
    }
    havedot = false;
    let operator = event.target.innerText;
    if (display1num && display2num && operator) {
      mathOperation();
    } else {
      resultnum = parseFloat(display2num);
    }
    clearVar(operator);
    lastOperation = operator;
    console.log(resultnum);
  });
});

function clearVar(operator = " ") {
  display1num += display2num + " " + operator + " ";
  display1.innerText = display1num;
  display2num = "";
  display2.innerText = "";
  tempresult.innerText = resultnum;
}

function mathOperation() {
  if (lastOperation === "X") {
    resultnum = parseFloat(resultnum) * parseFloat(display2num);
  } else if (lastOperation === "+") {
    resultnum = parseFloat(resultnum) + parseFloat(display2num);
  } else if (lastOperation === "-") {
    resultnum = parseFloat(resultnum) - parseFloat(display2num);
  } else if (lastOperation === "/") {
    resultnum = parseFloat(resultnum) / parseFloat(display2num);
  } else if (lastOperation === "%") {
    resultnum = parseFloat(resultnum) % parseFloat(display2num);
  }
}

equal.addEventListener("click", (event) => {
  if (!display1num && !display2num) {
    return;
  }
  havedot = false;
  mathOperation();
  clearVar();
  display2.innerText = resultnum;
  tempresult.innerText = "";
});
