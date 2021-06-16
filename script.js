// O click no botão de login dispara um alert com o texto "Login ou senha inválidos", no caso de erro de preenchimento dos dados
// O click no botão de login dispara um alert com o texto "Olá, Tryber!", no caso de preenchimento correto dos dados.
// 'tryber@teste.com' e a senha '123456;
const form = document.querySelector(".trybewarts-login");
const btn = document.querySelector("#login");

function validateForm(event) {
//   event.preventDefault();
  const username = event.target[0];
  const password = event.target[1];
  if (username.value !== "tryber@teste.com" || password.value !== '123456') {
    alert("Login ou senha inválidos.");
    return;
  }

  alert("Olá, Tryber!");
}

window.onload = () => {
  form.addEventListener("submit", validateForm);
};
