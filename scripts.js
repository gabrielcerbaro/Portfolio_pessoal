
const texto = "Eu sou o Gabriel Cerbaro, um desenvolvedor de software em constante evolução";
const elemento = document.getElementById("texto-digitado");
let i = 0;

function digitar() {

if (i < texto.length) {
    elemento.textContent += texto[i]
    i++
    setTimeout(digitar, 40)
    }
}

digitar()

document.getElementById("ano").textContent = new Date().getFullYear()