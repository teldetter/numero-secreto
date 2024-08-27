alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 a 100');
    if (chute == numeroSecreto){
        break;
    } else {
         if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
         }    
         tentativas ++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas !' : 'tentaviva !'
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} utilizando ${tentativas} ${palavraTentativa}`);
//if (tentativas > 1) {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} utilizando ${tentativas} tentativas !`);
//}   
//    else {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} utilizando ${tentativas} tentativa !`);
//}
