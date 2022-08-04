//Rest parameter:

//O parâmetro rest é uma feature do ES6 que permite com que você crie funções que recebam um número variável de argumentos. Assim, suas funções ficam mais flexíveis. Os argumentos que serão passados como parâmetro são salvos em um array que pode ser acessado de dentro da função. Por isso, podemos passar qualquer tipo de parâmetro quando usamos o rest. Todos eles serão colocados dentro de um array, o que te permite usar métodos como o .length.

//Basicamente, este recurso auxilia a criar funções que recebem um número ilimitado de argumentos.

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); 
// parâmetros: [ 0, 1, 2 ]
// Você passou 3 parâmetros para a função.

console.log(quantosParams('string', null, [1, 2, 3], { }));
// parâmetros: [ 'string', null, [ 1, 2, 3 ], {} ]
// Você passou 4 parâmetros para a função.

//Parâmetro rest + HOF reduce:
const sum = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum(7, 10, 12, 33, 40, 144)); // 246

//O método reduce é útil para somar os elementos de um array. No exemplo acima, a função sum calcula a soma de todos os argumentos passados a ela - independente da quantidade de números.

// Como o parâmetro rest "empacota" todos os argumentos em um array, podemos utilizar o reduce para somar tudo o que estiver dentro deste array. Tornando a função é muito mais flexível quando queremos passar múltiplos parâmetros com o rest pois você não precisa especificar quantos argumentos a função irá receber!

