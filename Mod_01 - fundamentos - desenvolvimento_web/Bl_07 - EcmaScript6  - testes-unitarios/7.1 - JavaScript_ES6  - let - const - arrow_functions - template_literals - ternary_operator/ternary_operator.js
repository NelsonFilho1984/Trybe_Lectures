//Operador Ternário:
/*
Nada mais é que uma sintaxe mais simples para a construção de algumas condicionais no JavaScript.

A sintaxe básica do operador ternário é muito simples:
 x ? y : z.
 * x é uma condição que será avaliada como verdadeira ou falsa;
 * y é o retorno se a condição for verdadeira;
 * z é o retorno se a condição for falsa;

condição ? true : false;
*/

const trueExpression = 1 + 1 == 2 ? 'Isso é verdade!' : 'Isso é mentira!';
console.log(trueExpression);

//Fato é que utilizar um Operador Ternário gera um código mais limpo e simples, contudo, é bom saber que ele  não substitui as expressões condicionais tradicionais! e.g. em qualquer situação onde exista duas ou mais de uma condições a serem avaliadas, gerando vários resultados possíveis, tornaria o código ilegível.

const canVote = (idade) => {
  if (idade < 16) {
    console.log("Não pode votar!");
  } else if (idade >= 16 && idade < 18) {
    console.log("Voto facultativo!");
  } if(idade >= 18) {
    console.log("Voto Obrigatório!");
  }
}
console.log(canVote(18));

const possoVotar = idade => {
idade < 16 ? console.log("Não pode votar!") : idade >= 16 && idade < 18 ? console.log("Voto facultativo!") : console.log("Voto Obrigatório!");
};
console.log(possoVotar(17));

//Note que as funções 'canVote' e 'possoVotar' tem exatamente a mesma funcionalidade, no entanto, a legibilidade do 'possoVotar' foi minorada em face do uso do operador condicional ternário.

const checkTernary = (fruit) => (fruit === `maçã`) ? `Essa fruta é vermelha`
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

 console.log(checkTernary('banana'));

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,


//Caso tenhamos apenas uma condicional (um 'if' sem 'else'):
const idade = 22;
console.log(idade > 18 && 'Já pode tirar a carteira de motorista!');