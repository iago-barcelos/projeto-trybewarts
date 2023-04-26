const botaoEntrar = document.getElementById("botao-enviar");

function login() {

  const inputEmail = document.getElementById('botao-email')

  const inputPassword = document.getElementById('botao-password')

  botaoEntrar.addEventListener('click', () => {
    if (inputEmail === "tryber@teste.com" && inputPassword === "123456") {
      alert("Olá, Tryber!");
    }
    else {
      alert("Email ou senha inválidos.")
    }
  })
}

login();

