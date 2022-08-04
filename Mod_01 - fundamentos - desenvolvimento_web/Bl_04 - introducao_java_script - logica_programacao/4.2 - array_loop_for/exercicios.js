
//Exercícios:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let index = 0; index < numbers.length; index += 1) {
  console.log(`numbers: ${numbers[index]}`);
}

//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index]; 
}
console.log(`soma: ${sum}`);

/*
3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

* A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
*/

let arithmeticAverage;
let arraySum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  arraySum += numbers[index];
  arithmeticAverage = arraySum / numbers.length;
}
console.log(`média aritmética: ${arithmeticAverage}`);

//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (arithmeticAverage > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("valor menor ou igual a 20");
}

//🚀 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let bigger = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] > bigger) {
    bigger = numbers[index];
  }
}
console.log(`maior: ${bigger}`);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let oddCounter = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    oddCounter += 1;
  }
}
if(oddCounter === 0) {
  console.log("nenhum valor ímpar encontrado");
}
console.log(`numeros ímpares: ${oddCounter}`);

//7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;

//O valor da variável smaller poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1.

let smaller = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < smaller) {
    smaller = numbers[index];
  }
}
console.log(`menor: ${smaller}`);

//8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let arrayNum = [];
for (let index = 1; index <= 25; index += 1) {
  arrayNum.push(index);
}
console.log(`array 1-25: ${arrayNum}`);

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

 for (let index = 0; index < arrayNum.length; index += 1) {
   console.log(`array/2: ${arrayNum[index] / 2}`);
}



