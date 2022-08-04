//Var/Let/Const:

//var:
function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  //console.log(userEmail);//maria@email.com
}
userInfo();
//console.log(userEmail) //userEmail is not defined

//'var' e vazamento de escopo: 
/*
 Uma função é capaz de segurar em seu escopo uma variável de tipo var, mas trechos de código que sejam estruturas condicionais e/ou de repetição não são capazes de fazer o mesmo. Logo se temos uma variável var em um trecho de código em escopo global , ou seja, fora de uma função, ela vai "vazar" se tornando também global, assim como o trecho de código.
 */
function until100 () {
  for (var i = 1; i <= 100; i += 1) {
    console.log(i);
  }
  
  console.log('fora do for', i); //fora do for 101

  if (true) {
    var numero = 102;
  }

  console.log('fora do if', numero); //fora do if 102
};
until100();

var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas
/*
Em aplicações maiores ao usar o var, você pode redeclarar variáveis acidentalmente e nem perceber o que aconteceu. Por isso, encontrar e corrigir bugs pode se tornar uma verdadeira missão impossível.

⚠️ Atenção! Por estes motivos, declarar variáveis com o var não é mais uma boa prática.

Com o ES6 (EcmaScript6) corrige esse problema ao introduzir o let e o const, fazendo com que uma variável, com um nome específico, só possa ser declarada uma única vez dentro de um escopo.
*/

//let X const:
/*
O const permite que você declare constantes. Em outras palavras, o valor atribuído a uma variável declarada com o const não pode ser alterado. Já quando usamos o let, podemos substituir o valor original atribuído à variável.
*/

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition


//const 
const pessoa = {
  nome: 'fulano',
  idade: 24
}
console.log(pessoa);//{ nome: 'fulano', idade: 24 }

pessoa.idade = 25;
console.log(pessoa);//{ nome: 'fulano', idade: 25 }
/*
Apesar de ser uma variável constante, não está sendo reatribuindo um valor a variável em si e sim alterando o valor de uma propriedade dentro de um objeto;

Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado.
*/

//Hoisting: ('içamento' ou 'elevação')
// Esse comportamento move todas as declarações destas variáveis para o topo do escopo global, independentemente de onde tenha sido feita. I.e. é o deslocamento da declaração de todas as variáveis e funções para o topo do código. A mudança (içamento) ocorre durante a fase de Criação do Contexto de Execução que move as declarações de variáveis e de funções para o início do script.

age = 20;

var age; //variável foi declarada apenas depois.

console.log(age); // 20

//Porém, apenas a declaração da variável é movida para o topo do escopo e não seu valor:

var age;

console.log(age); // undefined

age = 20;

//Atenção! Não se esqueça de que este comportamento de 'hoisting' (içamento) acontece apenas com variáveis declaradas com 'var'. Se tentarmos fazer isso com 'let' ou 'const', irá dar erro.