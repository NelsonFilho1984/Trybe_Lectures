
//Arrays:

let variavel = 'valor'; //variável simples

let array = ['valor1', 'valor2', 'valor3']; //variável composta
console.log(array);

//Chamada de elemento pelo índice do array:

//Atenção! a primeira posição do array é representada pelo índice número 0.

console.log(array[0]); //valor1
console.log(array[1]); //valor2

//Adicionando/Subscrevendo um elemento pelo índice do array:
array[3] = 'valor4';
console.log(array);

//Método .push() --> adiciona um elemento no final do array: 
array.push('valor5');
console.log(array);

//Método .unshift() --> adiciona um elemento no início do array.

//Método .shift() --> remove o primeiro item da lista de arrays.

//Método .length --> enumera quantos itens possui o array:

console.log(array.length);//5

//Método .sort() --> põe o array em ordem alfanumérica:
let par = [8, 2, 6, 4,];
console.log(par.sort()); //[2, 4, 6, 8]

//Iteração com arrays:
for( let index = 0; index < array.length; index += 1) {
  console.log(array[index]);
}
/*
valor1
valor2
valor3
valor4
valor5
*/

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café


//Importante: o último elemento do array sempre será o .length - 1 ---> array[array.length - 1];
let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

//Método .pop() nos permite remover o último item do array.

//Exercícios:

//1. Obtenha o valor "Serviços" do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//2. Procure o índice do valor "Portfólio" do array menu:

menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu[2];

console.log(indexOfPortfolio);

//3. Adicione o valor "Contato" no final do array menu:

menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu);