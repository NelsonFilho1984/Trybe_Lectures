//Array destructuring:
//Já que arrays são objetos iteráveis e têm algumas similaridades com os objetos em Javascript, podemos desestruturar arrays da mesma forma que desestruturamos objetos usando a notação para array destructuring.

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

//Antes acessávamos um valor de uma posição do array da seguinte forma:
/*
const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
*/

//Com a desestruturação de array podemos declarar todas as variáveis contendo os nomes dos países usando apenas uma única linha de código:
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;
console.log(arrayCountries); // [ 'Brazil', 'Japan', 'China', 'Canada' ]


//Array Destructuring + Spread:
const [...elements] = arrayCountries;
console.log(arrayCountries); //[ 'Brazil', 'Japan', 'China', 'Canada' ]

//1. Produza o mesmo resultado do código infra citado, porém utilizando o array destructuring para recolher a função e a saudação.

const hello = ['Olá!', (salute) => console.log(salute)];
hello[1](hello[0]); // Olá!

const [element, functionElement] = hello;
console.log(functionElement(element)); // Olá!

//2. A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log('comida:', comida, 'animal:', animal, 'bebida:', bebida);
// comida: gato animal: água bebida: arroz

[comida, animal, bebida] = [bebida, comida, animal];
console.log('comida:', comida, 'animal:', animal, 'bebida:', bebida);
// comida: arroz animal: gato bebida: água

//3. array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

const [num1, num2, num3, ...numRest] = numerosPares;
// outra solução: [,,, ...numerosPares] = numerosPares;
console.log(numRest); //[ 6, 8, 10, 12 ]