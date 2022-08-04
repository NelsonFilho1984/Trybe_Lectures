//Switch Case:
//É uma outra abordagem de estruturas condicionais, sendo melhor utilizada quando necessita-se extrair valores de uma mesma variável, tornando o código mais legível.
//Atenção! o switch case utiliza a 'comparação estrita'(===) avalia valor e tipo.

let trafficLight = "green";

switch(trafficLight) {
  case "red":
    console.log("Pare.");
    break;
  
  case "yellow":
    console.log("Atenção!");
    break;
  
  case "green":
    console.log("Siga.");
    break;

  default:
    console.log("Valor não identificado.");
}

/*
1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';

2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.
*/

let state = "aprovada"

switch (state) {
  case "aprovada":
    console.log("Parabéns! você foi aprovado(a).");
    break;
  
  case "lista":
    console.log("Aguarde! você está na lista de espera.");
    break;
    
case "reprovada":
    console.log("Infelizmente, você foi reprovado(a).");
      break;
  default:
    console.log("não se aplica.");
}

  
