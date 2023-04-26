const botaoEntrar = document.getElementById("botao-enviar");

const inputEmail = document.getElementsByClassName('buttons')[0]

const inputPassword = document.getElementsByClassName('buttons')[1]

function login () {
    const inputEmail = "tryber@teste.com"
    const inputPassword = "123456"
    botaoEntrar.addEventListener('click', () => {
        if (inputEmail === "tryber@teste.com" && inputPassword ==="123456") {
           alert("Olá, Tryber!")
        }
        else (inputEmail !== "tryber@teste.com" ||inputPassword !=="123456") 
            alert("Email ou senha inválidos.")
    })
}

login ();

