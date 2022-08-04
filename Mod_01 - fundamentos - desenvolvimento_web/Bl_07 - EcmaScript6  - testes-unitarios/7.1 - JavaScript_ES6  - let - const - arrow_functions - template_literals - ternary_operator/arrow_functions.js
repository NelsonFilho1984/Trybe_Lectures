//Arrow Functions:
/*
arrow functions nada mais é do que uma forma diferente de se declarar funções escrevendo menos código. 

>>> Modelo Tradicinal:
function nomeDaFuncao (parametro) {
  //bloco de código;
};
nomeDaFuncao(argumento);

>>> Função anônima:
Em Javascript, é muito comum não precisarmos nomear funções, isso pode acontecer quando criamos funções que não serão reutilizadas, ou que serão passadas como argumento para uma outra função.

const nomeParaFuncao = function (parametro) {
//bloco de código;  
};
nomeParaFuncao(argumento);

>>> Arrow Function:
() => {};

const nomeParaFuncao = (parametro) => {
  //bloco de código;
};
nomeParaFuncao(argumento);
*/

const contaPalavras = (frase) => {
  let contador = frase.split(' ').length;
  return `Sua frase possui ${contador} palavras.`;
};
console.log(contaPalavras('Grande dia para codar, não?'));

//const contaPalavras = frase => frase.split(' ').length;

const print = print => console.log(print);
print("qualquer coisa");


/*

Observações:

 * Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função omitindo o return e as chaves;

 * Se a função tiver apenas uma única linha de código, também não necessita ficar entre chaves;

 * Em funções que recebem mais de um parâmetro, os parênteses são obrigatórios; 

 * Se o a função receber apenas um único parâmetro não é necessário ficar entre parênteses;

 * Se a função sequer receber parâmetro você pode utilizar _ ou ();
*/

(_=>console.log(_))('blah');//retorna 'blah'

(x=>console.log(x))('blah'); //também retorna 'blah'


/* 
const objectMaker = (nome, sobrenome, data) => {
  return {
    nome: nome,
    sobrenome: sobrenome,
    data_de_nascimento: data
  };
};
console.log(objectMaker('Fulano', 'De Tal', 1992));
*/

//Objetos declarados em uma única linha devem ficar entre parênteses depois das chaves:
const objectMaker = (nome, sobrenome, data) => ({nome: nome, sobrenome: sobrenome,data_de_nascimento: data});

console.log(objectMaker('Fulano', 'De Tal', 1992));



