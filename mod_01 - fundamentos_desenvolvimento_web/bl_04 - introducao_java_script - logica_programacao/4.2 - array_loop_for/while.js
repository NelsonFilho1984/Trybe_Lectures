//While:
/*
É utilizado quando não sabemos a quantidade de 'iterações', vezes um loop deve se repetir;

Atenção! É fácil causar loops infinitos utilizando o while!

O while executa a iteração com apenas uma condição. Enquanto essa condição for verdadeira o conteúdo de escopo do while vai sendo cumprido e ao encontrar uma condição falsa o bloco é então encerrado.
*/

let counter = 0;       //início da contagem
while(counter !== 5) { //condição de parada
  counter += 1;        //incremento
}

console.log(counter);//5
//O 'while' irá rodar até que a variável 'counter' alcance o valor 5.

//Dica: com o comando break é possível também encerrar o loop while quando assim desejar.

function dice() {
  return Math.ceil(Math.random() * 6);
}

let d1 = dice();
let d2 = dice();

while(d1 === d2) {
  d2 = dice();
}
console.log(d2);

//Do...while:
do
   statement
while (condition);