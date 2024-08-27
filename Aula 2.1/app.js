let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function verificarChute() {
    console.log('Botão pressionado')
}
function botaoAlerta() {
    alert('Eu amo JS')
}
function botaoCidade() {
    let cidade = prompt('Digite uma cidade do Brasil.')
    alert('Estive em ' + cidade , 'e lembrei de você.')
}
function botaoSoma() {
    let numero1 = parseInt(prompt('Digite numero inteiro.'))
    let numero2 = parseInt(prompt('Digite outro numero inteiro.'))
    let resultado = numero1 + numero2
    alert(`A soma dos números foi de ${resultado}`)

}