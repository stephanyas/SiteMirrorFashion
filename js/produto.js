//Função para mostrar tamanho do produto do range produto.html
var inputTamanho = document.querySelector('[name=tamanho]');
var outputTamanho = document.querySelector('[name=valorTamanho]');
function mostraTamanho(){
    outputTamanho.value = inputTamanho.value;
    outputTamanho.textContent = event.target.value;
}
inputTamanho.oninput = mostraTamanho;

