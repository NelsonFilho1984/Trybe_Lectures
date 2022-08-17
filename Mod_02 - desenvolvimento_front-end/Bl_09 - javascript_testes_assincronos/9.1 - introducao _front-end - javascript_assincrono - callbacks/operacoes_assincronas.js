//Operações Assíncronas:
//Em vez de o programa ser carregado todo em sequência, uma linha após a outra, linhas que podem trazer esse tipo de problema podem "ficar carregando", enquanto o resto do seu programa executa normalmente. A execução dessa linha, a espera pela disponibilidade desse serviço, corre paralelamente ao desenvolver do restante do código. É uma execução assíncrona.
//Ou seja, impede que a página web fique quebrada ou tenha o carregamento freado caso o serviço do qual dependemos sair do ar, e se os servidores dele estiverem lentos.

setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// 1 - Receber roda
// 2 - Encaixar parafusos
// 3 - Fixar roda no carro
// (...)
// Comprar parafusos
// Adicionar ao estoque

//A função setTimeout: 
//É muito comum que esta função seja utilizada para simular comportamentos assíncronos. Na prática vivenciaremos situações em que nossa aplicação depende de uma informação externa, como por exemplo, solicitar uma informação a um banco de dados. É aí que o conceito de assincronicidade entra a nosso favor para que nossa aplicação não perca eficiência.


/*
const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // [1, 2, 3]
*/

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]

/* 
Por que o primeiro código retorna o array [1, 2, 3] enquanto o segundo retorna o array [2, 3]?

Isso ocorre por causa da função setTimeout.
Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar o pushNumber(numbers, 1).
Como o console.log é uma função síncrona, ele é executado antes do setTimeout terminar. 
*/

setTimeout(() => console.log(numbers), 3000); // [ 2, 3, (...) 1 ]