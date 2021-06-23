const formLogin = document.querySelector('.trybewarts-login');
const formUser = document.querySelector('#evaluation-form');
const checkbox = document.querySelector('#agreement');
const btn = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const house = document.querySelector('#house');
const inputs = document.querySelectorAll('input');

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

function checkNameFromInputs(inputsReceived, type) {
  let inputsChecked = [];
  for (let index = 0; index < inputsReceived.length; index += 1) {
    if (inputsReceived[index].name === type && inputsReceived[index].checked) {
      inputsChecked.push(inputsReceived[index].value);
    }
  }
  inputsChecked = inputsChecked.join(', ');
  return inputsChecked;
}

function checkColor(houseColor) {
  formUser.style.backgroundColor = 'rgba(230, 83, 31, 0.5)';
  if (houseColor === 'Reactpuff') formUser.style.backgroundColor = 'rgba(252, 218, 84, 0.5)';
  if (houseColor === 'Corvinode') formUser.style.backgroundColor = 'rgba(93, 139, 208, 0.5)';
  if (houseColor === 'Pytherina') formUser.style.backgroundColor = 'rgba(43, 158, 88, 0.5)';
}

function checkBackground(houseColor) {
  const main = document.querySelector('.main');
  main.style.background = 'url("/images/grifinoria.jpg")';
  if (houseColor === 'Reactpuff') main.style.background = 'url("/images/lufa-lufa.jpg")';
  if (houseColor === 'Corvinode') main.style.background = 'url("/images/corvinal.jpg")';
  if (houseColor === 'Pytherina') main.style.background = 'url("/images/sonserina.jpg")';
}

function generateForm(user) {
  const { name, lastname, email, family, materias, rate } = user;
  const divGroup = document.querySelector('#trybewarts-header-title');
  formUser.style.height = '50%';
  formUser.style.padding = '10px';
  formUser.innerHTML = '';
  formUser.innerHTML += (`<span class='newForm'>Nome: ${name.value} ${lastname.value}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Email: ${email.value}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Casa: ${house.value}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Família: ${family}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Matérias: ${materias}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Avaliação: ${rate}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Observações: ${textarea.value}</span>`);
  divGroup.id = '';
  divGroup.className = 'animation-text';
  divGroup.innerHTML = 'Trabalho em grupo feito por Leonardo Santos e Marcio Brenner';
}

function getInformation(event) {
  event.preventDefault();
  const user = {
    name: document.querySelector('#input-name'),
    lastname: document.querySelector('#input-lastname'),
    email: document.querySelector('#input-email'),
    family: checkNameFromInputs(inputs, 'family'),
    materias: checkNameFromInputs(inputs, 'content'),
    rate: checkNameFromInputs(inputs, 'rate'),
  };
  checkColor(house.value);
  checkBackground(house.value);
  generateForm(user);
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
  checkColor(house.value);
  formLogin.addEventListener('submit', validateFormLogin);
  formUser.addEventListener('submit', getInformation);
  checkbox.addEventListener('change', validateFormUser);
  textarea.addEventListener('input', countTextArea);
  house.addEventListener('change', (e) => checkColor(e.target.value));
};
