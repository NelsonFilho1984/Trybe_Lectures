//Funções:
/*
Função é um conjunto de instruções que executa uma tarefa ou calcula um valor.
É recomendada a utilização das funções como forma de deixar seu algoritmo mais simples, legível e enxuto.

*Estrutura:
function nomeDaFuncao(parâmetro) {
  //código_de_execução;
  return resultado_funcional_da_função;
}

* Invocar a Função:
nomeDaFunção(); //caso a função não tenha parâmetro
ou
nomeDaFuncao(parametro);
*/


//* Funções de uso de um carro:
var statusCarro = "desligado";
var farois = "desligados";
var aceleracao = 0;
var rotacaoDoVolante = 0;

function ligarDesligar(){
  if (statusCarro === "desligado") {
    statusCarro = "ligado";
  } else {
    statusCarro = "desligado";
  }
  return "Carro " + statusCarro;
}

function ligarDesligarFarois() {
  if (farois === "desligados") {
    farois = "ligados";
  } else {
    farois = "desligados";
  }
  return "Faróis " + farois;
} 
               
function acelerar(incremento) {
  aceleracao += incremento;
  return "Acelerando a " + aceleracao + " m/s²";
}
  
function frear(decremento) {
  aceleracao -= decremento;
  return "Desacelerando para " + aceleracao + " m/s²";
}

function girarVolante(anguloRotacao) {
  rotacaoDoVolante = anguloRotacao;
  return "Girando o volante " + rotacaoDoVolante + "°";
}

console.log(ligarDesligar());
console.log(ligarDesligarFarois());
console.log(acelerar(20));
console.log(girarVolante(45));
console.log(frear(15));
console.log(girarVolante(0));
console.log(frear(5));
console.log(ligarDesligarFarois());
console.log(ligarDesligar());

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais

/*
Atenção!
cada função deve ter apenas um propósito, evite criar uma função que faça várias coisas diferentes e que não tem ligação uma com a outra!
*/


