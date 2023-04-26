const botaoEntrar = document.getElementById("button-entrar");

function login() {

  const inputEmail = document.getElementById('button-email')

  const inputPassword = document.getElementById('button-password')

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

