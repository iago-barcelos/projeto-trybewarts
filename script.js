const botaoEntrar = document.getElementById("botao-enviar");

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


