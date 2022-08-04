//Estruturando uma HOF:

//Para isso vamos construir este conceito passo a passo para compreender e aplicar na jornada de desenvolvimento.

//Atenção! É extremamente importante ter em mente que as HOFs nos permitem compactar ações e não somente repassar valores.

const repeat1 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat1(5, console.log);//tente substituir esta ação para console.group.
// 0
// 1
// 2
// 3
// 4
// 5

//A função acima para implementa um laço de repetição entre 0 e um número especificado via parâmetro (number) e mostra no console o valor da variável count de 0 a N (number). O console.log é uma função própria do JavaScript.

const repeat2 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat2(10, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even'); 
  } 
});
// 0 is even
// 2 is even
// 4 is even
// 6 is even
// 8 is even
// 10 is even

/*
Pegamos a nossa implementação do primeiro exemplo (repeat1) e repassamos dois parâmetros ao chamarmos a função repeat, sendo:
1 - Um número até que ponto gostaríamos de testar, neste caso 10;
2 - Nossa ação que será executada quando chamada action(count) na nossa função repeat, neste caso uma função para testar nossos números.

Obs.:
Veja que nosso segundo parâmetro é uma função que recebe o count como argumento, proveniente da execução do nosso action(count) dentro da função repeat. Deste modo, caso o count passe pela condição estabelecida para ser um número par, será executada a mensagem com os números que atendem ao critério.
*/

const repeat3 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
}

const isEven = (number) => {
  if (number %2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if (number % 2 === 1) {
    console.log(number, 'is odd');
  }
};

repeat3(5, isEven); //Testa quais números serão pares;
// 0 is even
// 2 is even
// 4 is even

repeat3(5, isOdd); //Testa quais números serão ímpares;
// 1 is odd
// 3 is odd
// 5 is odd

//No exemplo acima apenas transportamos e ajustamos a lógica para identificar os números pares e ímpares em duas novas funções chamadas isEven e isOdd. Após isso, só alteramos o segundo parâmetro ao chamar a função repeat3.

/*
Importante!
A função recebida como argumento pela HOF, também é conhecida por callback. No exemplo, repeat3 é uma HOF que recebe isEven ou isOdd como callback.
*/

// ------------------------------------------------------------------------------------------------ //

//funções que retorna outra função como argumento:

const double = number => number * 2;
//console.log(double(2)); //4

function getMultiplier (multiplier) {
  
}

// ------------------------------------------------------------------------------------------------ //

const numberGenerator = () => {
  return Math.round(Math.random() * 100);
}
console.log(numberGenerator); //[Function: numberGenerator]

//Note que ao executar esse código, não recebemos um número aleatório. Isso aconteceu porque no console.log do script imprimimos apenas a escrita da função, sem realizar sua execução, ela não seguiu os procedimentos para retornar um número aleatório. Para executarmos a função, teríamos que inserir '()' na frente do numberGenerator.

console.log(numberGenerator()); //e.g. 66

//Essa lógica é a mesma quando usamos callback dentro de outras funções. Lembre que o traço do JavaScript que considera funções como cidadãs de primeira classe ('first class functions') permite que nós possamos inserir elas em variáveis. Se voltarmos no primeiro exemplo dessa função, vai ver que a chamada da callback no addEventListener funciona de modo similar. Tudo isso é parte de algo maior, são High Order Functions.

// ------------------------------------------------------------------------------------------------ //



//Exercícios:
//Vamos praticar com os seguintes exercícios:

// 1. Crie uma função que retorne a string 'Acordando!!!';
const wake = () => 'Acordando!!!';
//console.log(wake()); //Acordando!!!

// 2. Crie outra função que retorne a string 'Bora tomar café!!!';
const breakfast = () => 'Bora tomar café!!!';
//console.log(breakfast()); //Bora tomar café!!!

// 3. Crie mais uma função que retorne a string 'Partiu dormir!!!';
const sleep = () => 'Partiu dormir!!!';
//console.log(sleep()); //Partiu dormir!!!

// 4. Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. 
const doingThings = (action) => {
  console.log(action());;
}
doingThings(wake);


