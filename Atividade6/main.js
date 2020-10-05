var jogador1 = prompt("Digite a sua escolha (Nome)");
var jogador2 = Math.trunc((Math.random() * 10)/3);
var aux,aux2;
jogador1 = jogador1.toUpperCase();

if(jogador1 == "PEDRA"){
aux=1;
}else if(jogador1 == "TESOURA"){
aux=2;
}else if(jogador1 == "PAPEL"){
aux=3;
}else{
    alert("Escolha Indisponivel, tente novamente");
}
if(jogador2 == 1){
aux2=1;
}else if(jogador2 == 2){
aux2=2;
}else if(jogador2 == 3){
aux2=3;
}else if (jogador2 == 0){
    aux2 = 1;
}

if(aux == aux2 ){
    alert("Empate");
}else if(aux == 1 ){
    if(aux2 == 2){
        alert("Pedra Vence Tesoura, Você ganhou");
    }
    if(aux2 == 3){
        alert("Pedra Perde para Papel, Você perdeu");
    }
}else if(aux == 2 ){
    if(aux2 == 1){
        alert("Tesoura perde para Pedra, Você perdou");
    }
    if(aux2 == 3){
        alert("Pedra Vence  Papel, Você perdeu");
    }
}else if(aux == 3 ){
    if(aux2 == 1){
        alert("Papel vence Pedra, Você Ganhou");
    }
    if(aux2 == 2){
        alert("Papel perde para tesoura, Você perdeu");
    }
}