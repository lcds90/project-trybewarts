const formLogin = document.querySelector('.trybewarts-login');
const checkbox = document.querySelector('#agreement');
const btn = document.querySelector('#submit-btn');

function validateFormUser(event) {
  if (event.target.checked) btn.removeAttribute('disabled');
  else btn.setAttribute('disabled', true);
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
  btn.setAttribute('disabled', true);
  formLogin.addEventListener('submit', validateFormLogin);
  checkbox.addEventListener('change', validateFormUser);
};
