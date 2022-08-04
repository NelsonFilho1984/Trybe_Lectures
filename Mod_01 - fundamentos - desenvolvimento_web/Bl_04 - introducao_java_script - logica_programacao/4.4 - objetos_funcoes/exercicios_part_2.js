//Funções:

/*
Os exercícios a seguir deixarão mais nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação.

Spoiler-alert: para os exercícios, os métodos split, join e reverse podem ser muito úteis.
*/

/*
1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
 
Diz-se palíndromo quando uma frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa.

 * Exemplo de palíndromo: arara.
 * verificaPalindrome('arara');
 * Retorno esperado: true
 * verificaPalindrome('desenvolvimento');
 * Retorno esperado: false
*/

function palindromeChecker(string) {
  if (string === string.split("").reverse().join("")) {
    console.log(`palavra: ${string}`);
    console.log(`separada: ${string.split("")}`);
    console.log(`reversa: ${string.split("").reverse()}`);
    return true;
  } else {
    console.log(`palavra: ${string}`);
    console.log(`separada: ${string.split("")}`);
    console.log(`reversa: ${string.split("").reverse()}`);
    return false;
  }
}
console.log(palindromeChecker("omissíssimo"));

//Outro Modo: (For/in)
function isPalindrome(string) {
  for (let index in string) {
    if(string[index] === string[(string.length - 1) - index]){
      return true;
    } else {
      return false;
    }
  }
}
console.log(isPalindrome("rever"));

/*
2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
 * Array de teste: [2, 3, 6, 7, 10, 1];.
 * Valor esperado no retorno da função: 4.
*/

function indexBiggerValue(arrayNum) {
  console.log(`Array: ${arrayNum}`);
  let verifier = 0;
  let biggerNum = 0;
  for(let index in arrayNum) {
    if(arrayNum[index] > verifier) {
      verifier = index;
      biggerNum = arrayNum[index];
    }
  }
  return console.log(`Índice do maior número: ${verifier} \nMaior Número: ${biggerNum}`);
  
}
console.log(indexBiggerValue([2, 4, 6, 8, 1, 89]));

//Outro modo:
function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

/*
3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.
*/
function minorIndex(arrayInt) {
  console.log(`Array: ${arrayInt}`);
  minor = arrayInt[0];
  for (let index in arrayInt) {
    if(arrayInt[index] < arrayInt[minor]) {
      minor = index;
    }
  }
  return console.log(`ìndice do Menor: ${minor}`);
} 
console.log(minorIndex([2, 4, 6, 7, 10, 0, -3, 30, 2, -20, 5]));

/*
4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.
*/


function biggerName(arrayName) {
  let largestName = arrayName[0];
  
  for (let index in arrayName) {
    if (arrayName[index].length > largestName.length) {
      largestName = arrayName[index];
    }
  }
  return console.log(`Maior nome: ${largestName}`);
}
console.log(biggerName(['ana', 'deborah', 'bianca', 'mia', 'nádia', 'fernanda']));

/*
🚀 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.
*/

function mostRepeated(arrayNum) {
  let counterNum = 0; //conta quantas vezes o número vai se repetir
  let counterRepeatedNum = 0; //armazena o número que irá se repetir mais vezes
  let indexRepeatedNum = 0; //armazena o index do número que mais irá se repetir

  for (let index1 in arrayNum) {
    //primeira iteração armazena um número 
    let numVerifier =  arrayNum[index1]; 
    for (let index2 in arrayNum) {
      //segunda iteração compara o número armazenado da primeira iteração com os demais número da matriz
      if(numVerifier === arrayNum[index2]) {
        //arrayNum[index2] porque 'numVerifier' irá comparar ao 'index1' 
        counterNum += 1; 
      }
    }
    if(counterNum > counterRepeatedNum) {
      counterRepeatedNum = counterNum; //armazena o maior número do contador
      indexRepeatedNum = index1; //armazena o índice do número que mais se repetirá
    }
    counterNum = 0; //contador deverá ser reatribuido para uma nova análise
  }
  //retorna o elemento mais repetido
  return console.log(`Numero mais repetido: ${arrayNum[indexRepeatedNum]}`);
}
console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]));

/*
6. Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
 * Valor de teste: N = 5.
 * Valor esperado no retorno da função: 1 + 2 + 3 + 4 + 5 = 15.
*/

function sumNum (num) {
  let accumulator = 0;
  for (let index = 1; index <= num; index += 1) {
    accumulator += index; 
  }
  return console.log(`As somas secessivas de 1 até ${num}: ${accumulator}`);
}
console.log(sumNum(5));

/*
7. Crie uma função que receba uma string word e outra string ending.
Verifique se a string ending é o final da string word.
Considere que a string ending sempre será menor que a string word.

 * Valor de teste: 'trybe' e 'be'
 * Valor esperado no retorno da função: true
 * verificaFimPalavra('trybe', 'be');
 * Retorno esperado: true
 * verificaFimPalavra('joaofernando', 'fernan');
 * Retorno esperado: false 
*/

function endedWords (word, wordEnd) {
  isEnded = true;

  word = word.split("");
  wordEnd = wordEnd.split("");
  
  for (let index = 0; index < wordEnd.length; index += 1) {
    if(word[word.length - wordEnd.length + index] != wordEnd[index]) {
      isEnded = false;
    }
  }
  return console.log(`A segunda palavra termina semelhante a primeira: ${isEnded}`);
}
console.log(endedWords("deborah", "debora"));

//Outro modo:
/*
function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  
  return result;
}
*/


