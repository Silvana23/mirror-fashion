var inputTamanho = document.querySelector('[name=tamanho]');
var outputTamanho = document.querySelector('[name=valortamanho]');

function mostraTamanho() {
    outputTamanho.value = inputTamanho.value
}
inputTamanho.oniput = mostraTamanho;