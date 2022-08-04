//Exercícios:
/*
1. Crie uma função que receba um número e retorne seu fatorial:

Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um.

Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

Bônus (opcional): tente fazer o mesmo exercício de forma recursiva.
Spoiler: É possível resolver com uma linha usando ternary operator.
*/

const factorial = number => {
  let result = number;
  for (let index = 1; index < number; index += 1) {
    result *= index;
  }
  return result;
}
console.log(factorial(3));

const fatorial2 = número => {
  //Como o fatorial de um número inteiro e positivo é o resultado de todos os seus antecessores até o número um, atribua o valor 1 a variável 'resultado'.
  let resultado = 1;
  for (let índice = 1; índice <= número; índice += 1) {
    //Como já foi atribuído o valor de 1 para a variável resultado, você pode atribuir o valor de 2 para o índice, já que não é necessário multiplicar 1 * 1.
    resultado = resultado * índice;
  }
  return resultado;
};
console.log(fatorial2(3));


//Fatorial em uma linha usando condicional ternário:
const factor = num => (num > 1) ? num * factor(num - 1) : 1;
console.log(factor(3));


//2. Crie uma função que receba uma frase e retorne a maior palavra:

const biggerWord = phrase => {
  let arrayPhrase = phrase.split(' ');
  let bigger = '';
  for (let word of arrayPhrase) {
    if (word.length > bigger.length) {
      bigger = word;
    }
  }
  return console.log(`Maior Palavra: ${bigger}\nNúmero de Letras: ${bigger.length}`);
}
console.log(biggerWord("Deborah é uma pessoa audaciosa"));
console.log(biggerWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

/*
🚀 3. Crie uma página com um contador de cliques
Sua página deve conter:
Um botão ao qual será associado um event listener;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

Obs.: Questão efetuada em 'exercicio_parte3.html'
*/