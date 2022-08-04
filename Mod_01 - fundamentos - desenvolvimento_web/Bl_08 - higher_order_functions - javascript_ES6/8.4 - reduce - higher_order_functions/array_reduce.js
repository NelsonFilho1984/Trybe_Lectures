//Array.prototype.reduce()

/*
diferente das outras HOFs: ele recebe dois parâmetros sendo o primeiro uma callback e o segundo um valor inicial, que é opcional.

Como o próprio nome diz o reduce busca reduzir um array. Isto é, iterando em elementos de um array, ao final ele gera um valor único de qualquer tipo, como, por exemplo, a soma de todos os elementos de tal array.

Como principais vantagens do uso do método reduce podemos destacar:
 * escrita de código mais limpo;
 * maior facilidade ao implementar a lógica com a qual se quer trabalhar;
 * melhor manutenção de código.

*Sintaxe:
reduce((accumulator, currentValue, currentIndex, array) => { ... }, initialValue );

A callback, que é o primeiro parâmetro do reduce, também pode receber até quatro parâmetros. Desses quatro parâmetros apenas dois deles devem existir obrigatoriamente, sendo eles o acc (abreviatura de accumulator) e o curr (abreviatura de currentValue).
O acumulador, deve obrigatoriamente ser o primeiro parâmetro da callback e o currentValue (valor atual) também obrigatório, deve ser o segundo parâmetro da callback.
*/

const numbers = [1, 32, 44, 2, 3];
const iteracoesReduce = numbers.reduce((acc, curr) => {
  console.log(`valor atual é: ${curr}`);
  return acc + curr;
   // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
});
console.log(`resultado final é: ${iteracoesReduce}`);
// valor atual é: 32
// valor atual é: 44
// valor atual é: 2
// valor atual é: 3
// resultado final é: 82

//Iteração passo-a-passo:

// Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
      // valor atual é: 32 // Iteração 1: valor do acc é 1 e o de curr é 32;

// Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
     // valor atual é: 44 // Iteração 2: valor do acc é 33 e o de curr é 44;

// Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
    // valor atual é: 2 // Iteração 3: valor do acc é 77 e o de curr é 2;

    // valor atual é: 3 // Iteração 4: valor do acc é 79 e o de curr é 3;

    // resultado final é: 82 // Valor final de `acc`é 82 e `curr` para no 3.


// * Passando um valor para o acc:
//Imagine que novamente você queira somar todos os valores de um array. Mas agora teremos um valor inicial já estipulado para o acc.

//SEM utilização da HOF reduce:
numbers = [1, 32, 44, 2, 3];
let sumNumbers = 30;
  // A variável `sumNumbers` tem um valor inicial de 30 e vai acumulando, a cada iteração do for, o resultado da operação feita em seu escopo!
for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 112

//Utilizando a HOF 'reduce':
numbers = [1, 32, 44, 2, 3];
const totalSum = numbers.reduce((acc, curr) => {
  console.log(`accumulator: ${acc} e current value: ${curr}`);
  return acc + curr;
}, 30);
// O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

console.log(`valor final accumulator: ${totalSum}`);
// por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30

//Pode parecer estranho definir um valor fixo para o acumulador, mas isso porque estamos trabalhando com números. O reduce é uma ferramenta poderosa e em um código mais complexo ele poderia receber um valor dinâmico, através de uma variável ou até mesmo qualquer valor que não seja um número. Vale lembrar também que você aprendeu a usar o reduce com seus dois primeiros parâmetros, mas embora pouco utilizados, existem mais dois parâmetros opcionais: index e array.

//qual a vantagem de se usar o reduce 🤔?

/*
Vamos dissecar a diferença ao usar o 'for' e ao usar o 'reduce':
* Método for:
  * Necessidade de criar uma variável para acumular o resultado de cada iteração do for, a soma de cada resultado --> let sumNumbers;
  * Necessidade de setar um valor inicial para variável --> sumNumbers = 30;

* Método .reduce:
  * A função callback passada por parâmetro recebe dois parâmetros, o acumulador acc e o elemento do array de cada iteração, curr;
  
  * Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: acc + curr;

  * O retorno é salvo no primeiro parâmetro , acc. É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[index], mas nesse caso seria acc = acc + curr;
*/

//Podemos também ao invés de passar a lógica direto dentro da callback do reduce, você pode criar uma função externa e chamá-la como sendo o parâmetro callback:

numbers = [1, 32, 44, 2, 3];

sumNumbers = (acc, curr) => acc + curr;

totalSum = numbers.reduce(sumNumbers, 30);

console.log(totalSum); // 112 --> 30 + [1 + 32 + 44 + 2 + 3]

//Dessa maneira seu código fica mais organizado e você poderá e.g. reutilizar a função 'sumNumbers' caso seja necessário.

/* 
Atenção!!!
Reduce é a The One HOF:
O reduce vai fazer tudo e substituir todas as HOFs dependendo da condição que for passada para ela:
  * Queres somar algo?
Basta agregar os elementos no acumulador;

  * Para filtrar algo?
Basta fazer uma verificação nele comparando 2 valores;

  * Para mapear algo?
Basta por uma condição necessária, digamos que  quer pegar o valorCorrente.status, ele te retorna tudo nesse valor;

  * Para encontrar algo?
 A mesma coisa, basta comparar o que está chegando com o que queremos filtrar.

Enfim, ele literalmente faz tudo que quisermos, depende apenas de como expomos as condições.
*/
