let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let addButton = document.querySelector(".button:nth-of-type(1)");
let subButton = document.querySelector(".button:nth-of-type(2)");
let divButton = document.querySelector(".button:nth-of-type(3)");
let multButton = document.querySelector(".button:nth-of-type(4)");
let divResult = document.querySelector(".result");
let pResult = document.querySelector("#pResult");
let buttons = document.querySelectorAll('.button');

addButton.addEventListener('click', function () {
  const result = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = '';
  pResult.innerText = result;

});

subButton.addEventListener('click', function () {
  const result = parseInt(input1.value) - parseInt(input2.value);
  pResult.innerText = '';
  pResult.innerText = result;

});

divButton.addEventListener('click', function () {
  const result = parseInt(input1.value) / parseInt(input2.value);
  pResult.innerText = '';
  pResult.innerText = result;

});

multButton.addEventListener('click', function () {
  const result = parseInt(input1.value) * parseInt(input2.value);
  pResult.innerText = '';
  pResult.innerText = result;

});

// Bônus event.target

// addButton.addEventListener('mouseover', changeColor);
// subButton.addEventListener('mouseover', changeColor);
// divButton.addEventListener('mouseover', changeColor);
// multButton.addEventListener('mouseover', changeColor);

for (index = 0; index < buttons.length; index += 1) {
  buttons[index].addEventListener('mouseover', changeColor);
}

function changeColor(event) {
  event.target.style.backgroundColor = 'red';
}