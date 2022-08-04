//For/of:

let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
}
// resultado:
// 1
// 2
// 3
// 4
// 5


//Decompor as letras das palavras:

let word = "Hello";
for (let letter of word) {
  console.log(letter);
}
// resultado:
// H
// e
// l
// l
// o

//Somar um valor a cada elemento do array e retorná-los da seguinte forma:

let arrOfnumbers = [10, 20, 30];
for (let sum of arrOfnumbers) {
  sum += 1;
  console.log(sum);
}
// resultado:
// 11
// 21
// 31

//Atenção! É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e no caso, adicionando 1 à soma.

//Exercício:

//1. Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let n of names) {
  console.log(n);
}
