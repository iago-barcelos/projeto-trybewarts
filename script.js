const botaoEntrar = document.getElementById("botao-entrar");

function login() {

  botaoEntrar.addEventListener('click', () => {
    const inputEmail = document.getElementById('botao-email');
    const email = inputEmail.value;

    const inputPassword = document.getElementById('botao-password');
    const password = inputPassword.value;

    if (email === "tryber@teste.com" && password === "123456") {
      alert("Olá, Tryber!");
    }
    else {
      alert("Email ou senha inválidos.")
    }
  })
}

login();


const checkBox = document.getElementById('agreement')
const botaoEnviar = document.getElementById('submit-btn')

checkBox.addEventListener("change",() => {
  if (checkBox.checked) {
    botaoEnviar.disabled = false;
  }
  else {
    botaoEnviar.disabled = true;
  }
})