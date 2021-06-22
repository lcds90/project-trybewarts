const formLogin = document.querySelector('.trybewarts-login');
const formUser = document.querySelector('#evaluation-form');
const checkbox = document.querySelector('#agreement');
const btn = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function validateFormUser(event) {
  if (event.target.checked) btn.removeAttribute('disabled');
  else btn.setAttribute('disabled', true);
}

function countTextArea(event) {
  const limit = 500;
  const { textLength } = event.target;
  const rest = limit - textLength;
  counter.textContent = rest;
}

function checkNameFromInputs(inputs, type) {
  let inputsChecked = [];
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].name === type && inputs[index].checked) {
      inputsChecked.push(inputs[index].value);
    }
  }
  inputsChecked = inputsChecked.join(', ');
  console.log(inputsChecked);
  return inputsChecked;
}

function getInformation(event) {
  event.preventDefault();
  const name = document.querySelector('#input-name');
  const lastname = document.querySelector('#input-lastname');
  const email = document.querySelector('#input-email');
  const house = document.querySelector('#house');
  const inputs = document.querySelectorAll('input');
  const family = checkNameFromInputs(inputs, 'family');
  const materias = checkNameFromInputs(inputs, 'content');
  const rate = checkNameFromInputs(inputs, 'rate');
  formUser.innerHTML = '';
  formUser.innerHTML += (`Nome: ${name.value} ${lastname.value} <br>`);
  formUser.innerHTML += (`Email: ${email.value} <br>`);
  formUser.innerHTML += (`Casa: ${house.value} <br>`);
  formUser.innerHTML += (`Família: ${family} <br>`);
  formUser.innerHTML += (`Matérias: ${materias} <br>`);
  formUser.innerHTML += (`Avaliação: ${rate} <br>`);
  formUser.innerHTML += (`Observações: ${textarea.value} <br>`);
}

function validateFormLogin(event) {
  const username = event.target[0];
  const password = event.target[1];
  if (username.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
    return;
  }
  alert('Olá, Tryber!');
}

window.onload = () => {
  counter.textContent = 500;
  btn.setAttribute('disabled', true);
  formLogin.addEventListener('submit', validateFormLogin);
  formUser.addEventListener('submit', getInformation);
  checkbox.addEventListener('change', validateFormUser);
  textarea.addEventListener('input', countTextArea);
};
