"use strict";

const billInput = document.querySelector("#bill-input");
const buttonChoices = document.querySelectorAll(".tip-choice");
const tipChoices = document.querySelector(".tip-choices");
const choiceInput = document.querySelector("#tip-choice-input");
const numberPeopleInput = document.querySelector("#number-of-people");
const resetButton = document.querySelector(".reset");

const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");

const regExpString = /[a-záéíóúàèìòùäëïöüěščřžýůú=+-.,]/;
const regExpString2 = /[A-ZÁÉÍÓÚÀÈÌÒÙÄËÏÖÜĚŠČŘŽÝŮÚ=+-.,]/;

let bill = 0;
let percentageNumber = 0;
let numberPeople = 0;

resetButton.addEventListener("click", function () {
  billInput.value = 0;
  choiceInput.value = 0;
  numberPeopleInput.value = 0;
  tipAmount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
});

buttonChoices.forEach((e) => {
  e.addEventListener("click", function () {
    buttonChoices.forEach((e) => {
      if (e.classList.contains("button-active")) {
        e.classList.remove("button-active");
      }
    });
    if (this.classList.contains("button-active")) {
      this.classList.remove("button-active");
    } else if (!this.classList.contains("button-active")) {
      this.classList.add("button-active");
    }
    percentageNumber = Number(this.innerText.slice(0, -1));
  });
});

billInput.addEventListener("input", function (e) {
  //
  if (regExpString.test(e.data) || regExpString2.test(e.data)) {
    //
    e.target.value = "";
    alert("Please fill all fields correctly");
  } else if (!regExpString.test(e.data)) {
    bill = Number(billInput.value);
  }
});

choiceInput.addEventListener("input", function (e) {
  //
  if (regExpString.test(e.data) || regExpString2.test(e.data)) {
    //
    e.target.value = "";
    alert("Please fill all fields correctly");
  } else if (!regExpString.test(e.data)) {
    percentageNumber = Number(choiceInput.value);
  }
});

numberPeopleInput.addEventListener("input", function (e) {
  //
  if (regExpString.test(e.data) || regExpString2.test(e.data)) {
    //
    e.target.value = "";
    alert("Please fill all fields correctly");
  } else if (!regExpString.test(e.data)) {
    numberPeople = Number(numberPeopleInput.value);
  }
});

function calcTip() {
  let tipResult = (bill / 100) * percentageNumber;
  let tipPerPerson = tipResult / numberPeopleInput.value;
  let totalPerPerson = bill + tipResult;
  tipAmount.innerText = tipPerPerson.toFixed(2);
  totalAmount.innerText = Number(totalPerPerson).toFixed(2);
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  calcTip();
});

document.querySelector("form").addEventListener("keydown", function (e) {
  if (e.target.classList.contains("number-of-people-input")) {
    if (e.key === "Enter") {
      calcTip();
    }
  }
});
