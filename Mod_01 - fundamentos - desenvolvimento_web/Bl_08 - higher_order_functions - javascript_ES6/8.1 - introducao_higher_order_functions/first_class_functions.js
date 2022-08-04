//First-Class Functions:
/*
Uma linguaguem é dita ter First-Class Functions quando trata suas funções como first class citizens (isto é, cidadãos de primeira classe), ou seja, elas suportam as mesmas operações que estão disponíveis para os outros tipos. Isso significa que nossas funções podem ser atribuídas à variáveis, passadas como argumento e/ou retornadas por outras funções.

JavaScript é uma linguagem que utiliza esse conceito, portanto podemos:

  * Atribuir funções à variáveis;
  * Passar funções como argumento para outras funções;
  * Retornar uma função de outra função;
*/

//>>> Atribuir funções à variáveis:
function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable);
//  [Function: sum]

//Quando utilizamos arrow functions, estamos justamente utilizando da capacidade do javascript de conseguir armazenar a função dentro de uma variável.
const sum = (number1, number2) => {
  return number1 + number2;
};

//>>> Passar funções como argumento para outras funções:
const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);

//>>> Retornar uma função de outra função:
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));