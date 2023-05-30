const form = document.getElementById("form");
let formEvalido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    validaForm();
})

function validaForm() {
    let campoA = document.getElementById("numeroA");
    let campoB = document.getElementById("numeroB");
    let mensagemSucesso = `Parabéns! <b>${campoB.value}<b/> é maior que o <b> ${campoA.value}<b/>!`;
    let mensagemErro = `Erro! <b> ${campoB.value} </b> é menor que o <b> ${campoA.value}</b>!`;
    let formEvalido = campoB.value > campoA.value;
    if (formEvalido) {
        alert("Está certo!");
        let containerSucesso = document.querySelector(".mensagem-certa");
        containerSucesso.innerHTML = mensagemSucesso
        containerSucesso.style.display = "block";

        campoA.value = "";
        campoB.value = "";
    } else {
        alert("Está errado!");
        let containerErro = document.querySelector(".mensagem-erro");
        containerErro.innerHTML = mensagemErro;
        containerErro.style.display = "block";

        campoA.value = "";
        campoB.value = "";
    }
}

console.log(form);

