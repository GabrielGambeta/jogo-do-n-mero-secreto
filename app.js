let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecretro = gerarNumeroAleatorio();
let tentativas = 1 ; 



function exbibirTrxtoNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}


function exbibirMensagemInicial() {
    exbibirTrxtoNaTela('h1', 'Jogo do número secreto');
    exbibirTrxtoNaTela('p',  'Escolha um número entre 1 a 10');
}

exbibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecretro) {
        exbibirTrxtoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exbibirTrxtoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if (chute > numeroSecretro){
            exbibirTrxtoNaTela('p', 'O número secreto é menor');
        } else {
            exbibirTrxtoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 ); 
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() { 
    numeroSecretro = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exbibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
}