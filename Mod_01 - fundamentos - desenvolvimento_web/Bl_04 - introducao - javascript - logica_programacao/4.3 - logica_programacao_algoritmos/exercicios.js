//Exercícios:

/*
1. O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

O fatorial é representado pelo sinal: '!'.
4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
*/

//Iteração Crescente:
let factorialNum = 10;
let result = factorialNum;
for (let index = 1; index < factorialNum; index += 1) {
  result *= index;
}
console.log(result);

/*
//Iteração Decrescente:
let factorialNum = 1;
for (let index = 10; index > 0; index -= 1) {
  factorialNum *= index;
}
console.log(factorialNum);
*/

/*
2. Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.
Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
*/

let word = "roma";
let twist = '';
for (let index = 0; index < word.length; index += 1 ) {
twist = twist + word[(word.length - 1) - index];
}
console.log(twist); //amor

/*
//Usando Métodos:
let word = 'roma';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);
*/

/*
3. Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

Escreva dois algoritmos:
Um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

let bigger = array[0];
let smaller = array[0];

for(let index = 0; index < array.length; index += 1) {
  if (bigger.length < array[index].length) {
    bigger = array[index];
  }
  if (smaller.length > array[index].length) {
    smaller = array[index];
  }
}

console.log(`maior elemento: ${bigger}.`);
console.log(`menor elemento: ${smaller}.`);

/*
4. Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

//Números primos entre 1 - 50:
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.
*/

/*
//Nested For:

for (let hora = 0; hora <= 12; hora += 1) {
  console.log(`hora: ${hora} `);
  for (let min = 0; min < 60; min += 1) {
    console.log(`-------- minuto: ${min}`);
  }
}
*/

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;

  //este contador impede a divisão por 1 (currentDivisor = 2) e pelo próprio número (currentNumber < currentDivisor)
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}
console.log(`Maior primo entre 1 - 50: ${biggestPrimeNumber}`);


//Outro Modo: (anexando em uma função - função irá enumerar todos números primos dentro do range estabelecido)

function primeNum (range) {
  for (let number = 2; number <= range; number++) {
    let isPrime = true;
    
    for (let divider = 2; divider < number; divider++) {
      if (number % divider === 0) {
      isPrime = false;
      break;
      }
    }
    if (isPrime) console.log(number);
  }      
}
primeNum (15);




